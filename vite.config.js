import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/React-Social-UI/", // Adjust the base path according to your GitHub Pages URL
});
