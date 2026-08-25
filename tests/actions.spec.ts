import { test, expect } from '@playwright/test';

test('actions', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const todoInput = page.getByRole('textbox', {name: 'What needs to be done?'});
    await todoInput.fill('Learn Playwright');
    await todoInput.press('Enter');
    const todoCheckbox = page.getByTestId('todo-item').getByRole('checkbox', {name: 'toggle todo'});
    await expect(todoCheckbox).not.toBeChecked();
    await todoCheckbox.check();
    await expect(todoCheckbox).toBeChecked();
    await todoCheckbox.uncheck();
    await expect(todoCheckbox).not.toBeChecked();    
});