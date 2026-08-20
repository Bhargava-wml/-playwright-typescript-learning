import { test, expect } from '@playwright/test';

test('add multiple todo items', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
    const todoInput = page.getByRole('textbox', {name: 'What needs to be done?'});
    await todoInput.fill('Learn Playwright');
    await todoInput.press('Enter');
    await todoInput.fill('Learn Typescript');
    await todoInput.press('Enter');
    await expect(page.getByText('Learn Playwright')).toBeVisible();
    await expect(page.getByText('Learn Typescript')).toBeVisible(); 
});