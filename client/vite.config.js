export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [react()],
    server: {
      port: 3000,  // Specifies the port for the dev server
      open: true,  // Automatically opens the browser when the server starts
      proxy: isProduction
        ? undefined  // No proxy in production
        : {
            '/graphql': {
              target: 'http://localhost:3001',  // Proxy /graphql to your backend during development
              changeOrigin: true,
              secure: false,
            },
          },
    },
    build: {
      rollupOptions: {
        external: ['apollo-server'],  // Externalizes 'apollo-server' so it's not included in the frontend bundle
      },
    },
  };
});
