import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.goto('http://localhost:3000/');
  await page.getByLabel('Zoom in').click();
  await page.getByLabel('Zoom out').click();
  await page.locator('div').filter({ hasText: '+− Leaflet | © OpenStreetMap' }).nth(3).click();
  await page.locator('div').filter({ hasText: '+− Leaflet | © OpenStreetMap' }).nth(3).click();
});