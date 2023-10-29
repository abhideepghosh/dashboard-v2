import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        general: resolve(__dirname, "general.html"),
        register: resolve(__dirname, "register.html"),
        dashboard: resolve(__dirname, "dashboard.html"),
      },
    },
  },
});