const { chromium } = require("@playwright/test");

(async () => {
  const browser = await chromium.launch(); // headless default
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://staging.hurra.ai/accounts/login/");

  console.log("Logging in...");

  await page.fill("#id_login", process.env.HURRA_EMAIL);
  await page.fill("#id_password", process.env.HURRA_PASSWORD);

  await page.click('button:has-text("Login")');

  await page.waitForURL("**/chat/", { timeout: 120000 });

  await context.storageState({ path: "auth/auth.json" });

  console.log("auth.json created successfully");

  await browser.close();
})();
