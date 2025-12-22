import { expect, type Page } from '@playwright/test';
import { UserResponse } from '../../../src/types/user';
import { TabResponse } from '../../../src/types/tab';
import { mockLoginEndpoint } from '../fixtures/mock-routes';

export async function navigateToSong(page: Page, song: TabResponse) {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Superguitartab.com');

  const searchButton = page.getByRole('button', { name: /Open search/i });
  await expect(searchButton).toBeVisible();
  await searchButton.click();

  await expect(page.locator('#search_bar_modal')).toBeVisible();
  const searchInput = page.getByRole('textbox', { name: /Search input/i });
  await expect(searchInput).toBeVisible();
  await searchInput.click(); 
  await searchInput.fill(song.song_name);
  await expect(searchInput).toHaveValue(song.song_name, { timeout: 2000 });

  const songRow = page.locator(`#song-row-${song.id}`);
  await expect(songRow).toBeVisible();
  await expect(songRow).toContainText(song.song_name);
  await expect(songRow).toContainText(song.artist);
  await songRow.click(); 

  await expect(page).toHaveURL(`/song/${song.id}`);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(song.song_name);
}

export async function loginUser(page: Page, user: UserResponse) {
  await mockLoginEndpoint(page, user);
  await page.getByRole('textbox', { name: /Email address input/i }).fill(user.email);
  await page.getByRole('textbox', { name: /Password input/i }).fill('password123!');
  await page.getByRole('button', { name: /Sign in button/i }).click();
}