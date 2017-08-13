import { TreeCLIPage } from './app.po';

describe('tree-cli App', () => {
  let page: TreeCLIPage;

  beforeEach(() => {
    page = new TreeCLIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
