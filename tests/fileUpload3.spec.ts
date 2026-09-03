import { test, expect } from '@playwright/test';

test('upload file via environment variables', async ({page}) => {
    page.goto('https://the-internet.herokuapp.com/upload')
    const filePath = process.env.FILE_TO_UPLOAD;
    if(!filePath) throw new Error('FILE_TO_UPLOAD environment variable is not defined');
    const input = page.locator('#file-upload');
    await input.setInputFiles(filePath);
    await expect(input).toHaveValue(/copy\.png/);
    await page.getByRole('button', {name: 'Upload'}).click();
    await expect(page.locator('#uploaded-files')).toContainText('copy.png');
});