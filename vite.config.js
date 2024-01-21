import { defineConfig } from 'vite'
import { resolve } from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
    return {
        envPrefix: 'FR_',
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
        /* commonjsOptions: {
            esmExternals: true, //| It helped me with reacr-router v5
        }, */
        esbuild: {
            jsxInject: `import React from 'react'`,
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
            alias: {
                // 'symbol': resolve(__dirname, './src/folder...')
            },
        },
        dev: {
            base: '/',
        },
        build: {
            base: "react-vite-template-starter",
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'index.html'),
                },
            },
        },
    }
})
