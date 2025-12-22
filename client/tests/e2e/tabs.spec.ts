import { test, expect } from '@playwright/test';

import { loginUser, navigateToSong } from './helpers/helpers.ts';
import { mockTabData, mockAuthState, mockDownloadEndpoint, mockThumbnailJPGFetch } from './fixtures/mock-routes.ts';
import { testUser, wonderwallTab } from './constants.ts';

test('Logged-in user can download a tab', async ({ page }) => {
  await mockThumbnailJPGFetch(page);
  await mockAuthState(page, { authenticated: true });
  await mockTabData(page, wonderwallTab);
  await mockDownloadEndpoint(page, wonderwallTab);

  await navigateToSong(page, wonderwallTab);

  const downloadButton = page.getByRole('button', { name: /Download song button/i });
  await expect(downloadButton).toBeVisible();

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    downloadButton.click(), 
  ]);

  const filename = download.suggestedFilename();
  const path = await download.path();

  expect(filename).toMatch(/wonderwall.*\.pdf/);
  expect(path).toBeTruthy();
});

test('Unauthenticated user sees auth modal when attempting download', async ({ page }) => {
  await mockThumbnailJPGFetch(page);
  await mockAuthState(page, { authenticated: false });
  await mockTabData(page, wonderwallTab);
  await mockDownloadEndpoint(page, wonderwallTab);

  await navigateToSong(page, wonderwallTab);

  const downloadButton = page.getByRole('button', { name: /Download song button/i });
  await downloadButton.click();

  await expect(page.getByRole('heading', { name: /Before you download/i })).toBeVisible();
  await expect(page.getByRole('button', { name: /Redirect to sign into an account button/i })).toBeVisible();
  await expect(page.getByRole('button', { name: /Redirect to create an account button/i })).toBeVisible();
});

test('Redirect back to song after unauthenticated user creates account from download', async ({ page }) => {
  await mockThumbnailJPGFetch(page);
  await mockAuthState(page, { authenticated: false });
  await mockTabData(page, wonderwallTab);
  await mockDownloadEndpoint(page, wonderwallTab);

  await navigateToSong(page, wonderwallTab);

  const downloadButton = page.getByRole('button', { name: /Download song button/i });
  await downloadButton.click();

  await expect(page.getByRole('heading', { name: /Before you download/i })).toBeVisible();

  const redirectLoginButton = page.getByRole('button', { name: /Redirect to sign into an account button/i });
  const redirectRegisterButton = page.getByRole('button', { name: /Redirect to create an account button/i });
  
  await expect(redirectLoginButton).toBeVisible();
  await expect(redirectRegisterButton).toBeVisible();

  await redirectLoginButton.click();

  await page.waitForURL('**/login');

  await loginUser(page, testUser);

  await page.waitForURL(`**/song/${wonderwallTab.id}`);
});