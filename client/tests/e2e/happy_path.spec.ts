import { test, expect } from '@playwright/test';

import { mockTabData } from './fixtures/mock-routes';
import type { TabResponse } from '../../src/types/tab.ts';

const wonderwallTab: TabResponse = {
  id: 2,
  song_name: "Wonderwall",
  artist: "Oasis",
  album: "(What's the Story) Morning Glory?",
  genre: "rock",
  style: "strumming",
  difficulty: "Beginner",
  description: "Released in 1995 on Oasis's landmark album '(What's the Story) Morning Glory?', 'Wonderwall' has become one of the most recognizable acoustic songs of the 1990s. Built around a steady strumming pattern in a capoed open position, it blends simple chord shapes with a rich, rhythmic groove that’s great for singalongs. The song is perfect for guitarists looking to develop timing, chord transitions, and dynamics while learning an enduring Britpop anthem.",
  lyrics_included: false,
  file_url: "tabs/oasis/wonderwall-351528e256.pdf",
  file_name: "wonderwall.pdf"
};

test('Happy path', async ({ page }) => {

  await mockTabData(page, wonderwallTab);

  //Go to landing page
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('superguitartab.com');

  //Search song
  const searchButton = page.getByRole('button', { name: /Open search/i });
  await expect(searchButton).toBeVisible();
  await searchButton.click();

  await expect(page.locator('#search_bar_modal')).toBeVisible();
  const searchInput = page.getByRole('textbox', { name: /Search input/i });
  await expect(searchInput).toBeVisible();
  await searchInput.click(); 
  await searchInput.fill("Wonderwall");
  await expect(searchInput).toHaveValue('Wonderwall', { timeout: 2000 });

  const songRow = page.locator('#song-row-2');
  await expect(songRow).toBeVisible();
  await expect(songRow).toContainText('Wonderwall');
  await expect(songRow).toContainText('Oasis');
  await songRow.click(); 

  //Download song
  await expect(page).toHaveURL('/song/2');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Wonderwall');
  
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