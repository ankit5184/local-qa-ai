import { test } from '../fixtures/application.fixture';

test.describe("Cart Page", () => {
  test("Login button, then Shopping cart from Authentication to Cart", { tag: ["@smoke","@sanity","@functional","@regression","@e2e","@medium"] }, async ({ cartPage }) => {
    await cartPage.verifyLoginButtonShoppingCart();
  });

  test("Shopping cart from Inventory to Cart", { tag: ["@smoke","@sanity","@functional","@regression","@low"] }, async ({ cartPage }) => {
    await cartPage.verifyShoppingCart();
  });
});
