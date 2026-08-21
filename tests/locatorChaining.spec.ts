import { test, expect } from '@playwright/test';

test('locator chaining', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const todoInput = page.getByRole('textbox', {name: 'What needs to be done?'});
    await todoInput.fill('Learn Playwright');
    await todoInput.press('Enter');
    await todoInput.fill('Learn Typescript');
    await todoInput.press('Enter');
    await todoInput.fill('Learn Testing'); 
    await todoInput.press('Enter');
    const todos = page.getByTestId('todo-item');
    const typescriptTodo = todos.filter({hasText: 'Learn Typescript'});
    const checkbox = typescriptTodo.getByRole('checkbox', {name: 'toggle todo'});
    await checkbox.check();
    await expect(checkbox).toBeChecked();
});