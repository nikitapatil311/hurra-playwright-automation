const { chromium } = require("@playwright/test");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // 👉 Open normal login page
  await page.goto("https://staging.hurra.ai/accounts/login/");

  console.log(" Please login manually in the browser");

  // Wait until REAL login happens
  await page.waitForURL("**/chat/", { timeout: 120000 });

  // Save full session
  await context.storageState({ path: "auth/auth.json" });

  console.log("auth.json created successfully");

  await browser.close();
})();
