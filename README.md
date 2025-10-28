# 🧪 WDIO E2E TESTING WITH CUCUMBER Project

> WebdriverIO E2E Testing (Web & Mobile Testing With Cucumber)

📘 **Official Docs:** [https://webdriver.io/docs/gettingstarted/](https://webdriver.io/docs/gettingstarted/)

---

## 🚀 Setup Instructions
1 - Install NodeJS & NPM
2 - Clone source code at this repo
3 - Install dependencies
```bash
npm install
```
4 - Setup android emnulator and ios simulator
5 - Update config file to match your android emualor and ios simulator
6 - Without error, try a commnand for trigger test at Run Tests section

---


## ▶️ Run Tests

1 - Run test on desktop web
```bash
npm run browser -- --spec=./features/web.sample.feature
```
2 - Run test on iOS application (Please make sure to setup ios simulator and update related config)
```bash
npm run ios.app -- --spec=./features/mobile.sample.feature
```
3 - Run test on iOS browser (Please make sure to setup ios simulator and update related config)
```bash
npm run ios.browser -- --spec=./features/web.sample.feature
```
4 - Run test on desktop web + iOS app (Please make sure to setup ios simulator and update related config)
```bash
npm run ios.combine -- --spec=./features/combine.sample.feature
```
5 - Run test on android app (Please make sure to setup android emulator and update related config)
```bash
npm run android.app -- --spec=./features/mobile.sample.feature
```
6 - Run test on android web (Please make sure to setup android emulator and update related config)
```bash
npm run android.browser -- --spec=./features/web.sample.feature
```
7 - Run test on desktop web + android app (Please make sure to setup android emulator and update related config)
```bash
npm run android.combine -- --spec=./features/android.sample.feature
```
8 - Run test which has "@app_smoke" on android app (Please make sure to setup android emulator and update related config)
```bash
npm run android.app -- --cucumberOpts.tags='@app_smoke'
```
9 - Run test which has "@web_smoke" on browser
```bash
npm run android.app -- --cucumberOpts.tags='@web_smoke'
```
10 - Run test which has "@web_smoke" on android app + desktop browser (Please make sure to setup android emulator and update related config)
```bash
npm run android.combine -- --cucumberOpts.tags='@e2e_smoke'
```
11 - Generate Allure Report
```bash
npm run allure-report
```
12 - Open Appium inspector
```bash
npm run appium-inspector
```
---
