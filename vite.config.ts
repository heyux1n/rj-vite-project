import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 设置 `@` 指向 `src` 目录
      '@': resolve(__dirname, 'src')
    }
  },
  // 设置打包路径
  base: './',
  server: {
    // 设置服务启动端口号
    port: 4000,
    // 设置服务启动时是否自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,

    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/api': {
        target: 'http://localhost:2121',
        changeOrigin: true,
        // secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
