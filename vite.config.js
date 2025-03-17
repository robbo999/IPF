import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ipf/", // Ensure GitHub Pages or Netlify detects the correct path
});