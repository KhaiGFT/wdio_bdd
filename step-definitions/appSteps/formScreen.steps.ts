import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import FormScreen from '../../screenobjects/FormsScreen.ts';
import TabBar from '../../screenobjects/components/TabBar.ts';


When(/^I access the Form screen on application$/, async () => {
    await await TabBar.openForms()
    await FormScreen.waitForIsShown(true);
});

When(/^I input the following text for input field of form Screen on application$/, async (dataTable) => {
    const inputTextArray = dataTable.raw();
    for (const element of inputTextArray) {
        await FormScreen.input.setValue(element[0]);
    }
});

Then(/^I should see the following text on input field of form Screen on application$/, async (dataTable) => {
    const inputTextArray = dataTable.raw(); 
    for (const element of inputTextArray) {
        await expect(FormScreen.inputTextResult).toHaveText(
            expect.stringContaining(element[0])
        );
    }
    
})

