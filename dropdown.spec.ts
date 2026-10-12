
import {test} from "@playwright/test"

test('learn to handle select dropdowns', async ({page}) => {

await page.goto('https://www.leafground.com/select.xhtml')

await page.locator('[class="ui-selectonemenu"]').selectOption({value:"Playwright"})

await page.waitForTimeout(5000)

// await page.waitForLoadState("domcontentloaded")

await page.locator('[class="ui-selectonemenu"]').selectOption({index:4})

//print all the values

let AllDropdown = page. locator('[class="ui-selectonemenu"]>option')

//count of dropdown values

let ddcount=await AllDropdown.count()

console. log(ddcount)//5

//use for loop to iterate it

for (let index = 0; index<ddcount; index++) {

let values = await AllDropdown.nth(index). innerText()

console.log(values)

}

})

