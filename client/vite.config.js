import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [react()],
    server: {
      port: 3000,
      open: true,
      proxy: isProduction
        ? undefined
        : {
            '/graphql': {
              target: 'http://localhost:3001',
              changeOrigin: true,
              secure: false,
            },
          },
    },
    build: {
      rollupOptions: {
        external: ['apollo-server'],
      },
    },
  };
});
