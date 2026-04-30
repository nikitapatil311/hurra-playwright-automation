const { BasePage } = require("./BasePage");

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = page.locator("#id_login");
    this.passwordInput = page.locator("#id_password");
    this.submitButton = page
      .locator('button[type="submit"], input[type="submit"]')
      .first();
  }

  async open() {
    await this.goto("/accounts/login/?qa-testing=1");
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
    await this.page.waitForURL("**/chat/", { timeout: 120000 });
  }
}

module.exports = { LoginPage };
