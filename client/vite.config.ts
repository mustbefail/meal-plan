import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    checker({
      typescript: true
    }),
    react()
  ],
  server: {
    port: 3002,
    hmr: {
      host: 'localhost',
      protocol: 'ws'
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
