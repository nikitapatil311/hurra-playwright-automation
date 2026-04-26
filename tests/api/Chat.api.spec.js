const { test, expect } = require("@playwright/test");

test.use({ storageState: "auth/auth.json" });

test("API - Chat sessions status & headers", async ({ request }) => {
  const response = await request.get("https://staging.hurra.ai/chat/sessions/");

  expect(response.status()).toBe(200);

  expect(response.headers()["content-type"]).toContain("application/json");
});
