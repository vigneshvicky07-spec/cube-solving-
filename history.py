import sqlite3
import json
from datetime import datetime
DB_PATH = "history.db"
def init_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS solves (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            timestamp TEXT NOT NULL,
            cube_state TEXT NOT NULL,
            solution TEXT NOT NULL,
            move_count INTEGER NOT NULL,
            duration_ms INTEGER
        )
    """)
    conn.commit()
    conn.close()
def save_solve(cube_state: str, solution: str, move_count: int, duration_ms: int = None):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute(
        "INSERT INTO solves (timestamp, cube_state, solution, move_count, duration_ms) VALUES (?, ?, ?, ?, ?)",
        (datetime.utcnow().isoformat(), cube_state, solution, move_count, duration_ms)
    )
    conn.commit()
    row_id = c.lastrowid
    conn.close()
    return row_id
def get_history(limit: int = 50):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute(
        "SELECT id, timestamp, cube_state, solution, move_count, duration_ms FROM solves ORDER BY id DESC LIMIT ?",
        (limit,)
    )
    rows = c.fetchall()
    conn.close()
    return [
        {
            "id": r[0],
            "timestamp": r[1],
            "cube_state": r[2],
            "solution": r[3],
            "move_count": r[4],
            "duration_ms": r[5],
        }
        for r in rows
    ]
def clear_history():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("DELETE FROM solves")
    conn.commit()
    conn.close()
