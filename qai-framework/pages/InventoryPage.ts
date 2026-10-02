import { expect, type Locator, type Page } from '@playwright/test';
import { environment, testUsers } from '../data/test-data';

export class InventoryPage {
  readonly typeTextInput: Locator;
  readonly typePasswordInput: Locator;
  readonly typeSubmitInput: Locator;
  constructor(private readonly page: Page) {
    this.typeTextInput = this.page.locator("input[type=\"text\"]");
    this.typePasswordInput = this.page.locator("input[type=\"password\"]");
    this.typeSubmitInput = this.page.locator("input[type=\"submit\"]");
  }

  /** Executes Login button from Authentication to Inventory. */
  async verifyLoginButton(): Promise<void> {
    await this.page.goto(environment.baseUrl);
        await this.typeTextInput.fill(testUsers.primary.username);
        await this.typePasswordInput.fill(testUsers.primary.password);
        await this.typeSubmitInput.click();
        await this.page.waitForURL((url) => url.pathname === "/inventory.html", { timeout: 20000, waitUntil: 'commit' });
        await expect(this.page).toHaveURL((url) => url.pathname === "/inventory.html");
  }
}
