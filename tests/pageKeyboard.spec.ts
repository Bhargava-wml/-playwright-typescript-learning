import { test, expect } from '@playwright/test';

test('page keyboard actions', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const todoInput = page.getByRole('textbox', {name: 'What needs to be done?'});
    await todoInput.pressSequentially('Learn Playwright');
    await page.keyboard.press('Enter');
    const todo = page.getByTestId('todo-item');
    await todo.dblclick();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.keyboard.type('Learn Playwright with Typescript');
    await page.keyboard.press('Enter');
    await expect(todo).toContainText('Learn Playwright with Typescript');
});