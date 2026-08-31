    import { test, expect } from '@playwright/test';
    import path from 'path';

    test('automation of uploading a file using __dirname', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/upload');
        const filePath = path.resolve(__dirname, '../test-data/sample.txt');
        const input = page.locator('#file-upload');
        await input.setInputFiles(filePath);
        await expect(input).toHaveValue(/sample\.txt/);
        await page.getByRole('button', {name: 'Upload'}).click();
        await expect(page.locator('#uploaded-files')).toContainText('sample.txt');
    });