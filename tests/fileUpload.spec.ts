import { test, expect } from '@playwright/test';

test('automation of uploading a file using relative path', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    const input = page.locator('#file-upload');
    await input.setInputFiles('./test-data/sample.txt');
    await expect(input).toHaveValue(/sample\.txt/);
    await page.getByRole('button', {name: 'Upload'}).click();
    await expect(page.locator('#uploaded-files')).toContainText('sample.txt');
});