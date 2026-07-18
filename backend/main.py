from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List
import time
from backend.color_detector import detect_colors_from_b64, build_cube_state
from backend.cube_solver import solve_cube
from backend.history import init_db, save_solve, get_history, clear_history
# Initialize database on startup
init_db()
app = FastAPI(title="Rubik's Cube Solver API", version="1.0.0")
# Allow frontend dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# ─── Request / Response Models ────────────────────────────────────────────────
class DetectRequest(BaseModel):
    image: str          # base64-encoded image (data URL or raw)
    face: str           # which face: U, R, F, D, L, B
class SolveRequest(BaseModel):
    cube_state: str     # 54-char Kociemba state string
    duration_ms: Optional[int] = None
class SaveRequest(BaseModel):
    cube_state: str
    solution: str
    move_count: int
    duration_ms: Optional[int] = None
# ─── Routes ───────────────────────────────────────────────────────────────────
@app.get("/")
def root():
    return {"message": "Rubik's Cube Solver API is running 🎲"}
@app.post("/api/detect")
def detect_colors(req: DetectRequest):
    """
    Detect sticker colors from a base64 face image.
    Returns list of 9 color strings in row-major order (W/Y/R/O/B/G).
    """
    if req.face not in {"U", "R", "F", "D", "L", "B"}:
        raise HTTPException(status_code=400, detail=f"Invalid face: {req.face}")
    
    result = detect_colors_from_b64(req.image)
    
    if result.get("error"):
        raise HTTPException(status_code=422, detail=result["error"])
    
    return {
        "face": req.face,
        "colors": result["colors"],
    }
@app.post("/api/solve")
def solve(req: SolveRequest):
    """
    Solve the cube given a 54-character Kociemba state string.
    Returns solution moves and move count.
    """
    start = time.time()
    result = solve_cube(req.cube_state)
    elapsed_ms = int((time.time() - start) * 1000)
    
    if result.get("error"):
        raise HTTPException(status_code=422, detail=result["error"])
    
    # Auto-save to history
    if result["solution"]:
        save_solve(
            cube_state=req.cube_state,
            solution=result["solution_string"],
            move_count=result["move_count"],
            duration_ms=req.duration_ms or elapsed_ms,
        )
    
    return {
        "solution": result["solution"],
        "solution_string": result["solution_string"],
        "move_count": result["move_count"],
        "solve_time_ms": elapsed_ms,
    }
@app.get("/api/history")
def history(limit: int = 50):
    """Return the last N solve records."""
    return {"history": get_history(limit=limit)}
@app.delete("/api/history")
def delete_history():
    """Clear all solve history."""
    clear_history()
    return {"message": "History cleared"}
@app.post("/api/build-state")
def build_state(body: dict):
    """
    Build a 54-char Kociemba state string from face color maps.
    Expects: { faces: { U: [...9 colors], R: [...], F: [...], D: [...], L: [...], B: [...] } }
    where colors are already mapped to U/R/F/D/L/B.
    """
    faces = body.get("faces", {})
    state = build_cube_state(faces)
    if state is None:
        raise HTTPException(status_code=422, detail="Invalid face data: each face must have exactly 9 stickers")
    return {"cube_state": state}
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
