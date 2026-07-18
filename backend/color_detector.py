import cv2
import numpy as np
import base64
from PIL import Image
import io
# HSV color ranges for Rubik's Cube sticker detection
COLOR_RANGES = {
    "W": [  # White
        ((0, 0, 200), (180, 40, 255)),
    ],
    "Y": [  # Yellow
        ((20, 100, 100), (35, 255, 255)),
    ],
    "R": [  # Red (wraps around hue)
        ((0, 120, 70), (10, 255, 255)),
        ((170, 120, 70), (180, 255, 255)),
    ],
    "O": [  # Orange
        ((10, 130, 70), (20, 255, 255)),
    ],
    "B": [  # Blue
        ((100, 100, 50), (130, 255, 255)),
    ],
    "G": [  # Green
        ((40, 50, 50), (80, 255, 255)),
    ],
}
# Mapping from color initial to Kociemba face letter
COLOR_TO_FACE = {
    "W": None,  # Set dynamically based on center sticker
    "Y": None,
    "R": None,
    "O": None,
    "B": None,
    "G": None,
}
def base64_to_image(b64_str: str) -> np.ndarray:
    """Decode base64 image string to OpenCV BGR image."""
    if "," in b64_str:
        b64_str = b64_str.split(",")[1]
    img_bytes = base64.b64decode(b64_str)
    img = Image.open(io.BytesIO(img_bytes))
    img = img.convert("RGB")
    return cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)
def classify_color(bgr_pixel: tuple) -> str:
    """Classify a BGR pixel into one of: W, Y, R, O, B, G."""
    # Convert single pixel to HSV
    pixel = np.uint8([[list(bgr_pixel)]])
    hsv = cv2.cvtColor(pixel, cv2.COLOR_BGR2HSV)[0][0]
    
    for color, ranges in COLOR_RANGES.items():
        for (lower, upper) in ranges:
            lower = np.array(lower, dtype=np.uint8)
            upper = np.array(upper, dtype=np.uint8)
            if cv2.inRange(np.array([[hsv]]), lower, upper)[0][0] == 255:
                return color
    
    return "W"  # Default fallback
def detect_face_colors(image: np.ndarray) -> list:
    """
    Detect 9 sticker colors from a face image.
    The image should be roughly square, showing one face of the cube.
    Returns list of 9 color strings (W/Y/R/O/B/G) in row-major order.
    """
    h, w = image.shape[:2]
    
    # Divide image into 3x3 grid and sample center of each cell
    cell_h = h // 3
    cell_w = w // 3
    
    colors = []
    for row in range(3):
        for col in range(3):
            # Sample center of each cell
            cx = int((col + 0.5) * cell_w)
            cy = int((row + 0.5) * cell_h)
            
            # Average over a small region for robustness
            region = image[
                max(0, cy - 10):cy + 10,
                max(0, cx - 10):cx + 10
            ]
            if region.size == 0:
                colors.append("W")
                continue
            
            avg_color = np.mean(region.reshape(-1, 3), axis=0).astype(int)
            color = classify_color(tuple(avg_color))
            colors.append(color)
    
    return colors
def detect_colors_from_b64(b64_image: str) -> dict:
    """
    Main entry point: detect sticker colors from a base64 face image.
    Returns dict with 'colors' list and 'grid' for display.
    """
    try:
        img = base64_to_image(b64_image)
        colors = detect_face_colors(img)
        return {
            "colors": colors,
            "error": None,
        }
    except Exception as e:
        return {
            "colors": [],
            "error": str(e),
        }
def build_cube_state(face_colors: dict) -> str:
    """
    Build a 54-character Kociemba cube state string from detected face colors.
    
    face_colors: dict with keys U,R,F,D,L,B, each containing list of 9 color chars.
    Color chars must already be mapped to face letters (U/R/F/D/L/B).
    
    Returns: 54-char string in order U(9)+R(9)+F(9)+D(9)+L(9)+B(9)
    """
    order = ["U", "R", "F", "D", "L", "B"]
    result = ""
    for face in order:
        stickers = face_colors.get(face, [])
        if len(stickers) != 9:
            return None
        result += "".join(stickers)
    return result
