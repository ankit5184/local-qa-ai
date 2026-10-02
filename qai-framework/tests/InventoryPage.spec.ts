import { test } from '../fixtures/application.fixture';

test.describe("Inventory Page", () => {
  test("Login button from Authentication to Inventory", { tag: ["@smoke","@sanity","@functional","@regression","@medium"] }, async ({ inventoryPage }) => {
    await inventoryPage.verifyLoginButton();
  });
});
