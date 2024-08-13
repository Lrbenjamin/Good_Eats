import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: mode === 'development' ? {
      '/graphql': {
        target: process.env.VITE_GRAPHQL_URL || 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    } : undefined, // No proxy in production
  },
  build: {
    rollupOptions: {
      external: ['apollo-server'],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    sourcemap: mode === 'production' ? false : true, // Disable source maps in production for smaller bundle size
    minify: mode === 'production' ? 'terser' : false, // Use Terser for production minification, none for development
  },
}));

