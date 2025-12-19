import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 关键配置：使用相对路径，确保在 GitHub Pages (非根目录) 能正确加载资源
  base: './', 
  define: {
    // 简单的 Polyfill，防止某些库访问 process.env 报错
    'process.env': {} 
  }
})