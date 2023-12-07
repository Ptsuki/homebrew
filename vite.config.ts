import { svelte } from '@sveltejs/vite-plugin-svelte';
import UnpluginIcons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import { VitePWA } from 'vite-plugin-pwa';

import { prefetch } from './prefetch-plugin';

export default defineConfig({
  plugins: [
    svelte(),
    prefetch(),

    UnpluginIcons({ autoInstall: true, compiler: 'svelte' }),
    VitePWA({
      includeAssets: [
        'robots.txt',
        'favicon.ico',
        'm.jpg',
        'cursors/(normal|link|text|help)-select.svg',
        '**/*.mp3',
        '**/*.webp',
        'assets/*.webp',
      ],
      manifest: {
        name: 'Macos Web',
        short_name: 'ohi',
        theme_color: '#ffffff',
        description: 'Mac OS Monterey Web written in Svelte',
        icons: [
          {
            src: 'apple-touch-icon.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: '192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'apple-touch-icon.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: '512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
    imagetools({}),
  ],
  resolve: {
    alias: {
      '🍎': new URL('./src/', import.meta.url).pathname,
    },
  },
  build: {
    minify: 'terser',
  },
});
