import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    basicSsl({
      name: 'yamo'
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
