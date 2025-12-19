import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 加载当前模式下的环境变量 (例如 .env 文件)
  // 第三个参数 '' 表示加载所有变量，不仅仅是 VITE_ 开头的
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    // 关键配置：使用相对路径，确保在 GitHub Pages (非根目录) 能正确加载资源
    base: './', 
    define: {
      // 将构建环境中的 API_KEY 注入到前端代码中
      // 这样 geminiService.ts 里的 process.env.API_KEY 才能在浏览器中工作
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      // 简单的 Polyfill，防止访问 process.env 报错，但不会覆盖上面的具体 Key
      'process.env': {} 
    }
  }
})