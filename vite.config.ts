import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 修改为相对路径 './'，这样无论仓库叫 'Me' 还是 'me'，或者部署在任何子路径下，
  // 资源都能正确找到，不再依赖硬编码的 '/Me/'
  base: './', 
})