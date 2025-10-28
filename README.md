# 🧪 WDIO E2E TESTING WITH CUCUMBER Project

> WebdriverIO E2E Testing (Web & Mobile Testing With Cucumber)

📘 **Official Docs:** [https://webdriver.io/docs/gettingstarted/](https://webdriver.io/docs/gettingstarted/)

---

## 🚀 Setup Instructions
1 - Clone source code at this repo
2 - Install dependencies
```bash
npm install
```
2 - Install dependencies
```bash
npm install
```
3 - Without error, try a commnand for trigger test at Run Tests section

---


## ▶️ Run Tests

1 - Run test on desktop web
```bash
npm run browser -- --spec=./features/web.sample.feature
```
2 - Run test on iOS application
```bash
npm run ios.app -- --spec=./features/mobile.sample.feature
```
3 - Run test on iOS browser
```bash
npm run ios.browser -- --spec=./features/web.sample.feature
```
4 - Run test on desktop web + iOS app
```bash
npm run ios.combine -- --spec=./features/combine.sample.feature
```
5 - Run test on android app
```bash
npm run android.app -- --spec=./features/mobile.sample.feature
```
6 - Run test on android web
```bash
npm run android.browser -- --spec=./features/web.sample.feature
```
7 - Run test on desktop web + android app
```bash
npm run android.combine -- --spec=./features/android.sample.feature
```
8 - Run test which has "@app_smoke" on android app 
```bash
npm run android.app -- --cucumberOpts.tags='@app_smoke'
```
9 - Run test which has "@web_smoke" on browser
```bash
npm run android.app -- --cucumberOpts.tags='@web_smoke'
```
10 - Run test which has "@web_smoke" on android app + desktop browser
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
