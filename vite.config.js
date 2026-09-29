import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    publicDir: 'public',

    build: {
        outDir: 'dist',
        emptyOutDir: true,

        rollupOptions: {
            input: {
                index: 'html/index.html',
                projetos: 'html/projetos.html',
                cadastro: 'html/cadastro.html'
            }
        }
    }
});