import { test, expect } from '@playwright/test';

test("element inspection", async ({page}) => {
    await page.goto("https://playwright.dev");
    await expect(page.getByRole("link", {name: "Get started"})).toBeVisible();
    await expect(page.getByRole("link", {name: "GitHub repository"})).toBeVisible();
    await expect(page.getByRole("button", {name: "Search (Control+k)"})).toBeVisible();
});