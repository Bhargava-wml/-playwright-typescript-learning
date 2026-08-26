import { test, expect } from '@playwright/test';

test('right click mouse action', async ({page}) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    const element = page.getByText('right click me', {exact: true}); 
    await element.click({button: 'right'});
    const contextMenu = page.getByRole('list').filter({hasText: 'Edit'});
    await expect(contextMenu).toBeVisible();
    const editOption = contextMenu.getByRole('listitem').filter({hasText: 'Edit'});
    await expect(editOption).toBeVisible();
});