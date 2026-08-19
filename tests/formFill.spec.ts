import { test, expect } from '@playwright/test';

test("form fillup", async ({page}) => {
    await page.goto("https://demo.playwright.dev/todomvc/");
    await page.getByPlaceholder("What needs to be done?").fill("Learn Playwright");
    await page.getByRole("textbox", {name: "What needs to be done?"}).press('Enter');
    await expect(page.getByText("Learn Playwright")).toBeVisible();
});