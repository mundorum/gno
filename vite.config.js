import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'playground/editor/index.html',
      output: {
        dir: 'dist',
        format: 'es'
      }
    }
  },
  server: {
    open: 'playground/editor/index.html'
  }
})