

import { test, expect } from '@playwright/test';

 test('Classroom Activity  Input Fields', async ({ page }) => { 

    // Part 1: Navigate to the page await page.goto('https://leafground.com/input.xhtml');
    
    await expect(disabledTextbox).toBeDisabled();

    await expect(nameTextbox).toBeEditable();

    await nameTextbox.fill('Selva');

    await emailTextbox.fill('Playwright Learning');

});