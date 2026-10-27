import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';
import { NavigationPage } from '../Pages/navigationpage';
import { AdminPage } from '../Pages/adminpage';
import { TestData } from '../TestData/testdata';

test.describe('OrangeHRM Admin Page Functional Tests', () => {

    test.beforeEach(async ({ page }) => {
        // Step 1: Open Login page
        await page.goto(TestData.url);

        // Step 2: Login with valid credentials
        let loginPage = new LoginPage(page);
        await loginPage.login(TestData.validUsername, TestData.validPassword);
        await expect(page).toHaveURL(/.*dashboard/);

        // Step 3: Navigate to Admin module
        let nav = new NavigationPage(page);
        await nav.clickAdmin();
        await expect(page).toHaveURL(new RegExp(TestData.adminUrl));
    });

    // Scenario 1: Search System Users by Username
    test('1. Search system user by username', async ({ page }) => {
        let admin = new AdminPage(page);

        // Fill username 'Admin' and click search
        await admin.searchUser(TestData.adminSearchUsernameValue);

        // Verify records table is displayed with matching records
        await expect(page.locator(admin.tableRecords).first()).toBeVisible();
        await expect(page.locator(admin.tableRecords).first()).toContainText(TestData.adminSearchUsernameValue);
    });

    // Scenario 2: Reset search filters
    test('2. Reset search filters in Admin page', async ({ page }) => {
        let admin = new AdminPage(page);

        // Fill username
        await admin.fillSearchUsername(TestData.adminSearchUsernameValue);

        // Click Reset
        await admin.clickReset();

        // Verify search input is cleared
        await expect(page.locator(admin.searchUsernameInput).first()).toHaveValue('');
    });

    // Scenario 3: Click Add User button
    test('3. Verify Add User button navigates to Add User form', async ({ page }) => {
        let admin = new AdminPage(page);

        // Click Add User button
        await admin.clickAddUser();

        // Verify navigation to save user form
        await expect(page).toHaveURL(/.*saveSystemUser/);
        await expect(page.locator(TestData.pageHeader)).toContainText(TestData.adminHeaderText);
    });

});
