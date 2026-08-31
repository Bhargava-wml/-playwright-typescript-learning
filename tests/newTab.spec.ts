import { test, expect } from '@playwright/test';

test('automating new tabs', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/windows');
    const popupPromise = page.waitForEvent('popup');
    await page.getByRole('link', {name: 'Click Here'}).click();
    const newPage = await popupPromise;
    await expect(newPage).toHaveTitle('New Window');
    await expect(newPage).toHaveURL(/\/windows\/new/);
});