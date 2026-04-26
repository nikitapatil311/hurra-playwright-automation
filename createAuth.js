const { chromium } = require("@playwright/test");
require("dotenv").config();

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // 👉 Open normal login page
  await page.goto("https://staging.hurra.ai/accounts/login/");

  console.log(" Please login  in the browser");
  await page.fill("#id_login", process.env.HURRA_EMAIL);
  await page.fill("#id_password", process.env.HURRA_PASSWORD);

  await page.click('button:has-text("Login")');

  // Wait until REAL login happens
  await page.waitForURL("**/chat/", { timeout: 120000 });

  // Save full session
  await context.storageState({ path: "auth/auth.json" });

  console.log("auth.json created successfully");

  await browser.close();
})();
