const { LoginPage } = require("./LoginPage");
const { ChatPage } = require("./ChatPage");

class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.chatPage = new ChatPage(page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getChatPage() {
    return this.chatPage;
  }
}

module.exports = { POManager };
