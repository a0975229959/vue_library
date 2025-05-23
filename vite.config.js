// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base:'/vue_library/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})