import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    server: {
        port: process.env.PORT || 3000, // Use the PORT environment variable if available, or default to 3000
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
            },
        },
    },
});