import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import Homepage from '../../pageobjects/home.page.ts';

Then(/^I should see home page which title is "(.*)" on browser$/, async (message) => {
    await expect(Homepage.title).toBeExisting();
    await expect(Homepage.title).toHaveText(expect.stringContaining(message));
});

When(/^I input the following texts and click Save on browser$/, async (dataTable) => {
    const inputTextArray = dataTable.raw();
    for (const element of inputTextArray) {
        await Homepage.inputTextForSampleInput(element[0]);
        await Homepage.saveButton.click();
    }
});

Then(/^I should see the following texts at Saved List on browser$/, async (dataTable) => {
    const inputTextArray = dataTable.raw();
    for (const element of inputTextArray) {
        await expect(Homepage.savedList).toHaveText(expect.stringContaining(element[0]));
    }
});

