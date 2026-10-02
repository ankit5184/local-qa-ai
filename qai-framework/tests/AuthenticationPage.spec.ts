import { test } from '../fixtures/application.fixture';

test.describe("Authentication Page", () => {
  test("Page access on Inventory (/inventory.html) — This state requires an authenticated session.", { tag: ["@regression","@medium"] }, async ({ authenticationPage }) => {
    await authenticationPage.verifyInventoryRequiresAuthentication();
  });

  test("Page access on Cart (/cart.html) — This state requires an authenticated session.", { tag: ["@regression","@medium"] }, async ({ authenticationPage }) => {
    await authenticationPage.verifyCartRequiresAuthentication();
  });
});
