import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('get-started')).toContainText('Get started by editing app/page.tsx');
});