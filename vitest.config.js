// vitest.config.js
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true, // optional but helpful if you want to use global describe/it/expect without imports
  },
});
