import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,
    proxy: {
      "/api": {
        target: "http://localhost:3001", // Example API endpoint
        changeOrigin: true,
        secure: false,
      },
    },
    fs: {
      strict: false, // Allow serving files outside of project root
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});