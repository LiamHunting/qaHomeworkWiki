import {Builder, By, Capabilities, until, WebDriver} from "selenium-webdriver"
import { string } from "yargs";

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("Filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        await driver.quit();
    });

    const hdrInput: By = By.xpath('//input[@name="hdrInput"]');
    const mkeInput: By = By.xpath('//input[@name="mkeInput"]');
    const oaiInput: By = By.xpath('//input[@name="oriInput"]');
    const nameInput: By = By.xpath('//input[@name="namInput"]');
    const clrBtn: By = By.xpath('//button[@id="clearBtn"]');
    const submitBtn: By = By.xpath('//button[@id="saveBtn"]');
    const errorMsg: By = By.css('#validHeader')


    test("filling in the blanks for real", async () => {
        await driver.findElement(hdrInput).sendKeys("blanks");
        await driver.findElement(mkeInput).sendKeys("blanks");
        await driver.findElement(oaiInput).sendKeys("blanks");
        await driver.findElement(nameInput).sendKeys("blanks");
        await driver.findElement(submitBtn).click();
        await driver.findElement(errorMsg);
        let errorMessage = await driver.findElement(errorMsg).getText();
        expect(errorMessage).toContain("Errors Received:");
        await driver.findElement(clrBtn).click();
        
    });
});