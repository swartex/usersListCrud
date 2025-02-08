import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setup-test.ts",
    coverage: {
      enabled: true,
      reporter: ['html'],
      thresholds: {
        functions: 95,
        branches: 70,
      }
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
