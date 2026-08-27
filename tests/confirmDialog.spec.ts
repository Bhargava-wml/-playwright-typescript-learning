import { test, expect } from '@playwright/test';

test('accept in confirm dialog', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('I am a JS Confirm');
        await dialog.accept();
    });
    await page.getByRole('button', {name: 'Click for JS Confirm'}).click();
    await expect(page.locator('#result')).toContainText('You clicked: Ok');
});

test('dismiss in confirm dialog', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('I am a JS Confirm');
        await dialog.dismiss();
    });
    await page.getByRole('button', {name: 'Click for JS Confirm'}).click();
    await expect(page.locator('#result')).toContainText('You clicked: Cancel');
});