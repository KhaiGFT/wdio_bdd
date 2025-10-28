import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../../pageobjects/login.page.ts';

Given(/^I access the Login page on browser$/, async () => {
    await LoginPage.open()
});

When(/^I login with following credentials on browser$/, async (dataTable) => {
    const credentials = dataTable.hashes(); 
    for (const credential of credentials) {
        await LoginPage.login(credential.username, credential.password)
    }
})

