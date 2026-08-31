import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('automation of file download', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/download');
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', {name: 'testFile.txt'}).click();
    const download = await downloadPromise;
    const filename = download.suggestedFilename();
    console.log('downloaded file name: '+ filename);
    expect(filename).not.toBe('');
    const filePath = path.resolve(__dirname, '../test-data/downloads/'+ filename);
    console.log('temporary path used by the playwright to store downloads: '+ await download.path());
    await download.saveAs(filePath);
    expect(fs.existsSync(filePath)).toBe(true);
}); 