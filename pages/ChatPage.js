const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class ChatPage extends BasePage {
  constructor(page) {
    super(page);

    this.logo = page.locator("[alt='Hurra.ai Logo']");
    this.chatInput = page.getByPlaceholder('Ask Hurra anything...');
    this.sendButton = page
      .locator('button')
      .filter({ has: page.locator('svg') })
      .last();
  }

  async open() {
    await this.goto('/chat/');
  }

  async expectLoaded() {
    await expect(this.logo).toBeVisible();
  }

  async expectUrl() {
    await expect(this.page).toHaveURL(/chat/);
  }

  async expectInputVisible() {
    await this.page.waitForLoadState('networkidle');
    await expect(this.chatInput).toBeVisible();
    await expect(this.chatInput).toBeEnabled();
  }

  async expectSendButtonAttached() {
    await expect(this.sendButton).toBeAttached();
  }

  async sendMessage(message) {
    await this.chatInput.fill(message);
    await this.chatInput.press('Enter');
  }

  async expectMessageSent(message) {
    await expect(this.page.getByText(message)).toBeVisible();
  }

  async expectBotResponded(timeout = 30000) {
    const botResponse = this.page.locator('main div').last();
    await expect(botResponse).toBeVisible({ timeout });
  }
}

module.exports = { ChatPage };
