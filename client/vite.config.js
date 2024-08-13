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
    outDir: 'dist', 
    rollupOptions: {
      external: ['../components/Home', '../components/Profile', '../components/Signup', '../components/Login', '../components/ErrorPage', '../components/Donate', '../components/Store', '../components/StoreEdit',], // Add the problematic module to external
    },
  },
  resolve: {
    alias: {
      '/@components/': path.resolve(__dirname, 'src/components/'),
    },
  },
});