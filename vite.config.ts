import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 关键配置：设置基础路径
  // 对应您的仓库名 'Me'，这样 https://323010xu.github.io/Me/ 才能正确加载资源
  base: '/Me/', 
})