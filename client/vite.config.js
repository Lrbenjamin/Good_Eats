import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001', // Proxy to your GraphQL server
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist', // Ensure that the build output directory is 'dist'
    rollupOptions: {
      external: ['apollo-server'], // Exclude server-side dependencies from the client build
    },
  },
  resolve: {
    alias: {
      // Add any path aliases here if needed
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
