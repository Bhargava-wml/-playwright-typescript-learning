import { test, expect } from '@playwright/test';

// used getByRole locator strategy to identify, fill and store the element based on its browser expossed semantic/accessibility role
test("add todo using the role locator", async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const todoInput = page.getByRole('textbox', {name: 'What needs to be done?'});
    await todoInput.fill('Learn Playwright');
    await todoInput.press('Enter');
});

// used getByPlaceholder locator strategy to identify, fill and store the element by its placeholder text  
test("add todo using placeholder locator", async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const todoInput  = page.getByPlaceholder('What needs to be done?');
    await todoInput.fill('Learn Typescript');
    await todoInput.press('Enter');
});

// used getByRole locator strategy to identify, fill and store the element and used getBytext locator strategy to identify and verify the test filled in the box
test("verify todo using text locator", async ({page}) => { 
    await page.goto('https://demo.playwright.dev/todomvc');
    const todoInput = page.getByRole('textbox', {name: 'What needs to be done?'});
    await todoInput.fill('Learn Locators');
    await todoInput.press('Enter');
    await expect(page.getByText('Learn Locators')).toBeVisible(); 
});

// used locator locator strategy to identify, fill and store the element by its class and used getByText to identify the element and verify the visibility
test("combine locator strategies", async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const todoInput = page.locator('.new-todo')
    await todoInput.fill('Playwright is fun');
    await todoInput.press('Enter');
    await expect(page.getByText('Playwright is fun')).toBeVisible();
});