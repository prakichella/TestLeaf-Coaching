import { test, expect } from '@playwright/test'

test('movie ticket booking pvr', async ({ page }) => {


    await page.goto('https://www.pvrcinemas.com/')

    await page.locator('.p-dropdown-trigger').first().click()
    await page.getByRole('heading', { name: 'Chennai' }).click()

    await page.getByText('Cinemas', { exact: true }).first().click()
    await page.getByRole('heading', { name: 'INOX The Marina Mall, OMR, Chennai' }).click()

    await page.getByText('Tomorrow').click()

    await page.locator('.time-select:not(.seat-color-disable):not(.seat-color-red)').first().click()

    await page.getByRole('button', { name: 'Accept' }).click()

    await page.getByRole('button', { name: 'Accept' }).click()

    await page.locator('.seat-current-pvr').first().click()

    await expect(page.locator('.seat-info')).toContainText('Seat Info')
    await expect(page.locator('.seat-number p')).toBeVisible()
    await expect(page.locator('.grand-prices h6')).toHaveText(/\d/)
    console.log('Seat selected:', await page.locator('.seat-number p').textContent())
    console.log('Grand total  :', await page.locator('.grand-prices h6').textContent())

    await expect(page).toHaveTitle('PVR Cinemas')
    await expect(page).toHaveURL(/seatlayout/)

    await page.getByRole('button', { name: 'Proceed' }).click()


})
