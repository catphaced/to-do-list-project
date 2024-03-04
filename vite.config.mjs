// vite.config.mjs

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  // Specify the entry point
  resolve: {
    alias: {
      "@": "/src/main.mjs",
    },
  },
});
