import { test, expect } from '@playwright/test';

test('more actions', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const todoInput = page.getByRole('textbox', {name: 'What needs to be done?'});
    await todoInput.fill('Learn Playwright');
    await todoInput.press('Enter');
    await todoInput.fill('Learn Typescript');
    await todoInput.press('Enter');
    await todoInput.fill('Learn Testing');
    await todoInput.press('Enter');
    const typescriptTodo = page.getByTestId('todo-item').filter({hasText: 'Learn Typescript'});
    const typescriptCheckbox =  typescriptTodo.getByRole('checkbox', {name: 'toggle todo'});
    await typescriptCheckbox.check();
    await typescriptCheckbox.click();
    await expect(typescriptCheckbox).not.toBeChecked();
});