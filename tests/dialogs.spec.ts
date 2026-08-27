import {test, expect } from '@playwright/test';

test('testing dialogs', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('I am a JS Alert');
        await dialog.accept();
    });
    await page.getByRole('button', {name: 'Click for JS Alert'}).click();
    await expect(page.locator('#result')).toContainText('You successfully clicked an alert');
});