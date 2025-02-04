import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "./src/api"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@enum": path.resolve(__dirname, "./src/enum"),
      "@errors": path.resolve(__dirname, "./src/errors"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@style": path.resolve(__dirname, "./src/style"),
      "@apptypes": path.resolve(__dirname, "./src/types"),
      "@util": path.resolve(__dirname, "./src/util"),
    },
  },
});
