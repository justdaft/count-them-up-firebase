export class CountThemUpFirebasePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('count-them-up-firebase-app h1')).getText();
  }
}
