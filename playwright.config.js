const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.js",

  timeout: 40 * 1000,

  expect: {
    timeout: 40 * 1000,
  },

  reporter: process.env.CI
    ? [["list"], ["html", { outputFolder: "playwright-report", open: "never" }]]
    : [["html", { open: "on-failure" }]],

  use: {
    browserName: "chromium",
    baseURL: "https://staging.hurra.ai",
    headless: !!process.env.CI,
    trace: "on",
  },
});
