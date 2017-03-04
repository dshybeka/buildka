import { BuildkaPage } from './app.po';

describe('buildka App', function() {
  let page: BuildkaPage;

  beforeEach(() => {
    page = new BuildkaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
