import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    // Every font and image becomes a hashed file (cached as immutable) instead of base64 in the CSS.
    assetsInlineLimit: 0,
    cssCodeSplit: false,
  },
  test: {
    environment: 'node',
  },
})
