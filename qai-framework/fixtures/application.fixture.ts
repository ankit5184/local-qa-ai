import { test as base } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { InventoryPage } from '../pages/InventoryPage';
import { AuthenticationPage } from '../pages/AuthenticationPage';
import { LoginPage } from '../pages/LoginPage';

type ApplicationFixtures = {
  cartPage: CartPage;
  inventoryPage: InventoryPage;
  authenticationPage: AuthenticationPage;
  loginPage: LoginPage;
};

export const test = base.extend<ApplicationFixtures>({
  cartPage: async ({ page }, use) => { await use(new CartPage(page)); },
  inventoryPage: async ({ page }, use) => { await use(new InventoryPage(page)); },
  authenticationPage: async ({ page }, use) => { await use(new AuthenticationPage(page)); },
  loginPage: async ({ page }, use) => { await use(new LoginPage(page)); },
});

export { expect } from '@playwright/test';
