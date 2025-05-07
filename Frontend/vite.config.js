import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    // proxy: {
    //   "/api": {
    //     target: process.env.NODE_ENV === "production" ? "https://chatapp-fy96.onrender.com" : "http://localhost:3000", // Use production or local backend URL
    //     changeOrigin: true,
    //     secure: false, // Depending on whether the backend is using HTTPS
    //   },
    // },
  },
});
