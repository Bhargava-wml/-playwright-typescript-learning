import { test, expect } from '@playwright/test';

test('element selection', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const todoInput = page.getByRole('textbox', {name: 'What needs to be done?'});
    await todoInput.fill('Learn Playwright');
    await todoInput.press('Enter');
    await todoInput.fill('Learn Typescript');
    await todoInput.press('Enter');
    await todoInput.fill('Learn Testing');
    await todoInput.press('Enter');

    const todos = page.getByTestId('todo-item');
    const first = todos.first();
    const last = todos.last();
    const secondTodo = todos.nth(1);
    const typescriptTodo = todos.filter({hasText: 'Learn Typescript'});
    
    await expect(first).toContainText('Learn Playwright');
    await expect(last).toContainText('Learn Testing');
    await expect(secondTodo).toContainText('Learn Typescript');
    await expect(typescriptTodo).toContainText('Learn Typescript');

    // console.log('first: '+await first.textContent());
    // console.log('last: '+await last.textContent());
    // console.log('secondTodo element: '+await secondTodo.textContent());
    // console.log('typescriptTodo: '+await typescriptTodo.textContent());
});
