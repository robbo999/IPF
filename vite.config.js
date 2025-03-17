import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "public/index.html",
    },
  },
  base: "/ipf/", // Ensure correct path for GitHub Pages or Netlify
});
