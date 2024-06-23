import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/React-Social-Web-UI/",
  server: {
    middlewareMode: "html",
    setupMiddlewares: (middlewares) => {
      middlewares.use((req, res, next) => {
        res.setHeader("Permissions-Policy", "interest-cohort=()");
        next();
      });
      return middlewares;
    },
  },
});
