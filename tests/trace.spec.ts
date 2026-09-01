import { test, expect } from '@playwright/test';

test('trace example', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const textbox = page.getByRole('textbox', {name: 'What needs to be done?'});
    await textbox.pressSequentially('Learn Playwright');
    await textbox.press('Enter');
    await expect(page.getByTestId('todo-item')).toContainText('Learn Playwright');
})