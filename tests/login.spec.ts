import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';
import { TestData } from '../TestData/testdata';

test.describe('OrangeHRM Login Page Tests', () => {

    // Scenario 1: Valid credentials
    test('1. Testing with valid credential', async ({ page }) => {
        await page.goto(TestData.url);

        let loginPage = new LoginPage(page);
        await loginPage.login(TestData.validUsername, TestData.validPassword);

        // Verify successful login by checking dashboard URL and header
        await expect(page).toHaveURL(/.*dashboard/);
        await expect(page.locator(loginPage.dashboardHeader)).toContainText(TestData.dashboardHeaderText);
    });

    // Scenario 2: Invalid password
    test('2. Testing with invalid credential and verify error message has appeared', async ({ page }) => {
        await page.goto(TestData.url);

        let loginPage = new LoginPage(page);
        await loginPage.login(TestData.validUsername, TestData.invalidPassword);

        // Verify "Invalid credentials" error message appears
        await expect(page.locator(loginPage.errorMessage)).toBeVisible();
        await expect(page.locator(loginPage.errorMessage)).toContainText(TestData.invalidErrorMessage);
    });

    // Scenario 3: Invalid username
    test('3. Testing with invalid username and verify error message has appeared', async ({ page }) => {
        await page.goto(TestData.url);

        let loginPage = new LoginPage(page);
        await loginPage.login(TestData.invalidUsername, TestData.validPassword);

        // Verify "Invalid credentials" error message appears
        await expect(page.locator(loginPage.errorMessage)).toBeVisible();
        await expect(page.locator(loginPage.errorMessage)).toContainText(TestData.invalidErrorMessage);
    });

    // Scenario 4: Empty credentials (blank fields)
    test('4. Testing with empty credentials and verify required error message has appeared', async ({ page }) => {
        await page.goto(TestData.url);

        let loginPage = new LoginPage(page);
        await loginPage.clickLogin();

        // Verify "Required" validation message appears under blank fields
        await expect(page.locator(loginPage.requiredError).first()).toBeVisible();
        await expect(page.locator(loginPage.requiredError).first()).toContainText(TestData.requiredErrorMessage);
    });

});
