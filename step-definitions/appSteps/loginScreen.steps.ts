import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginScreen from '../../screenobjects/LoginScreen.ts';
import TabBar from '../../screenobjects/components/TabBar.ts';
import NativeAlert from '../../screenobjects/components/NativeAlert.ts';


Given(/^I access the Login screen on application$/, async () => {
    await TabBar.openLogin()
    await LoginScreen.waitForIsShown(true)
});

When(/^I tap on Login of Login screen on application$/, async () => {
        await LoginScreen.tapOnLoginContainerButton()
});

When(/^I login with the following credentials on application$/, async (dataTable) => {
        const credentials = dataTable.hashes(); 
        for (const credential of credentials) {
            await LoginScreen.submitLoginForm(credential)
        }
})

Then(/^I should see Login successfully popup on application$/, async () => {
    await NativeAlert.topOnButtonWithText('OK')
    await NativeAlert.waitForIsShown(false)
})

