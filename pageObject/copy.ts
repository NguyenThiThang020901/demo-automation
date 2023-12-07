import { browser } from "@wdio/globals";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  timeToWaitLoadingPage = 5000;
  public open() {
    return browser.url(`https://www.saucedemo.com/`);
  }

  /**
   * this function to enter data for input element
   */
  public async setInputField(selector: string, value: string) {
    await $(selector).waitForExist({ timeout: this.timeToWaitLoadingPage });
    await $(selector).setValue(value);
  }

  /**
   * this function check the element is displayed or not
   */
  public async isDisplayed(selector: string) {
    await $(selector).waitForExist({ timeout: this.timeToWaitLoadingPage });
    const isDisplayed = await $(selector).isExisting();
    expect(isDisplayed).toEqual(true);
  }

  /**
   * this function to check the element is clickable or not AND click on the element
   */
  public async clickOnElement(selector: string) {
    await $(selector).waitForExist({ timeout: this.timeToWaitLoadingPage });
    const isClickable = await $(selector).isClickable();
    expect(isClickable).toEqual(true);
    await $(selector).click();
  }
}
