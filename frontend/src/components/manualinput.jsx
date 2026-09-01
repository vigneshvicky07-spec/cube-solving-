import { useState } from 'react';
import axios from 'axios';
import './ManualInput.css';
const FACES = [
  { id: 'U', label: 'Top (U)', defaultColor: 'W' },
  { id: 'R', label: 'Right (R)', defaultColor: 'B' },
  { id: 'F', label: 'Front (F)', defaultColor: 'R' },
  { id: 'D', label: 'Bottom (D)', defaultColor: 'Y' },
  { id: 'L', label: 'Left (L)', defaultColor: 'G' },
  { id: 'B', label: 'Back (B)', defaultColor: 'O' }
];
const COLORS = [
  { id: 'W', hex: '#f0f0f0', label: 'White' },
  { id: 'Y', hex: '#ffd700', label: 'Yellow' },
  { id: 'R', hex: '#ef4444', label: 'Red' },
  { id: 'O', hex: '#f97316', label: 'Orange' },
  { id: 'B', hex: '#3b82f6', label: 'Blue' },
  { id: 'G', hex: '#22c55e', label: 'Green' }
];
export default function ManualInput({ onSolved, onStateBuilt }) {
  // Initialize state with default colors for the centers, and white for the rest
  const getInitialState = () => {
    const state = {};
    FACES.forEach(face => {
      // 9 stickers per face, middle sticker (index 4) is the fixed center
      state[face.id] = Array(9).fill('W');
      state[face.id][4] = face.defaultColor; 
    });
    return state;
  };
  const [faceData, setFaceData] = useState(getInitialState());
  const [currentFaceIndex, setCurrentFaceIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('W');
  const [solving, setSolving] = useState(false);
  const [error, setError] = useState(null);
  const currentFace = FACES[currentFaceIndex];
  const handleStickerClick = (index) => {
    // Prevent changing the center sticker
    if (index === 4) return;
    setFaceData(prev => {
      const newFace = [...prev[currentFace.id]];
      newFace[index] = selectedColor;
      return { ...prev, [currentFace.id]: newFace };
    });
  };
  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all manually inputted faces?')) {
      setFaceData(getInitialState());
      setCurrentFaceIndex(0);
      setError(null);
    }
  };
  const handleSolve = async () => {
    setSolving(true);
    setError(null);
    
    // Default color map mapping color characters back to Kociemba standard letters
    // Based on the center sticker mapping: U:W, R:B, F:R, D:Y, L:G, B:O
    const colorToFaceMap = {
      'W': 'U',
      'Y': 'D',
      'R': 'F',
      'O': 'B',
      'B': 'R',
      'G': 'L'
    };
    // Transform colors to face letters
    const transformedFaces = {};
    Object.keys(faceData).forEach(faceId => {
      transformedFaces[faceId] = faceData[faceId].map(color => colorToFaceMap[color] || 'U');
    });
    try {
      // Build state string
      const buildRes = await axios.post('/api/build-state', { faces: transformedFaces });
      const cubeState = buildRes.data.cube_state;
      
      if (onStateBuilt) onStateBuilt(cubeState);
      // Solve
      const t0 = Date.now();
      const solveRes = await axios.post('/api/solve', { cube_state: cubeState });
      const elapsed = Date.now() - t0;
      if (onSolved) {
        onSolved(solveRes.data.solution, solveRes.data.solve_time_ms || elapsed);
      }
    } catch (err) {
      setError(err.response?.data?.detail || 'Solve failed. Please check if your cube colors are valid.');
    } finally {
      setSolving(false);
    }
  };
  return (
    <div className="manual-input-panel glass animate-fade-in">
      <div className="manual-header">
        <h2>Manual Color Input</h2>
        <span className="badge badge-purple">{currentFaceIndex + 1} / 6 Faces</span>
      </div>
      {error && <div className="error-msg">⚠️ {error}</div>}
      <div className="manual-content">
        {/* Color Palette Selector */}
        <div className="palette-section">
          <h3>1. Select a Color</h3>
          <div className="color-palette">
            {COLORS.map(c => (
              <button
                key={c.id}
                className={`palette-btn ${selectedColor === c.id ? 'active' : ''}`}
                style={{ backgroundColor: c.hex }}
                onClick={() => setSelectedColor(c.id)}
                title={c.label}
              />
            ))}
          </div>
        </div>
        {/* 3x3 Grid Editor */}
        <div className="grid-section">
          <div className="grid-header">
            <h3>2. Tap to Paint: {currentFace.label}</h3>
            <p className="hint">Center piece is fixed.</p>
          </div>
          <div className="cube-grid">
            {faceData[currentFace.id].map((colorChar, idx) => {
              const hexColor = COLORS.find(c => c.id === colorChar)?.hex || '#ccc';
              const isCenter = idx === 4;
              return (
                <button
                  key={idx}
                  className={`grid-sticker ${isCenter ? 'center-sticker' : ''}`}
                  style={{ backgroundColor: hexColor }}
                  onClick={() => handleStickerClick(idx)}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* Navigation Controls */}
      <div className="manual-controls">
        <button 
          className="btn btn-secondary btn-sm"
          onClick={() => setCurrentFaceIndex(i => Math.max(0, i - 1))}
          disabled={currentFaceIndex === 0 || solving}
        >
          Previous
        </button>
        
        <button 
          className="btn btn-danger btn-sm"
          onClick={handleReset}
          disabled={solving}
        >
          Reset All
        </button>
        {currentFaceIndex < 5 ? (
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => setCurrentFaceIndex(i => Math.min(5, i + 1))}
            disabled={solving}
          >
            Next Face
          </button>
        ) : (
          <button 
            className="btn btn-primary btn-sm solve-btn-glow"
            onClick={handleSolve}
            disabled={solving}
          >
            {solving ? <><span className="spinner" /> Solving...</> : '🎲 Solve Cube'}
          </button>
        )}
      </div>
    </div>
  );
}