import { defineConfig } from 'vite'
import { resolve } from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
    return {
        base: 'react-vite-template-starter',
        plugins: [
            react(),
            ViteImageOptimizer({
                png: {
                    quality: 70,
                },
                jpeg: {
                    quality: 70,
                },
                jpg: {
                    quality: 70,
                },
            }),
        ],
        esbuild: {
            jsxInject: `import React from 'react'`,
        },
        resolve: {
            alias: {
                // 'symbol': resolve(__dirname, './src/folder...')
            },
        },
        build: {
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                },
            },
        },
    }
})
