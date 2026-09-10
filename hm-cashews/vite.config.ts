import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') && !id.includes('react-three')) {
              return 'vendor-react'
            }
            if (id.includes('gsap')) {
              return 'vendor-gsap'
            }
            if (id.includes('three') || id.includes('react-three')) {
              return 'vendor-three'
            }
            if (id.includes('lenis')) {
              return 'vendor-lenis'
            }
          }
        },
      },
    },
  },
})
