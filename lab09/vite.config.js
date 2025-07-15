import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // listen on all interfaces
    allowedHosts: [
      'host.docker.internal', // allow Docker container hostname
      'localhost',
      // add other hosts here if needed
    ],
  },
})
