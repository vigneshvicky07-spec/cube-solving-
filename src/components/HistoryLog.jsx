import { useState, useEffect } from 'react'
import axios from 'axios'
import './HistoryLog.css'
export default function HistoryLog() {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetchHistory()
  }, [])
  const fetchHistory = async () => {
    try {
      setLoading(true)
      const res = await axios.get('/api/history')
      setHistory(res.data.history)
      setError(null)
    } catch (err) {
      setError('Failed to load history.')
    } finally {
      setLoading(false)
    }
  }
  const handleClear = async () => {
    if (!window.confirm('Are you sure you want to clear all solve history?')) return
    try {
      await axios.delete('/api/history')
      setHistory([])
    } catch (err) {
      setError('Failed to clear history.')
    }
  }
  if (loading) {
    return (
      <div className="history-log glass animate-fade-in">
        <div className="history-loading">
          <div className="spinner" />
          <p>Loading past solves...</p>
        </div>
      </div>
    )
  }
  return (
    <div className="history-log glass animate-fade-in">
      <div className="history-header">
        <h2>Solve History</h2>
        {history.length > 0 && (
          <button className="btn btn-danger btn-sm" onClick={handleClear}>
            Clear All
          </button>
        )}
      </div>
      {error && <div className="error-msg">{error}</div>}
      {history.length === 0 && !error ? (
        <div className="history-empty">
          <span className="empty-icon">📜</span>
          <p>No solves recorded yet.</p>
        </div>
      ) : (
        <div className="history-list">
          {history.map((record) => (
            <div key={record.id} className="history-card">
              <div className="history-card-header">
                <span className="history-time">
                  {new Date(record.timestamp).toLocaleString()}
                </span>
                <div className="history-stats">
                  <span className="badge badge-green">{record.move_count} moves</span>
                  {record.duration_ms && (
                    <span className="badge badge-purple">{record.duration_ms}ms</span>
                  )}
                </div>
              </div>
              <div className="history-solution">
                <strong>Solution:</strong> <span className="solution-text">{record.solution}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}