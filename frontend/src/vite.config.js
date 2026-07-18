import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
console.log("VITE CONFIG LOADED")
export default defineConfig({
  plugins: [react()],
  server: {
    host:true,
    port: 3001, 
    allowedHosts: ['murmuring-remnant-deafening.ngrok-free.dev'],
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      }
    }
  }
})