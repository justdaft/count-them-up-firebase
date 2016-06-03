import { CountThemUpFirebasePage } from './app.po';

describe('count-them-up-firebase App', function() {
  let page: CountThemUpFirebasePage;

  beforeEach(() => {
    page = new CountThemUpFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('count-them-up-firebase works!');
  });
});
