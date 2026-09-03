import { test, expect } from '@playwright/test';

test('want to upload file from any loacation', async ({page}) => {
    const filePath = 'C:/Users/kolla/OneDrive/Pictures/Screenshots/copy.png';
    await page.goto('https://the-internet.herokuapp.com/upload');
    const input = page.locator('#file-upload');
    await input.setInputFiles(filePath);
    await expect(input).toHaveValue(/copy\.png/);
    await page.getByRole('button', {name: 'Upload'}).click();
    await expect(page.locator('#uploaded-files')).toContainText('copy.png');
});