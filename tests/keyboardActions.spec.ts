import { test, expect } from '@playwright/test';

test('keyboard actions', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const todoInput = page.getByRole('textbox', {name: 'What needs to be done?'});
    await todoInput.pressSequentially('Learn Playwright');
    await todoInput.press('Enter');
    const todo = page.getByTestId('todo-item');
    await todo.dblclick();
    const editInput = todo.locator('.edit');
    await editInput.press('Control+A');
    await editInput.press('Backspace')
    await editInput.pressSequentially('Learn Playwright with Typescript');
    await editInput.press('Enter');
    await expect(todo).toContainText('Learn Playwright with Typescript'); 
});