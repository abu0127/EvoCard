import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/taklifnoma-sayti/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})