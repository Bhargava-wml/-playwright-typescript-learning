import { test, expect } from '@playwright/test';
import path from 'path';

test('automation of uploading a file using process.cwd()', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    const filePath = path.join(process.cwd(), 'test-data', 'sample.txt');
    const input = page.locator('#file-upload');
    await input.setInputFiles(filePath);
    await expect(input).toHaveValue(/sample\.txt/);
    await page.getByRole('button', {name: 'Upload'}).click();
    await expect(page.locator('#uploaded-files')).toContainText('sample.txt');
})