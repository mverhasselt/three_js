import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/three_js/', // Replace with your actual repository name
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'PWA test 1',
        short_name: 'PWA1',
        description: 'Learning PWA shit',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/icon192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})