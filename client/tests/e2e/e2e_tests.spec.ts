import { test, expect } from '@playwright/test';

test('e2e', async ({ page }) => {
  await page.goto('/');
  // await expect(page.locator('text=superguitartab.com')).toBeVisible();
});