import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // assetFileNames: './public/',
        // assetFileNames: '/public/asset1.png',
        // assetFileNames: '/public/asset2.png',
        // assetFileNames: '/public/asset3.png',
      }
    }
  }
})
