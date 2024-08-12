import { test, expect } from '@playwright/test';

test('should redirect unauthenticated user to signin page', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/personal');
  await expect(page).toHaveURL('http://localhost:3000/signin');
});

test('should redirect to the home page after login', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/signin');
  await page
    .getByRole('textbox', { name: 'username' })
    .fill('Heath93');
  await page
    .getByRole('textbox', { name: 'password' })
    .fill('s3cret');
  await page.getByRole('checkbox', { name: 'remember me' }).click();
  await page.getByRole('button', { name: 'sign in' }).click();
  await expect(page).toHaveURL('http://localhost:3000');
});
