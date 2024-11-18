import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";

test.skip('Login with Markus username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto("http://hoff.is/login");
    await loginPage.login("Markus", "sup3rs3cr3t", "consumer");


})

test('Login page with incorrect input', async ({page}) => {
    const loginPage = new LoginPage(page);
    await page.goto("http://hoff.is/login");
    await loginPage.login("Markus", "Meuw", "consumer")
    const errorMessage = await loginPage.errorMessage.textContent()

    expect(errorMessage).toBe("Incorrect password")

})