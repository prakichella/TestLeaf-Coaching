/*
Browser -> atcual browser engine
Context -> isolated and incognito window
Page -> tab or page specific to the context */


import {test} from "@playwright/test"

test("launch brower" , async ({page}) => {
    await page.goto("https://www.amazon.in/", {waitUntil: "load"})
    await page.waitForLoadState("networkidle")
    console.log(page.url())
    await page.screenshot({path: "screenshot.png", fullPage: true})
})

// page fixture : only runs based on the project configuration in playwright.config.ts. If you want to run the test in multiple browsers, you need to configure the projects in playwright.config.ts

/*
let browser = await chromium.launch()
let context = await browser.newContext()
let page = await context.newPage() */

test("launch browser using page fixture", async ({page}) => {
    await page.goto("https://christwood.edu.in/", {waitUntil: "load"})
})

test("launch brower ", async ({page}) => {
    await page.goto("https://platform.testleaf.com/", {waitUntil: "load"})
})

test("launch brower" , async ({page}) => {
    await page.goto("https://platform.testleaf.com/", {waitUntil: "load"})
    await page.waitForLoadState("networkidle")
    console.log(page.url())
    await page.screenshot({path: "screenshot.png", fullPage: true})
})