module.exports = {
  'Demo test ecosia.org': function (browser) {
    browser
      .url('https://www.ecosia.org/')
      .pause(3000)
      .waitForElementVisible('body')
      .pause(3000)
      .assert.titleContains('Ecosia')
      .pause(3000)
      .assert.visible('input[type=search]')
      .pause(3000)
      .setValue('input[type=search]', 'nightwatch')
      .pause(3000)
      .assert.visible('button[type=submit]')
      .pause(3000)
      .click('button[type=submit]')
      .pause(3000)
      .assert.containsText('#main > div.web > section > div:nth-child(2) > div:nth-child(8) > article > div.result__body > div.result__header > div.result__title > a', 'Nightwatch.js')
      .end()
  }
}
