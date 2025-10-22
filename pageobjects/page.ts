import { getDeviceFromCapabilities } from '../helpers/utils.ts'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
     * Opens a sub page of the page
     */
    async open (path: string) {
        await getDeviceFromCapabilities('browser').url(`/${path}`)
    }

    async inputSpecialKey (specialKey: any) {
        await getDeviceFromCapabilities('browser').keys(specialKey)
    }

    async pause (milliseconds: number) {
        await getDeviceFromCapabilities('browser').pause(milliseconds)
    }
}