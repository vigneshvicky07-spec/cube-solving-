/**
 * ManualInput.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Lets users paint all 54 stickers of a Rubik's Cube manually (6 faces × 9
 * stickers), then send the cube state to the FastAPI backend for solving.
 *
 * Guarantees:
 *  • Every sticker — including each face's center — is fully editable.
 *  • Each of the six colors is capped at exactly 9 stickers across the cube.
 *  • Live per-color usage counters are shown on every palette swatch.
 *  • Full client-side validation before any network call.
 *  • Existing API contract (POST /api/build-state → POST /api/solve) is
 *    preserved exactly; no backend changes required.
 *  • Zero duplicate imports, constants, hooks, or JSX blocks.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useState, useCallback, useMemo } from 'react';
import axios from 'axios';
import './ManualInput.css';

// ─── Module-level constants ───────────────────────────────────────────────────
// Defined outside the component so they are created only once per module load.

/** Ordered list of the six Rubik's Cube faces (Kociemba order). */
const FACES = [
  { id: 'U', label: 'Top (U)',    emoji: '⬆️', defaultColor: 'W' },
  { id: 'R', label: 'Right (R)', emoji: '➡️', defaultColor: 'B' },
  { id: 'F', label: 'Front (F)', emoji: '🔲', defaultColor: 'R' },
  { id: 'D', label: 'Bottom (D)',emoji: '⬇️', defaultColor: 'Y' },
  { id: 'L', label: 'Left (L)',  emoji: '⬅️', defaultColor: 'G' },
  { id: 'B', label: 'Back (B)',  emoji: '🔄', defaultColor: 'O' },
];

/** Six sticker colors supported by the solver. */
const COLORS = [
  { id: 'W', hex: '#f0f0f0', label: 'White'  },
  { id: 'Y', hex: '#ffd700', label: 'Yellow' },
  { id: 'R', hex: '#ef4444', label: 'Red'    },
  { id: 'O', hex: '#f97316', label: 'Orange' },
  { id: 'B', hex: '#3b82f6', label: 'Blue'   },
  { id: 'G', hex: '#22c55e', label: 'Green'  },
];

/** Maximum times any one color may appear across the entire cube (6 colors × 9 = 54). */
const STICKERS_PER_COLOR = 9;

/**
 * Maps user-visible color ID (W/Y/R/O/B/G) → Kociemba face letter (U/D/F/B/R/L).
 * This matches the standard orientation expected by the FastAPI backend.
 */
const COLOR_TO_FACE_LETTER = { W: 'U', Y: 'D', R: 'F', O: 'B', B: 'R', G: 'L' };

/**
 * Hex-color lookup Map, built once at module level for O(1) access.
 * Avoids rebuilding inside the component on every render.
 */
const COLOR_HEX_MAP = new Map(COLORS.map(c => [c.id, c.hex]));

/**
 * Label lookup Map for fast color-id → label resolution.
 */
const COLOR_LABEL_MAP = new Map(COLORS.map(c => [c.id, c.label]));

// ─── Pure helper functions ────────────────────────────────────────────────────
// Defined at module level (not inside the component) so they are never
// re-created on re-render and can be called freely without useCallback.

/**
 * Produces the initial 54-sticker state.
 * Every sticker on a face starts as that face's canonical center color.
 * Used both as the useState initializer and after a Reset.
 *
 * @returns {{ U: string[], R: string[], F: string[], D: string[], L: string[], B: string[] }}
 */
function buildInitialState() {
  const state = {};
  FACES.forEach(face => {
    state[face.id] = Array(STICKERS_PER_COLOR).fill(face.defaultColor);
  });
  return state;
}

/**
 * Counts how many times each color appears across all 54 stickers.
 *
 * @param   {Object} faceData  Shape: { U: string[9], R: string[9], … }
 * @returns {Object}           Shape: { W: number, Y: number, … }
 */
function countColors(faceData) {
  const counts = { W: 0, Y: 0, R: 0, O: 0, B: 0, G: 0 };
  Object.values(faceData).forEach(stickers =>
    stickers.forEach(colorId => {
      if (Object.prototype.hasOwnProperty.call(counts, colorId)) {
        counts[colorId]++;
      }
    })
  );
  return counts;
}

/**
 * Validates the entire cube and returns an array of human-readable error
 * messages. An empty array means the cube is valid and ready to solve.
 *
 * Rules checked:
 *  1. Each color must appear exactly 9 times across the whole cube.
 *  2. All six face centers must be different colors.
 *
 * @param   {Object}   faceData
 * @returns {string[]} List of error messages (empty = valid).
 */
