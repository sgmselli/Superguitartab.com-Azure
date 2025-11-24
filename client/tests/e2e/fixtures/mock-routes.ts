import { Page } from '@playwright/test';

import type { TabResponse } from "../../../src/types/tab";

export async function mockTabData(
    page: Page,
    tabData: TabResponse
) {
  await page.route(`**/api/tabs/${tabData.id}`, route =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(tabData)
    })
  );
}