import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.alfadock-pack.com/');

  // Company login
  await page.getByRole('textbox', { name: 'ユーザー名' }).fill('Atkgi');
  await page.getByRole('textbox', { name: 'ユーザー名' }).press('Tab');
  await page.getByRole('textbox', { name: 'パスワード' }).fill('1234');
  await page.getByRole('textbox', { name: 'パスワード' }).press('Enter');

  // Wait for the user login page to actually load before typing into it,
  // otherwise this can race the company-login page transition.
  await page.waitForURL('**/userlogin.html');

  // User login
  await page.getByRole('textbox', { name: 'ユーザー名' }).fill('admin');
  await page.getByRole('textbox', { name: 'ユーザー名' }).press('Tab');
  await page.getByRole('textbox', { name: 'パスワード' }).fill('admin');
  await page.getByRole('textbox', { name: 'パスワード' }).press('Enter');

  await page.waitForURL('**/ver10/**');
  await page.goto('https://www.alfadock-pack.com/ver10/#/home');
  await page.getByRole('img').nth(4).click();

  // The drawing grid can take a while to load thousands of rows.
  await page.locator('[id="75948700"]').nth(1).waitFor({ timeout: 60000 });
  await page.locator('[id="75948700"]').nth(1).dblclick();
  await page.locator('[id="75948701"]').dblclick();
});