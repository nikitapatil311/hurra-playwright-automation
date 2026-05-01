const { test } = require("@playwright/test");
const { POManager } = require("../../pages/POManager");

test.use({ storageState: "auth/auth.json" });

test.describe("Chat UI smoke", () => {
  test("1. Chat Page loads with logo", async ({ page }) => {
    const po = new POManager(page);
    const chatPage = po.getChatPage();

    await chatPage.open();
    await chatPage.expectLoaded();
  });

  test("2. URL contains /chat/", async ({ page }) => {
    const po = new POManager(page);
    const chatPage = po.getChatPage();

    await chatPage.open();
    await chatPage.expectUrl();
  });

  test("3. Chat input is visible and enabled", async ({ page }) => {
    const po = new POManager(page);
    const chatPage = po.getChatPage();

    await chatPage.open();
    await chatPage.expectInputVisible();
  });

  test("4. Send button exists", async ({ page }) => {
    const po = new POManager(page);
    const chatPage = po.getChatPage();

    await chatPage.open();
    await chatPage.expectSendButtonAttached();
  });

  test("5. Send message and get response", async ({ page }) => {
    const po = new POManager(page);
    const chatPage = po.getChatPage();

    await chatPage.open();

    const message = `QA smoke ${Date.now()}`;
    await chatPage.sendMessage(message);
    await chatPage.expectMessageSent(message);
    await chatPage.expectBotResponded();
  });
});
