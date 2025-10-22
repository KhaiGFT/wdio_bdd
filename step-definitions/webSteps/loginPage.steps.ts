import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../../pageobjects/login.page.ts';

const pages:any = {
    login: LoginPage
}

Given(/^I access the (\w+) page on browser$/, async (page) => {
    await pages[page].open()
});

When(/^I login with following credentials on browser$/, async (dataTable) => {
    const credentials = dataTable.hashes(); 
    for (const credential of credentials) {
        await LoginPage.login(credential.username, credential.password)
    }
})

