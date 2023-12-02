import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../pageObject/login.page.js";

const pages = {
  login: LoginPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login({ password, username });
});

Then(
  /^I verify the message ([^"]*)? is displayed on the (\w+) page$/,
  async (element, page) => {
    await pages[page].validateLogin(element);
  }
);
