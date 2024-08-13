import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',  // Ensure relative paths for assets
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: './index.html',  // Ensure this points to the correct index.html
      output: {
        // Let Vite handle the file names automatically
      },
    },
  },
  root: './',  // Point to the current directory where the vite.config.js resides
});

