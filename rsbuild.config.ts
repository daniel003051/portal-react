import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginSass } from '@rsbuild/plugin-sass'
import { pluginBasicSsl } from '@rsbuild/plugin-basic-ssl'

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass({
      sassLoaderOptions: {
        additionalData: `@import "@/assets/styles/main.scss";`,
      },
    }),
    pluginBasicSsl(),
  ],
  output: {
    distPath: {
      root: './dist',
      js: './',
    },
    filenameHash: false,
    filename: {
      js: 'app.js',
    },
  },
  source: {
    alias: {
      '@': './src',
      '@img': './src/assets/images',
    },
  },
  performance: {
    chunkSplit: {
      strategy: 'all-in-one',
    },
  },
})
