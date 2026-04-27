const { test, expect } = require("@playwright/test");

test.use({ storageState: "auth/auth.json" });

test("1. Smoke - Chat Page loads", async ({ page }) => {
  await page.goto("https://staging.hurra.ai/chat/");

  await expect(page.locator("[alt='Hurra.ai Logo']")).toBeVisible();
});

test("2. Smoke - Correct chat URL", async ({ page }) => {
  await page.goto("https://staging.hurra.ai/chat/");
  await expect(page).toHaveURL(/chat/);
});

test("Smoke - Chat input is visible", async ({ page }) => {
  await page.goto("https://staging.hurra.ai/chat/");

  // wait for page to fully load chat UI
  await page.waitForLoadState("networkidle");

  // safest selector for textarea input
  const inputBox = page.getByRole("textbox").first();

  await expect(inputBox).toBeVisible();
  await expect(inputBox).toBeEnabled();
});

test("4.Smoke - Send button exists", async ({ page }) => {
  await page.goto("https://staging.hurra.ai/chat/");

  const sendButton = page
    .locator("button")
    .filter({
      has: page.locator("svg"),
    })
    .last();

  await expect(sendButton).toBeAttached();
});

test("5. Smoke - Send message and get response", async ({ page }) => {
  await page.goto("https://staging.hurra.ai/chat/");

  const input = page.getByPlaceholder("Ask Hurra anything...");

  const message = `QA smoke ${Date.now()}`;

  await input.fill(message);
  await input.press("Enter");

  // user message appears
  await expect(page.getByText(message)).toBeVisible();

  // wait for any assistant response bubble (more stable selector)
  const botResponse = page
    .locator("main div")
    .filter({
      hasText: /Hurra|Hello|ready|test/i,
    })
    .last();

  await expect(botResponse).toBeVisible({ timeout: 30000 });
});
