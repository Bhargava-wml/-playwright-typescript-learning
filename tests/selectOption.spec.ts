    import { test, expect } from '@playwright/test'

    test('dropdown interaction', async ({page}) => {
        await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select');
        console.log(await page.frames().map(frame => frame.url()));
        const select = page.frameLocator('iframe[name="iframeResult"]').locator('select');
        console.log(await select.locator('option').allTextContents());
        await select.selectOption({label: 'Volvo'});
        await expect(select).toHaveValue('volvo');
    });