export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [react()],
    server: {
      port: 3000,
      open: true,
      proxy: isProduction
        ? undefined // No proxy in production, assuming your frontend and backend are deployed separately
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
