import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],  // ← Remove jsxRuntime
  base: '/danish-portfolio-v2/',
})
