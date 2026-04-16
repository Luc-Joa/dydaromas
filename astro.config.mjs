import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Sitio estático sin server runtime
  output: 'static',

  // URL de producción (necesaria para rutas canonicas y sitemap)
  site: 'https://dydaromas.web.app',

  integrations: [
    tailwind(),
  ],

  image: {
    // Sharp disponible — genera WebP optimizados en build
    defaultFormat: 'webp',
  },

  build: {
    // Inlinea CSS pequeño en HTML para evitar round-trips bloqueantes
    inlineStylesheets: 'auto',
    // Carpeta de assets con content hash
    assets: '_astro',
    // Genera archivos .html (no index.html en subdirectorios)
    format: 'file',
  },

  vite: {
    build: {
      // Inlinea assets < 8KB directamente (reduce peticiones HTTP)
      assetsInlineLimit: 8192,
      // Sin sourcemaps en producción
      sourcemap: false,
      // esbuild es más rápido que terser y produce output similar
      minify: 'esbuild',
      cssMinify: true,
    },
  },
});
