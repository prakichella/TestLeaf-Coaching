import { test, expect } from "@playwright/test"

test('learn to handle select dropdowns', async ({ page }) => {


    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('democsr')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()

    await page.locator('text=CRM/SFA').click()

    await page.locator('[href="/crmsfa/control/leadsMain"]').click()

    await page.locator('[href="/crmsfa/control/createLeadForm"]').click()

    await page.locator('#createLeadForm_industryEnumId').selectOption({ label: 'Computer Hardware' })
 //print all the values

    let AllDropdown = page. locator('#createLeadForm_industryEnumId>option')

//count of dropdown values

let ddcount=await AllDropdown.count()

console. log(ddcount)//5

//use for loop to iterate it

for (let index = 0; index<ddcount; index++) {

let values = await AllDropdown.nth(index). innerText()

console.log(values)

}

})


  
