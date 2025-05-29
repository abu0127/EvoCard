import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/EvoCard/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})