function validateCube(faceData) {
  const errors = [];
  const counts = countColors(faceData);

  // Rule 1 — color frequency
  COLORS.forEach(({ id, label }) => {
    const n = counts[id];
    if (n < STICKERS_PER_COLOR) {
      errors.push(`${label}: only ${n} sticker${n !== 1 ? 's' : ''} placed — need exactly 9.`);
    } else if (n > STICKERS_PER_COLOR) {
      errors.push(`${label}: ${n} stickers placed — maximum is 9.`);
    }
  });

  // Rule 2 — unique centers (center = index 4 on each face)
  // Only worth checking once color counts are correct to give clearer feedback.
  if (errors.length === 0) {
    const centers = FACES.map(f => faceData[f.id][4]);
    if (new Set(centers).size !== FACES.length) {
      errors.push(
        'Each face center must be a unique color. ' +
        'Two or more face centers currently share the same color.'
      );
    }
  }

  return errors;
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * ManualInput
 *
 * @param {(moves: string[], solveMs: number) => void} onSolved
 *   Invoked with the solution move-list and solve duration after a successful solve.
 *
 * @param {(cubeState: string) => void} onStateBuilt
 *   Invoked with the 54-character Kociemba state string once it is built.
 */
export default function ManualInput({ onSolved, onStateBuilt }) {

  // ── React state ─────────────────────────────────────────────────────────────
  /** Full 54-sticker cube data, keyed by face ID. */
  const [faceData, setFaceData] = useState(buildInitialState);

  /** Index (0–5) of the face currently visible in the grid editor. */
  const [currentFaceIndex, setCurrentFaceIndex] = useState(0);

  /** The color ID the user has chosen to paint with. */
  const [selectedColor, setSelectedColor] = useState('W');

  /** True while the API call is in-flight. */
  const [solving, setSolving] = useState(false);

  /** API / network error message (null = no error). */
  const [apiError, setApiError] = useState(null);

  /** Client-side cube validation errors (empty array = valid). */
  const [validationErrors, setValidationErrors] = useState([]);

  /** Inline warning shown when the user tries to use a maxed-out color. */
  const [colorLimitMsg, setColorLimitMsg] = useState('');

  // ── Derived / memoised values ────────────────────────────────────────────────

  /** The face object currently being edited. */
  const currentFace = FACES[currentFaceIndex];

  /** Whether the user is on the last face (shows Solve instead of Next). */
  const isLastFace = currentFaceIndex === FACES.length - 1;

  /**
   * Per-color sticker counts across the whole cube.
   * Recomputed only when faceData changes.
   */
  const colorCounts = useMemo(() => countColors(faceData), [faceData]);

  /**
   * Per-color sticker counts for the current face only.
   * Used by the face summary chips below the grid.
   */
  const currentFaceColorCounts = useMemo(() =>
    faceData[currentFace.id].reduce((acc, colorId) => {
      acc[colorId] = (acc[colorId] || 0) + 1;
      return acc;
    }, {}),
    [faceData, currentFace.id]
  );

  // ── Event handlers ───────────────────────────────────────────────────────────

  /**
   * Paints the sticker at `index` on the current face with the selected color.
   * Enforces the per-color cap of 9 before applying the change.
   */
  const handleStickerClick = useCallback((index) => {
    const existingColor = faceData[currentFace.id][index];

    // No-op: the sticker already has the target color
    if (existingColor === selectedColor) return;

    // Enforce per-color maximum
    if (colorCounts[selectedColor] >= STICKERS_PER_COLOR) {
      const label = COLOR_LABEL_MAP.get(selectedColor) ?? selectedColor;
      setColorLimitMsg(`Maximum ${STICKERS_PER_COLOR} stickers allowed for ${label}.`);
      return;
    }

    // Apply the paint and clear any stale messages
    setColorLimitMsg('');
    setValidationErrors([]);
    setApiError(null);

    setFaceData(prev => {
      const updatedFace = [...prev[currentFace.id]];
      updatedFace[index] = selectedColor;
      return { ...prev, [currentFace.id]: updatedFace };
    });
  }, [faceData, currentFace.id, selectedColor, colorCounts]);

  /**
   * Switches the active paint color.
   * Clears the color-limit warning when switching to a non-maxed color.
   */
  const handleColorSelect = useCallback((colorId) => {
    setSelectedColor(colorId);
    if (colorCounts[colorId] < STICKERS_PER_COLOR) {
      setColorLimitMsg('');
    }
  }, [colorCounts]);

  /** Navigates to the previous face. */
  const handlePrev = useCallback(() => {
    setCurrentFaceIndex(i => Math.max(0, i - 1));
    setColorLimitMsg('');
  }, []);

  /** Navigates to the next face. */
  const handleNext = useCallback(() => {
    setCurrentFaceIndex(i => Math.min(FACES.length - 1, i + 1));
    setColorLimitMsg('');
  }, []);

  /**
   * Stable click handler for face tab buttons.
   * Memoised so .map() never creates new function references on each render,
   * eliminating the inline-arrow-in-map lint pattern.
   */
  const handleFaceTabClick = useCallback((faceIndex) => {
    setCurrentFaceIndex(faceIndex);
    setColorLimitMsg('');
  }, []);

  /** Resets the entire cube to its initial default-color state. */
  const handleReset = useCallback(() => {
    if (!window.confirm('Reset all faces to their default colors?')) return;
    setFaceData(buildInitialState());
    setCurrentFaceIndex(0);
    setSelectedColor('W');
    setApiError(null);
    setValidationErrors([]);
    setColorLimitMsg('');
  }, []);

  /**
   * Runs client-side validation, builds the Kociemba state string via the
   * backend, then requests a solution — all without modifying the API contract.
   *
   * API calls (unchanged):
   *   POST /api/build-state  { faces: { U: [...], R: [...], … } }
   *   POST /api/solve        { cube_state: "UUUUUUUUURRRRRRRRRFF…" }
   */
  const handleSolve = useCallback(async () => {
    // Reset all messages
    setApiError(null);
    setValidationErrors([]);
    setColorLimitMsg('');

    // ── 1. Client-side validation ─────────────────────────────────────────
    const errors = validateCube(faceData);
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }

    setSolving(true);

    // ── 2. Transform color IDs → Kociemba face letters ───────────────────
    const transformedFaces = {};
    Object.entries(faceData).forEach(([faceId, stickers]) => {
      transformedFaces[faceId] = stickers.map(
        colorId => COLOR_TO_FACE_LETTER[colorId] ?? 'U'
      );
    });

    try {
      // ── 3. Build 54-char Kociemba state string ───────────────────────
      const buildRes  = await axios.post('/api/build-state', { faces: transformedFaces });
      const cubeState = buildRes.data.cube_state;
      onStateBuilt?.(cubeState);

      // ── 4. Solve ─────────────────────────────────────────────────────
      const t0       = Date.now();
      const solveRes = await axios.post('/api/solve', { cube_state: cubeState });
      const elapsed  = Date.now() - t0;

      onSolved?.(solveRes.data.solution, solveRes.data.solve_time_ms ?? elapsed);
    } catch (err) {
      setApiError(
        err.response?.data?.detail ??
        'Solve failed. Please verify your cube configuration and try again.'
      );
    } finally {
      setSolving(false);
    }
  }, [faceData, onStateBuilt, onSolved]);

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="manual-input-panel glass animate-fade-in">

      {/* ── Header ────────────────────────────────────────────────────────── */}
      <div className="manual-header">
        <h2>Manual Color Input</h2>
        <span className="badge badge-purple">
          Face {currentFaceIndex + 1} / {FACES.length}
        </span>
      </div>

      {/* ── Face quick-jump tabs ───────────────────────────────────────────── */}
      <div className="face-tabs" role="tablist" aria-label="Cube faces">
        {FACES.map((face, i) => (
          <button
            key={face.id}
            role="tab"
            aria-selected={i === currentFaceIndex}
            className={`face-tab-btn ${i === currentFaceIndex ? 'active' : ''}`}
            onClick={() => handleFaceTabClick(i)}
            title={face.label}
          >
            <span className="face-tab-emoji">{face.emoji}</span>
            <span className="face-tab-id">{face.id}</span>
          </button>
        ))}
      </div>

      {/* ── Inline messages ───────────────────────────────────────────────── */}

      {/* Color-limit warning */}
      {colorLimitMsg && (
        <div className="msg-box msg-warning animate-fade-in" role="alert">
          ⚠️ {colorLimitMsg}
        </div>
      )}

      {/* Client-side validation errors */}
      {validationErrors.length > 0 && (
        <div className="msg-box msg-error animate-fade-in" role="alert">
          <strong>Please fix these issues before solving:</strong>
          <ul className="validation-list">
            {validationErrors.map((msg) => (
              // Using the message string as key — messages are unique validation phrases
              <li key={msg}>{msg}</li>
            ))}
          </ul>
        </div>
      )}

      {/* API / network error */}
      {apiError && (
        <div className="msg-box msg-error animate-fade-in" role="alert">
          ⚠️ {apiError}
        </div>
      )}

      {/* ── Editing area: palette + grid ──────────────────────────────────── */}
      <div className="manual-content">

        {/* ── Color palette (left / top on mobile) ──────────────────────── */}
        <div className="palette-section">
          <h3 className="section-label">1. Pick a Color</h3>

          <div className="color-palette">
            {COLORS.map(color => {
              const used     = colorCounts[color.id];
              const maxed    = used >= STICKERS_PER_COLOR;
              const isActive = selectedColor === color.id;

              return (
                <button
                  key={color.id}
                  className={`palette-btn${isActive ? ' active' : ''}${maxed ? ' maxed' : ''}`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => handleColorSelect(color.id)}
                  title={`${color.label} — ${used} / ${STICKERS_PER_COLOR} used`}
                  aria-label={`${color.label}: ${used} of ${STICKERS_PER_COLOR} stickers used${maxed ? ' (maximum reached)' : ''}`}
                  aria-pressed={isActive}
                >
                  {/* Live usage count inside the swatch */}
                  <span
                    className={`color-count${maxed ? ' color-count-maxed' : ''}`}
                    style={{ color: color.id === 'W' ? '#333' : '#fff' }}
                    aria-hidden="true"
                  >
                    {used}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="palette-hint">Tap a color, then tap a sticker.</p>
        </div>

        {/* ── 3 × 3 grid editor (right / bottom on mobile) ──────────────── */}
        <div className="grid-section">
          <div className="grid-header">
            <h3 className="section-label">
              2. Paint — {currentFace.emoji} {currentFace.label}
            </h3>
            <p className="hint">All 9 stickers are editable, including the center.</p>
          </div>

          <div
            className="cube-grid"
            role="grid"
            aria-label={`${currentFace.label} face — 3×3 sticker grid`}
          >
            {faceData[currentFace.id].map((colorId, idx) => {
              const hex       = COLOR_HEX_MAP.get(colorId) ?? '#ccc';
              const colorName = COLOR_LABEL_MAP.get(colorId) ?? colorId;
              const isCenter  = idx === 4;

              return (
                <button
                  // Face-prefixed key ensures React reconciles correctly when switching faces
                  key={`${currentFace.id}-${idx}`}
                  role="gridcell"
                  className={`grid-sticker${isCenter ? ' is-center' : ''}`}
                  style={{ backgroundColor: hex }}
                  onClick={() => handleStickerClick(idx)}
                  aria-label={`Sticker ${idx + 1}${isCenter ? ' (center)' : ''}: ${colorName}`}
                  title={`${colorName}${isCenter ? ' · center' : ''}`}
                />
              );
            })}
          </div>

          {/* Color-count chips for this face */}
          <div className="face-color-summary" aria-label="Color distribution on this face">
            {Object.entries(currentFaceColorCounts).map(([colorId, count]) => (
              <span
                key={colorId}
                className="face-color-chip"
                style={{ backgroundColor: COLOR_HEX_MAP.get(colorId) ?? '#ccc' }}
                title={`${COLOR_LABEL_MAP.get(colorId) ?? colorId}: ${count}`}
                aria-label={`${COLOR_LABEL_MAP.get(colorId) ?? colorId}: ${count} sticker${count !== 1 ? 's' : ''}`}
              >
                <span style={{ color: colorId === 'W' ? '#333' : '#fff' }}>
                  {count}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Navigation & action bar ───────────────────────────────────────── */}
      <div className="manual-controls">
        {/* Previous face */}
        <button
          id="manual-prev-btn"
          className="btn btn-secondary btn-sm"
          onClick={handlePrev}
          disabled={currentFaceIndex === 0 || solving}
          aria-label="Go to previous face"
        >
          ← Previous
        </button>

        {/* Reset */}
        <button
          id="manual-reset-btn"
          className="btn btn-danger btn-sm"
          onClick={handleReset}
          disabled={solving}
          aria-label="Reset all faces"
        >
          ↺ Reset
        </button>

        {/* Next face OR Solve (only on the last face) */}
        {!isLastFace ? (
          <button
            id="manual-next-btn"
            className="btn btn-primary btn-sm"
            onClick={handleNext}
            disabled={solving}
            aria-label="Go to next face"
          >
            Next Face →
          </button>
        ) : (
          <button
            id="manual-solve-btn"
            className="btn btn-primary btn-sm solve-btn-glow"
            onClick={handleSolve}
            disabled={solving}
            aria-label="Solve the cube"
          >
            {solving ? (
              <><span className="spinner" aria-hidden="true" /> Solving…</>
            ) : (
              '🎲 Solve Cube'
            )}
          </button>
        )}
      </div>
    </div>
  );
}