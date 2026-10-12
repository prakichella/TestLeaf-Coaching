import {test} from '@playwright/test'

test('CSS Selectors', async ({page}) => {

    await page.goto('https://login.salesforce.com/?locale=in')

    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')

    await page.locator('#Login').click()

    await page.locator('#password').fill('TestLeaf@2025')

    await page.locator('#Login').click()

})