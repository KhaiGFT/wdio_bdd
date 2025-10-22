import { getDeviceFromCapabilities } from '../helpers/utils.ts'

export default class AppScreen {
    private selector: string;

    constructor (selector: string) {
        this.selector = selector;
    }

    /**
     * Wait for the login screen to be visible
     *
     * @param {boolean} isShown
     */
    async waitForIsShown (isShown = true): Promise<boolean | void> {
        return getDeviceFromCapabilities('mobile').$(this.selector).waitForDisplayed({
            reverse: !isShown,
        });
    }

    async pause (milliseconds: number) {
        await getDeviceFromCapabilities('mobile').pause(milliseconds)
    }
}