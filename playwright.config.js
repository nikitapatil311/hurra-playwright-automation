const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.js",

  timeout: 40 * 1000,

  expect: {
    timeout: 40 * 1000,
  },

  reporter: "html",

  use: {
    browserName: "chromium",
    headless: false,

    trace: "on", // ✅ correct way
  },
});
