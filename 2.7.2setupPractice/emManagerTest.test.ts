import {employeeManagerPage} from './emManPage'
import {Builder, By, Capabilities, until, WebDriver, } from "selenium-webdriver";

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  const emPage = new employeeManagerPage(driver);
  
  describe("Employee Manger Test", () => {
    beforeEach(async () => {
        await emPage.navigate();
    });
    afterAll(async () => {
        await driver.quit();
    });
    test("adding an employee", async () => {
        await driver.wait(until.elementLocated(emPage.header))
        await driver.findElement(emPage.addEmployee).click()
        await driver.findElement(emPage.newEmployee).click()
        await driver.findElement(emPage.nameInput).click()
        await driver.findElement(emPage.nameInput).clear()
        await driver.findElement(emPage.nameInput).sendKeys("Bob's Unlce")
        await driver.findElement(emPage.phoneInput).click()
        await driver.findElement(emPage.phoneInput).clear()
        await driver.findElement(emPage.phoneInput).sendKeys("1231231234")
        await driver.findElement(emPage.titleInput).click()
        await driver.findElement(emPage.titleInput).clear()
        await driver.findElement(emPage.titleInput).sendKeys("CEO of the World")
    });
});

//Yes I copied the test from homework 2.6 and formatted using an export/import class.