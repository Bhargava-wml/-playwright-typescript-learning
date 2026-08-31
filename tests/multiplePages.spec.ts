import { test, expect } from '@playwright/test';

test('automating multiple pages', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/windows');
    console.log('original page: '+page.context().pages().length);
    const popupPromise = page.waitForEvent('popup');
    await page.getByRole('link', {name: 'Click Here'}).click();
    const newPage = await popupPromise;
    const pages = page.context().pages();
    console.log('new page: '+pages.length);
    await expect(pages).toHaveLength(2);
    await expect(page).toHaveURL(/\/windows$/);
    await expect(newPage).toHaveURL(/\/windows\/new$/);
    await expect(newPage).toHaveTitle('New Window');
});