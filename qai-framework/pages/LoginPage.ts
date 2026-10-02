import { type Locator, type Page } from '@playwright/test';
import { environment, testUsers } from '../data/test-data';

export class LoginPage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(private readonly page: Page) {
    this.usernameInput = this.page.locator("input[type=\"text\"]");
    this.passwordInput = this.page.locator("input[type=\"password\"]");
    this.loginButton = this.page.locator("input[type=\"submit\"]");
  }

  async open(): Promise<void> {
    await this.page.goto(environment.baseUrl);
  }

  async signIn(): Promise<void> {
    await this.usernameInput.fill(testUsers.primary.username);
    await this.passwordInput.fill(testUsers.primary.password);
    await this.loginButton.click();
  }

  async signInAndWaitForAuthenticatedState(): Promise<void> {
    await this.signIn();
    await this.passwordInput.waitFor({ state: 'hidden', timeout: 30_000 });
    await this.page.waitForLoadState('domcontentloaded');
  }
}
