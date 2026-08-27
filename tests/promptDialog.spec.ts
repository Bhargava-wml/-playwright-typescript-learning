import { test, expect } from '@playwright/test';

test('accept prompt dialog', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    const str = 'Learn Playwright';
    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('I am a JS prompt');
        await dialog.accept(str);
    });
    await page.getByRole('button', {name: 'Click for JS Prompt'}).click();
    await expect(page.locator('#result')).toContainText('You entered: ' + str);
});

test('dismiss prompt dialog', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('I am a JS prompt');
        await dialog.dismiss();
    });
    await page.getByRole('button', {name: 'Click for JS Prompt'}).click();
    await expect(page.locator('#result')).toContainText('You entered: null');
})