import { ABTestDemoPage } from './app.po';

describe('a-b-test-demo App', function() {
  let page: ABTestDemoPage;

  beforeEach(() => {
    page = new ABTestDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
