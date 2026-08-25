import {test, expect} from '@playwright/test';

test('expectations', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const todoInput = page.getByRole('textbox', {name: 'What needs to be done?'});
    await todoInput.fill('Learn Playwright');
    await todoInput.press('Enter');
    const todo = page.getByTestId('todo-item');
    await expect(todo).toBeVisible();
    const checkbox = todo.getByRole('checkbox', {name: 'toggle todo'});
    await expect(checkbox).not.toBeChecked();
    await checkbox.check();
    await expect(checkbox).toBeChecked();
    await expect(todo).toContainText('Learn Playwright');
    await expect(todo).toHaveCount(1);
});