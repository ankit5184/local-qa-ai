import { expect, type Locator, type Page } from '@playwright/test';
import { environment } from '../data/test-data';

export class AuthenticationPage {
  readonly typePasswordInput: Locator;
  constructor(private readonly page: Page) {
    this.typePasswordInput = this.page.locator("input[type=\"password\"]");
  }

  /** Executes Page access on Inventory (/inventory.html) — This state requires an authenticated session. */
  async verifyInventoryRequiresAuthentication(): Promise<void> {
    await this.page.goto(new URL("/inventory.html", environment.baseUrl).toString());
        await expect(this.typePasswordInput).toBeVisible();
  }

  /** Executes Page access on Cart (/cart.html) — This state requires an authenticated session. */
  async verifyCartRequiresAuthentication(): Promise<void> {
    await this.page.goto(new URL("/cart.html", environment.baseUrl).toString());
        await expect(this.typePasswordInput).toBeVisible();
  }
}
