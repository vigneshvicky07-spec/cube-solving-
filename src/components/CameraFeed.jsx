import React, { useRef, useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import './CameraFeed.css'
const FACES = [
  { id: 'U', label: 'Top',    hint: 'White center up',   emoji: '⬆️' },
  { id: 'R', label: 'Right',  hint: 'Blue center right',  emoji: '➡️' },
  { id: 'F', label: 'Front',  hint: 'Red center facing',  emoji: '🔲' },
  { id: 'D', label: 'Bottom', hint: 'Yellow center down', emoji: '⬇️' },
  { id: 'L', label: 'Left',   hint: 'Green center left',  emoji: '⬅️' },
  { id: 'B', label: 'Back',   hint: 'Orange center back', emoji: '🔄' },
]
const COLOR_STYLE = {
  W: '#f0f0f0', Y: '#ffd700', R: '#ef4444',
  O: '#f97316', B: '#3b82f6', G: '#22c55e',
}
export default function CameraFeed({ faceColors, onFaceDetected, onSolved, onStateBuilt }) {
  const videoRef     = useRef(null)
  const canvasRef    = useRef(null)
  const streamRef    = useRef(null)
  const [activeFace, setActiveFace]   = useState('U')
  const [detecting,  setDetecting]    = useState(false)
  const [solving,    setSolving]      = useState(false)
  const [error,      setError]        = useState(null)
  const [cameraOn,   setCameraOn]     = useState(false)
  const [flash,      setFlash]        = useState(false)
  const capturedFaces = Object.keys(faceColors)
  const allCaptured   = capturedFaces.length === 6
  /* ── Start camera ──────────────────────────────────────────────────── */
  const startCamera = useCallback(async () => {
    setError(null)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: 'environment' },
      })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.onloadedmetadata = () => videoRef.current.play()
      }
      setCameraOn(true)
    } catch (err) {
      setError('Camera access denied. Please allow camera permissions and refresh.')
    }
  }, [])
  /* ── Stop camera ───────────────────────────────────────────────────── */
  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop())
      streamRef.current = null
    }
    setCameraOn(false)
  }, [])
  useEffect(() => {
    startCamera()
    return () => stopCamera()
  }, [])
  /* ── Capture frame and detect colors ──────────────────────────────── */
  const captureAndDetect = useCallback(async () => {
    if (!videoRef.current || !canvasRef.current) return
    setDetecting(true)
    setError(null)
    setFlash(true)
    setTimeout(() => setFlash(false), 300)
    const video  = videoRef.current
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    // Crop square from center
    const size = Math.min(video.videoWidth, video.videoHeight)
    const sx   = (video.videoWidth  - size) / 2
    const sy   = (video.videoHeight - size) / 2
    canvas.width  = 300
    canvas.height = 300
    ctx.drawImage(video, sx, sy, size, size, 0, 0, 300, 300)
    const b64 = canvas.toDataURL('image/jpeg', 0.85)
    try {
      const res = await axios.post('/api/detect', { image: b64, face: activeFace })
      onFaceDetected(activeFace, res.data.colors)
      // Auto-advance to next uncaptured face
      const nextFace = FACES.find(f => !{ ...faceColors, [activeFace]: true }[f.id])
      if (nextFace) setActiveFace(nextFace.id)
    } catch (err) {
      setError(err.response?.data?.detail || 'Color detection failed. Try better lighting.')
    } finally {
      setDetecting(false)
    }
  }, [activeFace, faceColors, onFaceDetected])
  /* ── Solve the cube ────────────────────────────────────────────────── */
  const solveCube = useCallback(async () => {
    if (!allCaptured) return
    setSolving(true)
    setError(null)
    try {
      // Build state string from face colors
      const buildRes = await axios.post('/api/build-state', { faces: faceColors })
      const cubeState = buildRes.data.cube_state
      onStateBuilt(cubeState)
      // Solve
      const t0 = Date.now()
      const solveRes = await axios.post('/api/solve', { cube_state: cubeState })
      const elapsed  = Date.now() - t0
      onSolved(solveRes.data.solution, solveRes.data.solve_time_ms || elapsed)
    } catch (err) {
      setError(err.response?.data?.detail || 'Solve failed. Re-scan the cube.')
    } finally {
      setSolving(false)
    }
  }, [allCaptured, faceColors, onStateBuilt, onSolved])
  return (
    <div className="camera-layout">
      {/* ── Camera panel ───────────────────────────────────────────── */}
      <div className="camera-panel glass animate-fade-in">
        <div className="camera-header">
          <h2>Camera Capture</h2>
          <span className="badge badge-purple">{capturedFaces.length}/6 faces</span>
        </div>
        <div className="camera-viewport">
          {flash && <div className="capture-flash" />}
          <video ref={videoRef} className="camera-video" playsInline muted />
          <canvas ref={canvasRef} style={{ display: 'none' }} />
          {/* Overlay grid */}
          <div className="overlay-grid">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="grid-cell" />
            ))}
          </div>
          {/* Corner markers */}
          <div className="corner-marker tl" />
          <div className="corner-marker tr" />
          <div className="corner-marker bl" />
          <div className="corner-marker br" />
          {/* Current face label */}
          <div className="face-label">
            <span>{FACES.find(f => f.id === activeFace)?.emoji}</span>
            <span>Showing: <strong>{FACES.find(f => f.id === activeFace)?.label} Face</strong></span>
            <span className="face-hint">{FACES.find(f => f.id === activeFace)?.hint}</span>
          </div>
        </div>
        {/* Capture button */}
        <div className="camera-controls">
          <button
            id="capture-btn"
            className="btn btn-primary btn-lg capture-btn"
            onClick={captureAndDetect}
            disabled={detecting || !cameraOn}
          >
            {detecting ? (
              <><div className="spinner" /> Detecting…</>
            ) : (
              <>📸 Capture {FACES.find(f => f.id === activeFace)?.label} Face</>
            )}
          </button>
        </div>
        {error && (
          <div className="error-msg animate-fade-in">
            ⚠️ {error}
          </div>
        )}
      </div>
      {/* ── Sidebar ────────────────────────────────────────────────── */}
      <div className="camera-sidebar">
        {/* Face selector */}
        <div className="face-selector glass animate-fade-in">
          <h3>Faces</h3>
          <div className="face-grid">
            {FACES.map(face => {
              const captured = faceColors[face.id]
              const isActive = face.id === activeFace
              return (
                <button
                  key={face.id}
                  id={`face-btn-${face.id}`}
                  className={`face-btn ${isActive ? 'active' : ''} ${captured ? 'captured' : ''}`}
                  onClick={() => setActiveFace(face.id)}
                >
                  <span className="face-emoji">{face.emoji}</span>
                  <span className="face-name">{face.label}</span>
                  <span className={`face-status ${captured ? 'done' : ''}`}>
                    {captured ? '✓' : '○'}
                  </span>
                  {/* Mini color preview */}
                  {captured && (
                    <div className="face-preview">
                      {faceColors[face.id].map((c, i) => (
                        <div
                          key={i}
                          className="preview-sticker"
                          style={{ background: COLOR_STYLE[
                            Object.entries({ W:'U',B:'R',R:'F',Y:'D',G:'L',O:'B' })
                              .find(([,v]) => v === c)?.[0] || 'W'
                          ] || '#666' }}
                        />
                      ))}
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>
        {/* Solve button */}
        <div className="solve-section glass animate-fade-in">
          <div className="solve-progress">
            <div className="progress-label">
              <span>Cube Scanned</span>
              <span>{capturedFaces.length}/6</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${(capturedFaces.length / 6) * 100}%` }}
              />
            </div>
          </div>
          <button
            id="solve-btn"
            className="btn btn-primary btn-lg"
            style={{ width: '100%' }}
            onClick={solveCube}
            disabled={!allCaptured || solving}
          >
            {solving ? (
              <><div className="spinner" /> Solving…</>
            ) : (
              <>🧩 Solve Cube</>
            )}
          </button>
          {!allCaptured && (
            <p className="solve-hint">
              Capture all 6 faces to enable solving
            </p>
          )}
        </div>
        {/* Instructions */}
        <div className="instructions glass animate-fade-in">
          <h4>How to scan</h4>
          <ol className="steps-list">
            <li>Hold the cube with the <strong>White face up</strong>, <strong>Red face toward you</strong></li>
            <li>Select a face tab and align the 3×3 grid with the stickers</li>
            <li>Click <em>Capture</em> — colors are auto-detected</li>
            <li>Rotate the cube and scan all 6 faces</li>
            <li>Click <em>Solve Cube</em> for the solution!</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
