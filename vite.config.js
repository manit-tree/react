import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: './dist',
        minify: false,
        sourcemap: false,
        emptyOutDir: true,   

        lib: {
            entry: './src/index.js',
            name:'React',
            formats: ['iife','esm','cjs'],
            fileName: (format) => `[name].[format].js`
        }
    }
})