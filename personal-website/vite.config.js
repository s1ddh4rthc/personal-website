// filepath: vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindPostcss from '@tailwindcss/postcss' // Keep this line
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindPostcss(), // Keep this line
        autoprefixer()
      ]
    }
  },
  optimizeDeps: {
    exclude: ['@recharts'
    ]
  },
})