describe('Allstate Auto Quote', function() {
 it('Customer can select auto for a quote', function(browser) {
    browser.url('https://www.allstate.com/')
    //browser.waitForElementVisible("#lbl—auto");
    //browser.click("#lbl—auto")
  });
  it('Customer can specify the zip code for quote', function(browser) {
    browser.waitForElementVisible('main[id="main-content"] input[placeholder="Enter zip"]');
    browser.setValue('main[id="main-content"] input[placeholder="Enter zip"]', 77083)
    browser.click('#heroBundleGetQuote')
    browser.assert.textContains("#zipCodeInputEl", "77083")
    browser.click("#btnStart")
    browser.assert.textContains('urgentText', 'Before you get started.')
    browser.end();
  })
});
