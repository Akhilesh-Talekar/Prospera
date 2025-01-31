import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // The directory where the build files will be placed
  },
  server: {
    port: 3000,
  },
  base: '/', // Ensures assets are referenced relative to the root
})
