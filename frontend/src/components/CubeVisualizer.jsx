import { useRef, useEffect, useState, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import './CubeVisualizer.css'
/* ── Constants ────────────────────────────────────────────────────────────── */
const FACE_COLORS = {
  U: 0xf0f0f0,  // White
  R: 0x3b82f6,  // Blue
  F: 0xef4444,  // Red
  D: 0xffd700,  // Yellow
  L: 0x22c55e,  // Green
  B: 0xf97316,  // Orange
}
const MOVE_SPEED_MS = 350  // ms per move animation
/**
 * Sticker face directions per cubie face (which world-space axis each face points toward)
 * Format: [x, y, z] normal direction
 */
const FACE_NORMALS = {
  U: [0,  1, 0],
  D: [0, -1, 0],
  R: [1,  0, 0],
  L: [-1, 0, 0],
  F: [0,  0, 1],
  B: [0,  0, -1],
}
/* ── Cube logic helpers ───────────────────────────────────────────────────── */
/**
 * Build the 27 cubies with their initial sticker colors.
 * faceColors: { U:[...9 face-letters], R:[...], ... }
 * Each face is laid out in row-major order: [0..8] = top-left to bottom-right
 * when looking at the face from outside.
 */
function buildCubieColors(faceColors) {
  // Index a face's 9 stickers by (row, col) → color
  const fc = {}
  const order = ['U','R','F','D','L','B']
  for (const face of order) {
    if (!faceColors[face]) {
      // Default solid color
      fc[face] = () => FACE_COLORS[face]
      continue
    }
    fc[face] = (row, col) => {
      const idx = row * 3 + col
      const letter = faceColors[face][idx] || face
      return FACE_COLORS[letter] || FACE_COLORS[face]
    }
  }
  /**
   * For each of the 26 visible cubies, determine sticker colors.
   * Cubie position: (x,y,z) where each is -1,0,+1
   * We'll map face sticker positions to cubie positions.
   */
  const cubieMap = {}
  // Populate for each face
  // U face: y=+1, rows go from z=-1(top) to z=+1(bottom), cols from x=-1(left) to x=+1
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const x = col - 1
      const z = row - 1
      const key = `${x},1,${z}`
      if (!cubieMap[key]) cubieMap[key] = {}
      const color = fc.U ? (typeof fc.U === 'function' ? fc.U(row, col) : fc.U) : FACE_COLORS.U
      cubieMap[key].U = color
    }
  }
  // D face: y=-1, rows from z=+1(top when looking at D from below) to z=-1
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const x = col - 1
      const z = -(row - 1)
      const key = `${x},-1,${z}`
      if (!cubieMap[key]) cubieMap[key] = {}
      const color = fc.D ? (typeof fc.D === 'function' ? fc.D(row, col) : fc.D) : FACE_COLORS.D
      cubieMap[key].D = color
    }
  }
  // R face: x=+1, rows from y=+1(top) to y=-1(bottom), cols from z=+1(left) to z=-1
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const y = -(row - 1)
      const z = -(col - 1)
      const key = `1,${y},${z}`
      if (!cubieMap[key]) cubieMap[key] = {}
      const color = fc.R ? (typeof fc.R === 'function' ? fc.R(row, col) : fc.R) : FACE_COLORS.R
      cubieMap[key].R = color
    }
  }
  // L face: x=-1, rows from y=+1 to y=-1, cols from z=-1 to z=+1
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const y = -(row - 1)
      const z = col - 1
      const key = `-1,${y},${z}`
      if (!cubieMap[key]) cubieMap[key] = {}
      const color = fc.L ? (typeof fc.L === 'function' ? fc.L(row, col) : fc.L) : FACE_COLORS.L
      cubieMap[key].L = color
    }
  }
  // F face: z=+1, rows from y=+1 to y=-1, cols from x=-1 to x=+1
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const y = -(row - 1)
      const x = col - 1
      const key = `${x},${y},1`
      if (!cubieMap[key]) cubieMap[key] = {}
      const color = fc.F ? (typeof fc.F === 'function' ? fc.F(row, col) : fc.F) : FACE_COLORS.F
      cubieMap[key].F = color
    }
  }
  // B face: z=-1, rows from y=+1 to y=-1, cols from x=+1 to x=-1
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const y = -(row - 1)
      const x = -(col - 1)
      const key = `${x},${y},-1`
      if (!cubieMap[key]) cubieMap[key] = {}
      const color = fc.B ? (typeof fc.B === 'function' ? fc.B(row, col) : fc.B) : FACE_COLORS.B
      cubieMap[key].B = color
    }
  }
  return cubieMap
}
/* ── Move → rotation axis+angle+filter ───────────────────────────────────── */
const MOVE_DEF = {
  U:  { axis: new THREE.Vector3(0,1,0),  angle: -Math.PI/2, filter: m => m.position.y > 0.4 },
  "U'":{ axis: new THREE.Vector3(0,1,0), angle:  Math.PI/2, filter: m => m.position.y > 0.4 },
  U2: { axis: new THREE.Vector3(0,1,0),  angle: -Math.PI,   filter: m => m.position.y > 0.4 },
  D:  { axis: new THREE.Vector3(0,1,0),  angle:  Math.PI/2, filter: m => m.position.y < -0.4 },
  "D'":{ axis: new THREE.Vector3(0,1,0), angle: -Math.PI/2, filter: m => m.position.y < -0.4 },
  D2: { axis: new THREE.Vector3(0,1,0),  angle:  Math.PI,   filter: m => m.position.y < -0.4 },
  R:  { axis: new THREE.Vector3(1,0,0),  angle: -Math.PI/2, filter: m => m.position.x > 0.4 },
  "R'":{ axis: new THREE.Vector3(1,0,0), angle:  Math.PI/2, filter: m => m.position.x > 0.4 },
  R2: { axis: new THREE.Vector3(1,0,0),  angle: -Math.PI,   filter: m => m.position.x > 0.4 },
  L:  { axis: new THREE.Vector3(1,0,0),  angle:  Math.PI/2, filter: m => m.position.x < -0.4 },
  "L'":{ axis: new THREE.Vector3(1,0,0), angle: -Math.PI/2, filter: m => m.position.x < -0.4 },
  L2: { axis: new THREE.Vector3(1,0,0),  angle:  Math.PI,   filter: m => m.position.x < -0.4 },
  F:  { axis: new THREE.Vector3(0,0,1),  angle: -Math.PI/2, filter: m => m.position.z > 0.4 },
  "F'":{ axis: new THREE.Vector3(0,0,1), angle:  Math.PI/2, filter: m => m.position.z > 0.4 },
  F2: { axis: new THREE.Vector3(0,0,1),  angle: -Math.PI,   filter: m => m.position.z > 0.4 },
  B:  { axis: new THREE.Vector3(0,0,1),  angle:  Math.PI/2, filter: m => m.position.z < -0.4 },
  "B'":{ axis: new THREE.Vector3(0,0,1), angle: -Math.PI/2, filter: m => m.position.z < -0.4 },
  B2: { axis: new THREE.Vector3(0,0,1),  angle:  Math.PI,   filter: m => m.position.z < -0.4 },
}
/* ── Component ────────────────────────────────────────────────────────────── */
export default function CubeVisualizer({ faceColors, solution }) {
  const containerRef  = useRef(null)
  const sceneRef      = useRef(null)
  const cubeGroupRef  = useRef(null)
  const animRef       = useRef(null)
  const rafRef        = useRef(null)
  const [moveIdx,   setMoveIdx]   = useState(0)
  const [playing,   setPlaying]   = useState(false)
  const [animating, setAnimating] = useState(false)
  const [speed,     setSpeed]     = useState(1)
  /* ── Three.js setup ─────────────────────────────────────────────── */
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const w = container.clientWidth
    const h = container.clientHeight
    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    container.appendChild(renderer.domElement)
    // Scene
    const scene = new THREE.Scene()
    sceneRef.current = scene
    // Camera
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100)
    camera.position.set(4, 3, 5)
    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambient)
    const dir = new THREE.DirectionalLight(0xffffff, 0.8)
    dir.position.set(5, 8, 5)
    dir.castShadow = true
    scene.add(dir)
    const fill = new THREE.DirectionalLight(0x6c63ff, 0.3)
    fill.position.set(-5, -3, -5)
    scene.add(fill)
    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    controls.minDistance   = 4
    controls.maxDistance   = 12
    // Build cube
    buildCube(scene, faceColors)
    // Render loop
    function animate() {
      rafRef.current = requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()
    // Resize
    const ro = new ResizeObserver(() => {
      const cw = container.clientWidth
      const ch = container.clientHeight
      renderer.setSize(cw, ch)
      camera.aspect = cw / ch
      camera.updateProjectionMatrix()
    })
    ro.observe(container)
    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [faceColors])
  /* ── Build cube meshes ──────────────────────────────────────────── */
  function buildCube(scene, fc) {
    // Remove old cube group
    if (cubeGroupRef.current) {
      scene.remove(cubeGroupRef.current)
    }
    const cubieColors = buildCubieColors(fc || {})
    const group = new THREE.Group()
    cubeGroupRef.current = group
    const SIZE       = 1.0
    const GAP        = 0.06
    const STICKER_S  = SIZE * 0.82
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          if (x === 0 && y === 0 && z === 0) continue // skip center
          const cubieGroup = new THREE.Group()
          cubieGroup.position.set(x * (SIZE + GAP), y * (SIZE + GAP), z * (SIZE + GAP))
          // Black body
          const bodyGeo = new THREE.BoxGeometry(SIZE * 0.94, SIZE * 0.94, SIZE * 0.94)
          const bodyMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8 })
          const body    = new THREE.Mesh(bodyGeo, bodyMat)
          body.receiveShadow = true
          cubieGroup.add(body)
          const key = `${x},${y},${z}`
          const colors = cubieColors[key] || {}
          // Add stickers
          const stickerDefs = [
            { face: 'U', pos: [0,  SIZE*0.5, 0],   rot: [-Math.PI/2, 0, 0] },
            { face: 'D', pos: [0, -SIZE*0.5, 0],   rot: [ Math.PI/2, 0, 0] },
            { face: 'R', pos: [ SIZE*0.5, 0, 0],   rot: [0, Math.PI/2, 0] },
            { face: 'L', pos: [-SIZE*0.5, 0, 0],   rot: [0, -Math.PI/2, 0] },
            { face: 'F', pos: [0, 0,  SIZE*0.5],   rot: [0, 0, 0] },
            { face: 'B', pos: [0, 0, -SIZE*0.5],   rot: [0, Math.PI, 0] },
          ]
          for (const { face, pos, rot } of stickerDefs) {
            // Only add sticker if this cubie is on that face
            const isOnFace = (
              (face === 'U' && y ===  1) ||
              (face === 'D' && y === -1) ||
              (face === 'R' && x ===  1) ||
              (face === 'L' && x === -1) ||
              (face === 'F' && z ===  1) ||
              (face === 'B' && z === -1)
            )
            if (!isOnFace) continue
            const color = colors[face] ?? FACE_COLORS[face]
            const sGeo  = new THREE.PlaneGeometry(STICKER_S, STICKER_S)
            const sMat  = new THREE.MeshStandardMaterial({
              color,
              roughness: 0.3,
              metalness: 0.05,
            })
            const sticker = new THREE.Mesh(sGeo, sMat)
            sticker.position.set(...pos)
            sticker.rotation.set(...rot)
            sticker.position.multiplyScalar(1.01)
            cubieGroup.add(sticker)
          }
          group.add(cubieGroup)
        }
      }
    }
    scene.add(group)
  }
  /* ── Animate one move ───────────────────────────────────────────── */
  const animateMove = useCallback((move, onComplete) => {
    const def = MOVE_DEF[move]
    if (!def || !cubeGroupRef.current) { onComplete?.(); return }
    const group    = cubeGroupRef.current
    const affected = group.children.filter(def.filter)
    // Create a pivot group
    const pivot = new THREE.Group()
    sceneRef.current.add(pivot)
    for (const m of affected) {
      group.remove(m)
      pivot.add(m)
    }
    const totalAngle  = def.angle
    const duration    = MOVE_SPEED_MS / speed
    const startTime   = performance.now()
    const tick = (now) => {
      const t       = Math.min((now - startTime) / duration, 1)
      const eased   = t < 0.5 ? 2*t*t : -1+(4-2*t)*t  // ease-in-out
      const current = totalAngle * eased
      pivot.setRotationFromAxisAngle(def.axis, current)
      if (t < 1) {
        animRef.current = requestAnimationFrame(tick)
      } else {
        pivot.setRotationFromAxisAngle(def.axis, totalAngle)
        pivot.updateMatrixWorld()
        for (const m of [...pivot.children]) {
          pivot.remove(m)
          m.applyMatrix4(pivot.matrixWorld)
          group.add(m)
        }
        sceneRef.current.remove(pivot)
        onComplete?.()
      }
    }
    animRef.current = requestAnimationFrame(tick)
  }, [speed])
  /* ── Step controls ──────────────────────────────────────────────── */
  const stepForward = useCallback(() => {
    if (animating || moveIdx >= solution.length) return
    setAnimating(true)
    animateMove(solution[moveIdx], () => {
      setMoveIdx(i => i + 1)
      setAnimating(false)
    })
  }, [animating, moveIdx, solution, animateMove])
  const stepBackward = useCallback(() => {
    if (animating || moveIdx <= 0) return
    const move = solution[moveIdx - 1]
    // Inverse of a move
    let inv = move
    if (move.endsWith("'"))     inv = move.slice(0, -1)
    else if (move.endsWith('2')) inv = move
    else                         inv = move + "'"
    setAnimating(true)
    animateMove(inv, () => {
      setMoveIdx(i => i - 1)
      setAnimating(false)
    })
  }, [animating, moveIdx, solution, animateMove])
  // Auto-play
  useEffect(() => {
    if (!playing) return
    if (moveIdx >= solution.length) { setPlaying(false); return }
    if (animating) return
    const t = setTimeout(() => {
      stepForward()
    }, 50)
    return () => clearTimeout(t)
  }, [playing, moveIdx, animating, solution, stepForward])
  const totalMoves = solution.length
  return (
    <div className="visualizer-wrapper animate-fade-in">
      <div className="viz-header">
        <h2>3D Cube Visualizer</h2>
        <div className="viz-meta">
          <span className="badge badge-purple">
            Move {moveIdx}/{totalMoves}
          </span>
          {totalMoves > 0 && (
            <span className="badge badge-green">{totalMoves} moves</span>
          )}
        </div>
      </div>
      {/* Three.js canvas */}
      <div ref={containerRef} className="three-canvas" />
      {/* Controls bar */}
      {solution.length > 0 && (
        <div className="viz-controls glass">
          <button
            id="step-back-btn"
            className="btn btn-secondary btn-sm"
            onClick={stepBackward}
            disabled={moveIdx === 0 || animating}
            data-tooltip="Step backward"
          >
            ⏮
          </button>
          <button
            id="play-pause-btn"
            className="btn btn-primary btn-sm"
            onClick={() => setPlaying(p => !p)}
            disabled={moveIdx >= totalMoves && !playing}
          >
            {playing ? '⏸ Pause' : '▶ Play'}
          </button>
          <button
            id="step-fwd-btn"
            className="btn btn-secondary btn-sm"
            onClick={stepForward}
            disabled={moveIdx >= totalMoves || animating}
            data-tooltip="Step forward"
          >
            ⏭
          </button>
          <div className="speed-control">
            <span>Speed</span>
            <input
              id="speed-slider"
              type="range" min="0.5" max="3" step="0.5"
              value={speed}
              onChange={e => setSpeed(parseFloat(e.target.value))}
            />
            <span>{speed}×</span>
          </div>
        </div>
      )}
      {solution.length === 0 && (
        <div className="viz-empty">
          <div className="empty-icon">🎲</div>
          <p>Scan your cube and solve it to see the 3D walkthrough</p>
        </div>
      )}
    </div>
  )
}
