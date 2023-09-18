import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@cp": fileURLToPath(new URL("./src/components", import.meta.url)),
    },
  },
  experimental: {
    renderBuiltUrl(filename, { hostType, type, ssr }) {
      if (ssr && type === "asset" && hostType === "js") {
        return {
          runtime: `__ssr_vue_processAssetPath(${JSON.stringify(filename)})`,
        };
      }
    },
  },
  build: {
    minify: false,
  },
  ssr: {
    noExternal: ["@vitejs/test-example-external-component", "vuetify"],
  },
  optimizeDeps: {
    exclude: ["@vitejs/test-example-external-component"],
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  server: {
    port: 6173,
    open: false,
    cors: true,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace("/api/", "/"),
      },
    },
  },
});
