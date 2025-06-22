import tailwindcss from '@tailwindcss/vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    plugins: [
      tailwindcss(),
    ],
    build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        faq: resolve(__dirname, 'faq/index.html'),
      },
    },
  },
  });