import { test } from '@playwright/test';
import path from 'path';

test('page screenshot', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const textbox = page.getByRole('textbox', {name: 'What needs to be done?'});
    await textbox.pressSequentially('Learn Playwright');
    await textbox.press('Enter');
    await textbox.pressSequentially('Learn typescript');
    await textbox.press('Enter');
    const ssPath = path.resolve(__dirname, '../test-results/screenshots/todo-page.png')
    await page.screenshot({path: ssPath});
});