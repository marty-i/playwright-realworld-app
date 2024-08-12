import { test, expect } from '@playwright/test';

test('should redirect unauthenticated user to signin page', async ({
  page,
}) => {
  await page.goto('http://localhost:3000/personal');
  await page.goto('http://localhost:3000/signin');
});
