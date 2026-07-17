import kociemba
# Kociemba notation mapping
VALID_MOVES = {
    "U", "U'", "U2",
    "D", "D'", "D2",
    "F", "F'", "F2",
    "B", "B'", "B2",
    "L", "L'", "L2",
    "R", "R'", "R2",
}
def solve_cube(cube_state: str) -> dict:
    """
    Solve a Rubik's Cube given a 54-character state string.
    
    The state string uses the following face order and sticker order:
    U face (9) + R face (9) + F face (9) + D face (9) + L face (9) + B face (9)
    
    Each character is one of: U, R, F, D, L, B (representing the color of that face's center)
    
    Returns:
        dict with 'solution' (move list), 'move_count', and optional 'error'
    """
    if len(cube_state) != 54:
        return {"error": f"Invalid cube state length: {len(cube_state)} (expected 54)"}
    valid_colors = set("URFDLB")
    for ch in cube_state:
        if ch not in valid_colors:
            return {"error": f"Invalid character in cube state: '{ch}'"}
    try:
        solution_str = kociemba.solve(cube_state)
        moves = solution_str.strip().split() if solution_str.strip() else []
        return {
            "solution": moves,
            "solution_string": solution_str.strip(),
            "move_count": len(moves),
            "error": None,
        }
    except Exception as e:
        return {"error": str(e), "solution": [], "move_count": 0}
