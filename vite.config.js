import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteStylelint from '@amatlash/vite-plugin-stylelint'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  build: {
    sourcemap: process.env.SOURCE_MAP === 'true'
  },
  base: '/web-font-test',
  plugins: [
    vue(),
    viteStylelint(),
    VitePWA({
      mode: 'development',
      srcDir: 'src',
      filename: 'sw.js',
      base: '/web-font-test/',
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: '字體測試',
        short_name: '字體測試',
        description: '字體測試',
        theme_color: '#545454',
        start_url: './index.html',
        lang: 'zh-Hant-HK',
        dir: 'ltr',
        orientation: 'portrait',
        icons: [
          {
            src: 'img/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'img/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'img/icons/android-chrome-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'img/icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    }),
    eslintPlugin({
      include: ['src/**/*.vue', 'src/**/*.js']
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  }
})
