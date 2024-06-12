import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  server: {
    port: 3333,
  },
  css: {
    devSourceMap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/sass/abstracts/_variables.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        alta: resolve('views/alta.html'),
        carrito: resolve('views/carrito.html'),
        contacto: resolve('views/contacto.html'),
        nosotros: resolve('views/nosotros.html'),
        shop: resolve('views/shop.html'),
        sproduct: resolve('views/sproduct.html'),
        inicio: resolve('index.html'),
      },
    },
  },
});
