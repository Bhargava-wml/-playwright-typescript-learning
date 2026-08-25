import { test, expect } from '@playwright/test';

test('waiting', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const todoInput = page.getByRole('textbox', {name: 'What needs to be done?'});
    await todoInput.fill('Learn Playwright');
    await todoInput.press('Enter');
    const todo = page.getByTestId('todo-item');
    console.log(await todo.isVisible());
    await expect(todo).toBeVisible();
    const todoCheckbox = todo.getByRole('checkbox', {name: 'toggle todo'});
    await todoCheckbox.check();
    await expect(todoCheckbox).toBeChecked();
});
