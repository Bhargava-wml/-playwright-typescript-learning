import { test, expect } from '@playwright/test';

test('matching elements', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const todoInput = page.getByRole('textbox', {name: 'What needs to be done?'});
    await todoInput.fill('Learn Playwright');
    await todoInput.press('Enter');
    await todoInput.fill('Learn Typescript');
    await todoInput.press('Enter');
    await todoInput.fill('Learn Testing');
    await todoInput.press('Enter');

//     const todos = page.getByRole('list').filter({hasText: 'Learn Playwright'});
//     const count = await todos.getByRole('listitem').count();
//     await expect(count).toBe(3);
    await expect(page.getByTestId('todo-item')).toHaveCount(3);
});