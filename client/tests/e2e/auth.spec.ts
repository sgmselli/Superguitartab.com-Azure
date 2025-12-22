import { test, expect } from '@playwright/test';

import {
  mockAuthState,
  mockLoginEndpoint,
  mockRegisterEndpoint,
  mockUserDownloads,
} from './fixtures/mock-routes';
import { loginUser } from './helpers/helpers';
import { testUser } from './constants';

test('User can sign in and is taken to account page', async ({ page }) => {
  await mockAuthState(page, { authenticated: false });
  await mockUserDownloads(page, []);

  await page.goto('/login');

  await loginUser(page, testUser)

  await page.waitForURL('**/account');
  await expect(page.getByRole('heading', { level: 1, name: /Welcome, Test/i })).toBeVisible();
});

test('User can register and is taken to account page', async ({ page }) => {
  await mockAuthState(page, { authenticated: false });
  await mockRegisterEndpoint(page, testUser);
  await mockLoginEndpoint(page, testUser);
  await mockUserDownloads(page, []);

  await page.goto('/register');

  await page.getByRole('textbox', { name: /First name input/i }).fill(testUser.first_name);
  await page.getByRole('textbox', { name: /Last name input/i }).fill(testUser.last_name);
  await page.getByRole('textbox', { name: /Register email input/i }).fill(testUser.email);
  await page.getByRole('textbox', { name: /Register password input/i }).fill('Password123!');
  await page.getByRole('textbox', { name: /Confirm password input/i }).fill('Password123!');

  await page.getByRole('button', { name: /Create account button/i }).click();

  await page.waitForURL('**/account');
  await expect(page.getByRole('heading', { level: 1, name: /Welcome, Test/i })).toBeVisible();
});

