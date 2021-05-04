import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsconfig from './jsconfig.json'
import path from 'path'

function getAlias () {
  const { baseUrl, paths } = jsconfig.compilerOptions
  const pathKey = Object.keys(paths)
  pathKey.reduce((res, key) => {
    res[key] = path.resolve(__dirname, `${baseUrl}/${pathKey[key]}`)
    return res
  }, {})
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/weather-box/',
  plugins: [vue()],
  resolve: {
    alias: getAlias()
  }
})
