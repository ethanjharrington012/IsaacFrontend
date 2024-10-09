import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.JPG'],
  plugins: [
    vue(), 
  ],
  alias: {
    '@': '/src'
  }
})
