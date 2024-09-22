import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import Unocss from "unocss/vite"

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/xy0908.github.io/",
  plugins: [
    vue(),
    Unocss(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
      ],
      dts: path.resolve(__dirname, './src/options/auto-imports.d.ts'),
      dirs: [
        "src/store/*",
        'src/composables'
      ],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: path.resolve(__dirname, './src/options/components.d.ts'),
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
})
