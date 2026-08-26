import { test, expect } from '@playwright/test';

test('mouse actions', async ({page}) => {
    await page.goto('https://www.w3schools.com/howto/howto_css_dropdown.asp');
    const dropdown = page.getByRole('button', {name: 'Hover Me'});
    await dropdown.hover();
    await expect(page.locator('.dropdown-content')).toBeVisible();
});