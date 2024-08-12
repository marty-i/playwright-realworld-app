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
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('Heath93');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('s3cret');
  await page.getByLabel('Remember me').check();
  await page.locator('[data-test="signin-submit"]').click();
});
