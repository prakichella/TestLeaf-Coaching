
import {test} from "@playwright/test"

test('learn window handling',async ({page, context}) =>{

await page.goto('https://www.amazon.in/')

//storing the reference of search box
let searchBox=page. locator(' [placeholder="Search Amazon.in"]')

await searchBox.fill('iphone')

await searchBox.press('Enter')

//register the event listener and create the promise

let pagePromise=context.waitForEvent('page')

//click action

await page.locator('(//span[contains(text(), "iPhone 17 Pro 256 GB: 15.93 cm")]) [1]').click()

//resolve the promise and capture the new page ref

let childPage = await pagePromise
console.log(await childPage.title() )

//main page title
let pageTitle=await page.title()
console.log(pageTitle)

await page.bringToFront() 

await page.locator('//a[text()="Mobiles"]').click()

await page.waitForTimeout (2000)


})