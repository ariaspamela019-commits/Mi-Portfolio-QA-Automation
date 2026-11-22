// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
test('login correcto', async ({ page }) => {await page.goto('https://the-internet.herokuapp.com/login');
 await page.getByLabel('Username').fill('tomsmith');
await page.getByLabel('Password').fill('SuperSecretPassword!');await page.getByRole('button', { name: 'Login' }).click();
 await expect(page.locator('h2')).toHaveText('Secure Area');
 await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
 });

test('login incorrecto', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('usuario_incorrecto');
    await page.locator('[data-test="password"]').fill('password_incorrecta');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('login con campos vacios', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('[data-test="username"]')).toHaveValue('');
  await expect(page.locator('[data-test="password"]')).toHaveValue('');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  test('login con contraseña vacia', async ({ page }) => {
await page.goto('https://www.saucedemo.com/');
await page.locator('[data-test="username"]').fill('standard_user');
await expect(page.locator('[data-test="password"]')).toHaveValue('');
await page.locator('[data-test="login-button"]').click();
await expect(page.locator('[data-test="error"]')).toBeVisible();
});
