import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('uploding multiple files from the folder in project structure', async ({page}) => {
    const folder = process.env.FILES_FOLDER;
    if(!folder) throw new Error('FILE_FOLDER environment variable is not defined');
    const folderPath = path.join(process.cwd(),folder);
    const files = fs.readdirSync(folderPath);
    console.log(files);
    for(const file of files){
        console.log('current filename: '+file);
        await page.goto('https://the-internet.herokuapp.com/upload');
        const filePath = path.join(folderPath, file);
        const input = page.locator('#file-upload');
        await input.setInputFiles(filePath);
        const filename = path.basename(filePath);
        await expect(input).toHaveValue(`C:\\fakepath\\${filename}`);
        await page.getByRole('button', {name: 'Upload'}).click();
        await expect(page.locator('#uploaded-files')).toContainText(filename);
    }  
    await expect(page.getByRole('heading', {name: 'File Uploaded!'})).toBeVisible();
})