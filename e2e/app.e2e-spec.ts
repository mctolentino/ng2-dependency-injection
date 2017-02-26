import { Ng2DependencyInjectionPage } from './app.po';

describe('ng2-dependency-injection App', function() {
  let page: Ng2DependencyInjectionPage;

  beforeEach(() => {
    page = new Ng2DependencyInjectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
