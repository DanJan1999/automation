import { TestScheduler } from "@jest/core"
import { Builder, Capabilities, By } from "selenium-webdriver"

// const chromedriver = require('chromedriver')

// const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

//TEST CODE

const selenium = require("selenium-webdriver");
const capabilities = {
    'browserName' : 'chrome',
    'chromeOptions': {
        'w3c': false
    }
};
const browser = new selenium.Builder().withCapabilities(capabilities).forBrowser("chrome");
const driver = browser.build();

//This is a spacer line

beforeAll(async () => {
    await driver.get('http://localhost:8080/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('I can manipulate this dom', async () => {

    let searchBar = await driver.findElement(By.xpath("//input[@placeholder= 'Add Movie']"))

    let addBtn = await driver.findElement(By.xpath("//form/button"))

    await driver.sleep(2000)

    await searchBar.sendKeys('Harry Potter')

    await driver.sleep(2000)

    //await driver.findElement(By.xpath("//form")).click()

    await addBtn.submit()

    await driver.sleep(2000)

})