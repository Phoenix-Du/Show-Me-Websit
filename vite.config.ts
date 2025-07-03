import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  // GitHub Pages部署配置
  // 如果仓库名是 username.github.io，请将base改为 '/'
  // 如果仓库名是其他名称，请将 'portfolio-website' 替换为您的仓库名
  base: '/Show-Me-Website/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

