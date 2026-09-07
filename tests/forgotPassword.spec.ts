import { test, expect } from '@playwright/test';

test('verifying the forgot password flow', async ({page}) => {
    await page.goto('https://learn-dev.qubico.io/', {waitUntil: 'domcontentloaded'});
    const signInLinks = page.getByRole('link', { name: 'SIGN IN'});
    await signInLinks.nth(0).click();
    await page.getByRole('button', {name: 'Continue with email'}).click();
    await page.getByRole('link', {name: 'Forgot password?'}).click();
    const emailInput = page.getByRole('textbox', {name: 'EMAIL'});
    await expect(page.getByRole('heading', {name: 'Forgot your password?'})).toBeVisible();
    await expect(emailInput).toBeEnabled();
    const mailId = process.env.MAIL_ID;
    if(!mailId) throw new Error('MAIL_ID environment var is not defined');
    await emailInput.pressSequentially(mailId);
    await page.getByRole('button', {name: 'Send reset link'}).click();
    await page.goto('https://yopmail.com');
    const textbox = page.getByRole('textbox', {name: 'Login'});
    await textbox.pressSequentially('bhargava');
    await textbox.press('Enter');
    await page.locator('#refresh').click();
    const inboxFrame = page.frameLocator('iframe[name="ifinbox"]');
    const mails = inboxFrame.getByRole('button', {name: 'Password Reset on: Vertex LMS'});
    const mailCount = await mails.count();
    const mailFrame = page.frameLocator('iframe[name="ifmail"]');
    for(let i=0; i<mailCount; i++){
        const mail = mails.nth(i);
        await expect(mail).toBeVisible();
        await mail.click();
        const senderText = await mailFrame.getByText('Qubico <no-reply@qubico.io>', {exact: true}).textContent();
        if(senderText?.includes('Qubico <no-reply@qubico.io>')){
            const pagePromise = page.context().waitForEvent('page');
            await mailFrame.getByRole('link', {name: 'Reset Password'}).click();
            const resetPage = await pagePromise;
            const newPassword = process.env.PASSWORD;
            if(!newPassword) throw new Error('PASSWORD evnvironment varible is not defined');
            const newPwd = resetPage.getByRole('textbox', {name: 'NEW PASSWORD'});
            const confirmPwd = resetPage.getByRole('textbox', {name: 'CONFIRM PASSWORD'});
            await expect(newPwd).toBeVisible();
            await expect(newPwd).toBeEnabled();
            await newPwd.pressSequentially(newPassword);
            await expect(confirmPwd).toBeVisible();
            await expect(confirmPwd).toBeEnabled();
            await confirmPwd.pressSequentially(newPassword);
            await expect(newPwd).toHaveValue(newPassword);
            await expect(confirmPwd).toHaveValue(newPassword);
            await resetPage.getByRole('button', {name: 'Reset password'}).click();
            break;
        }  
    }
});