const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('');

  await expect(page).toHaveTitle('Apryse WebViewer - JS Sample');
});

test('Webviewer', async ({ page }) => {
  await page.goto('');

  expect(page.frameLocator('webviewer')).toBeTruthy();
});