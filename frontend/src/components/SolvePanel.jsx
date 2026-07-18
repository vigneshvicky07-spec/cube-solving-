import './SolvePanel.css'
export default function SolvePanel({ solution, solveTime, cubeState }) {
  if (!solution || solution.length === 0) {
    return (
      <div className="solve-panel glass animate-fade-in">
        <div className="panel-empty">
          <h3>No Solution Yet</h3>
          <p>Scan your cube to generate a solution sequence.</p>
        </div>
      </div>
    )
  }
  return (
    <div className="solve-panel glass animate-fade-in">
      <div className="panel-header">
        <h3>Solution Sequence</h3>
        {solveTime !== null && (
          <span className="badge badge-purple" data-tooltip="Calculation time">
            ⏱ {solveTime}ms
          </span>
        )}
      </div>
      <div className="moves-container">
        <div className="moves-grid">
          {solution.map((move, i) => (
            <div key={i} className="move-card">
              <span className="move-num">{i + 1}</span>
              <span className="move-notation">{move}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="panel-footer">
        <div className="stat-row">
          <span className="stat-label">Total Moves:</span>
          <span className="stat-value">{solution.length}</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Algorithm:</span>
          <span className="stat-value">Kociemba Two-Phase</span>
        </div>
      </div>
    </div>
  )
}
