import { test, expect } from '@playwright/test';

test('Launch Google Chrome and open google.com', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
    
    await context.close();
});