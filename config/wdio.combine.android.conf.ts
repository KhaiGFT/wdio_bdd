import { config as baseConfig } from "./wdio.shared.conf.js";
import { join } from "node:path";

export const config: WebdriverIO.MultiremoteConfig = {
    ...baseConfig,

    // ============
    // Specs
    // ============
    specs: ["../features/**.feature"],
    capabilities: {
    browser: {
        capabilities: {
            browserName: 'chrome'
        }
    },
    mobile: {
        capabilities: {
            platformName: "Android",
            "wdio:maxInstances": 1,
            // For W3C the appium capabilities need to have an extension prefix
            // This is `appium:` for all Appium Capabilities which can be found here
            // http://appium.io/docs/en/writing-running-appium/caps/

            //
            // NOTE: Change this name according to the Simulator you have created on your local machine
            "appium:deviceName": "pixel_3a",
            //
            // NOTE: Change this version according to the Simulator Version you have created on your local machine
            "appium:platformVersion": "14.0",
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "UiAutomator2",
            "appium:noReset": false,
            // The path to the app
            "appium:app": join(
                process.cwd(),
                "apps",
                // Change this name according to the app version you downloaded
                "android.wdio.native.app.v1.0.8.apk"
            ),
            "appium:appWaitActivity": "com.wdiodemoapp.MainActivity",
            "appium:newCommandTimeout": 240,
            "appium:webviewConnectTimeout": 5000,
            }
        }
    },
};