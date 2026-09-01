import { test } from '@playwright/test';
import path from 'path';

test('element screenshot', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const textbox = page.getByRole('textbox', {name: 'What needs to be done?'});
    await textbox.pressSequentially('Learn Playwright');
    await textbox.press('Enter');
    await textbox.pressSequentially('LearnTypescript');
    await textbox.press('Enter');
    const todos = page.getByRole('list').filter({hasText: 'Learn Playwright'});
    const ssPath = path.join(process.cwd(), 'test-results/screenshots/', 'todos.png');
    await todos.screenshot({path: ssPath});
});