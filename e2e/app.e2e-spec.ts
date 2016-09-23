import { Angular2FinalReleasePage } from './app.po';

describe('angular2-final-release App', function() {
  let page: Angular2FinalReleasePage;

  beforeEach(() => {
    page = new Angular2FinalReleasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
