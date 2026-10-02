import { expect, type Locator, type Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { environment, testUsers } from '../data/test-data';

export class CartPage {
  private readonly loginPage: LoginPage;
  readonly typeTextInput: Locator;
  readonly typePasswordInput: Locator;
  readonly typeSubmitInput: Locator;
  readonly shoppingCartLink: Locator;
  constructor(private readonly page: Page) {
    this.loginPage = new LoginPage(page);
    this.typeTextInput = this.page.locator("input[type=\"text\"]");
    this.typePasswordInput = this.page.locator("input[type=\"password\"]");
    this.typeSubmitInput = this.page.locator("input[type=\"submit\"]");
    this.shoppingCartLink = this.page.locator("[data-test=\"shopping-cart-link\"]");
  }

  async typeSubmitAndWaitForInventory(): Promise<void> {
    await this.typeTextInput.fill(testUsers.primary.username);
        await this.typePasswordInput.fill(testUsers.primary.password);
        await this.typeSubmitInput.click();
        await this.page.waitForURL((url) => url.pathname === "/inventory.html", { timeout: 20000, waitUntil: 'commit' });
  }

  async openCart(): Promise<void> {
    await Promise.all([
        this.page.waitForURL((url) => url.pathname === "/cart.html", { timeout: 20000, waitUntil: 'commit' }),
        this.shoppingCartLink.click({ noWaitAfter: true }),
    ]);
  }

  async verifyCartPage(): Promise<void> {
    await expect(this.page).toHaveURL((url) => url.pathname === "/cart.html");
  }

  async typeSubmitAction(): Promise<void> {
    await this.typeTextInput.fill(testUsers.primary.username);
        await this.typePasswordInput.fill(testUsers.primary.password);
        await this.typeSubmitInput.click();
        await this.typePasswordInput.waitFor({ state: 'hidden', timeout: 30000 });
  }

  async openInventoryPage(): Promise<void> {
    await this.page.goto(new URL("/inventory.html", environment.baseUrl).toString());
  }

  /** Executes Login button, then Shopping cart from Authentication to Cart. */
  async verifyLoginButtonShoppingCart(): Promise<void> {
    await this.loginPage.open();
    await this.typeSubmitAndWaitForInventory();
    await this.openCart();
    await this.verifyCartPage();
  }

  /** Executes Shopping cart from Inventory to Cart. */
  async verifyShoppingCart(): Promise<void> {
    await this.loginPage.open();
    await this.typeSubmitAction();
    await this.openInventoryPage();
    await this.openCart();
    await this.verifyCartPage();
  }
}
