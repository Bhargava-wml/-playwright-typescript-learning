import { test, expect } from '@playwright/test';

test('double click', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const todoInput = page.getByRole('textbox', {name: 'What needs to be done?'});
    await todoInput.fill('Learn Playwright');
    await todoInput.press('Enter');
    const todo = page.getByTestId('todo-item');
    await todo.dblclick();
    await expect(todo.getByRole('textbox')).toHaveValue('Learn Playwright');
});