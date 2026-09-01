import React, { useState } from 'react'
import CameraFeed from './components/CameraFeed.jsx'
import CubeVisualizer from './components/CubeVisualizer.jsx'
import SolvePanel from './components/SolvePanel.jsx'
import HistoryLog from './components/HistoryLog.jsx'
const TABS = [
  { id: 'scan',    label: 'Scan Cube',    icon: '📷' },
  { id: 'solve',   label: '3D Solver',    icon: '🎲' },
  { id: 'history', label: 'History',      icon: '📜' },
]
/**
 * Color → Kociemba face mapping.
 * Centers of faces determine what color = what face letter.
 * Default standard orientation: U=White, R=Blue, F=Red, D=Yellow, L=Green, B=Orange
 */
const DEFAULT_COLOR_MAP = { W: 'U', B: 'R', R: 'F', Y: 'D', G: 'L', O: 'B' }
export default function App() {
  const [activeTab, setActiveTab]       = useState('scan')
  const [faceColors, setFaceColors]     = useState({})     // { U:[...9], R:[...], ... }
  const [cubeState, setCubeState]       = useState('')      // 54-char Kociemba string
  const [solution, setSolution]         = useState([])      // ['R', "U'", ...]
  const [solveTime, setSolveTime]       = useState(null)
  const [historyKey, setHistoryKey]     = useState(0)
  const capturedCount = Object.keys(faceColors).length
  function handleFaceDetected(face, colors) {
    // colors: array of 9 color chars W/Y/R/O/B/G
    // Map them to Kociemba face letters
    const mapped = colors.map(c => DEFAULT_COLOR_MAP[c] || 'U')
    setFaceColors(prev => ({ ...prev, [face]: mapped }))
  }
  function handleSolved(moves, ms) {
    setSolution(moves)
    setSolveTime(ms)
    setActiveTab('solve')
    setHistoryKey(k => k + 1)
  }
  function handleReset() {
    setFaceColors({})
    setCubeState('')
    setSolution([])
    setSolveTime(null)
    setActiveTab('scan')
  }
  return (
    <div className="app">
      {/* ── Background effects ─────────────────────────────────────────── */}
      <div className="bg-grid" />
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">⬡</span>
            <span className="gradient-text">CubeSolve</span>
          </div>
          <nav className="tab-nav">
            {TABS.map(tab => (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span>{tab.label}</span>
                {tab.id === 'scan' && capturedCount > 0 && (
                  <span className="tab-badge">{capturedCount}/6</span>
                )}
              </button>
            ))}
          </nav>
          <button id="reset-btn" className="btn btn-secondary btn-sm" onClick={handleReset}>
            ↺ Reset
          </button>
        </div>
      </header>
      {/* ── Main Content ───────────────────────────────────────────────── */}
      <main className="main-content">
        {activeTab === 'scan' && (
          <CameraFeed
            key="camera"
            faceColors={faceColors}
            onFaceDetected={handleFaceDetected}
            onSolved={handleSolved}
            onStateBuilt={setCubeState}
          />
        )}
        {activeTab === 'solve' && (
          <div className="solve-layout">
            <CubeVisualizer
              key="viz"
              faceColors={faceColors}
              solution={solution}
            />
            <SolvePanel
              key="panel"
              solution={solution}
              solveTime={solveTime}
              cubeState={cubeState}
            />
          </div>
        )}
        {activeTab === 'history' && (
          <HistoryLog key={historyKey} />
        )}
      </main>
    </div>
  )
}
