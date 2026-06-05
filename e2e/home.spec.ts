import { test, expect } from '@playwright/test'

test('home page should load', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: 'Home' })).toBeVisible()
})
