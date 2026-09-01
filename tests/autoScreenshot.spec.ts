import { test, expect } from '@playwright/test';

test('screenshot when test failed', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    await expect(page.getByText('This text doesnt exist')).toBeVisible();
});