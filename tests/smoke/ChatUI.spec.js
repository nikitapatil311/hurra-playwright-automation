const { test, expect } = require("@playwright/test");

test.use({ storageState: "auth/auth.json" });

test("Smoke - Chat Page loads", async ({ page }) => {
  await page.goto("https://staging.hurra.ai/chat/");

  await expect(page.locator("[alt='Hurra.ai Logo']")).toBeVisible();
});

test("Smoke - Chat input field is visible", async ({ page }) => {
  await page.goto("https://staging.hurra.ai/chat/");

  await expect(page.locator(".flex.items-start.gap-2.px-3.py-3")).toBeVisible();
});
