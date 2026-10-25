
import {test} from "@playwright/test"

test('learn single window handling',async ({page, context}) =>{

await page.goto('https://www.leafground.com/window.xhtml')

let pagePromise=context.waitForEvent('page')

await page.locator('//span[text()="Open"]').click()

let childPage = await pagePromise
await childPage.waitForLoadState()

console.log(await page.title())

console.log(await childPage.title())

await childPage.bringToFront()

await childPage.locator('#email').fill('your.email@example.com')

await childPage.locator('#message').fill('Playwright window handling')

await childPage.waitForTimeout(2000)

})
