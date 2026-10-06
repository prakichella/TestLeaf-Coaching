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

  // Two "Submit" confirmations move into the Scan app's file browser.
  await page.getByRole('button', { name: 'Submit' }).first().click();
  await page.waitForURL('**/adsocket**');
  await page.getByRole('button', { name: 'Submit' }).first().click();
  await page.waitForURL('**/scan**');

  // Open "folder test"
  await page.getByText('folder test', { exact: true }).dblclick();
  await page.locator('div').filter({ hasText: /^ホーム$/ }).click();
  await page.locator('body').press('ControlOrMeta+c');
  await page.getByText('folder test', { exact: true }).click({
    modifiers: ['ControlOrMeta'],
  });
  await page.locator('div').filter({ hasText: /^ホーム$/ }).click();
  await page.getByRole('textbox', { name: '検索' }).click();
  await page.getByRole('textbox', { name: '検索' }).fill('folder test');
  await page.getByRole('textbox', { name: '検索' }).press('Enter');
});
