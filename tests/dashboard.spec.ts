import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';
import { DashboardPage } from '../Pages/dashboardpage';
import { TestData } from '../TestData/testdata';

test.describe('OrangeHRM Dashboard Page Tests', () => {

    test.beforeEach(async ({ page }) => {
        // Step 1: Open Login page
        await page.goto(TestData.url);

        // Step 2: Login with valid credentials
        let loginPage = new LoginPage(page);
        await loginPage.login(TestData.validUsername, TestData.validPassword);

        // Step 3: Verify user is landed on Dashboard page
        await expect(page).toHaveURL(/.*dashboard/);
    });

    // Scenario 1: Verify Dashboard page header and URL
    test('1. Verify Dashboard Page Header and URL', async ({ page }) => {
        let dashboard = new DashboardPage(page);

        // Verify URL contains /dashboard/index
        await expect(page).toHaveURL(new RegExp(TestData.dashboardUrl));

        // Verify Page Header displays 'Dashboard'
        await expect(page.locator(dashboard.pageHeader)).toContainText(TestData.dashboardHeaderText);
    });

    // Scenario 2: Verify all key Dashboard widgets are visible
    test('2. Verify Key Dashboard Widgets are Visible', async ({ page }) => {
        let dashboard = new DashboardPage(page);

        // Verify Time at Work widget
        await expect(page.locator(dashboard.timeAtWorkWidget).first()).toBeVisible();

        // Verify My Actions widget
        await expect(page.locator(dashboard.myActionsWidget).first()).toBeVisible();

        // Verify Quick Launch widget
        await expect(page.locator(dashboard.quickLaunchWidget).first()).toBeVisible();

        // Verify Buzz Latest Posts widget
        await expect(page.locator(dashboard.buzzLatestPostsWidget).first()).toBeVisible();

        // Verify Employees on Leave Today widget
        await expect(page.locator(dashboard.employeesOnLeaveWidget).first()).toBeVisible();
    });

    // Scenario 3: Verify Quick Launch button action (Apply Leave shortcut)
    test('3. Verify Quick Launch Apply Leave navigation', async ({ page }) => {
        let dashboard = new DashboardPage(page);

        // Click Apply Leave button from Quick Launch
        await dashboard.clickApplyLeave();

        // Verify navigation to Apply Leave page
        await expect(page).toHaveURL(/.*leave\/applyLeave/);
        await expect(page.locator(TestData.pageHeader)).toContainText(TestData.leaveHeaderText);
    });

    // Scenario 4: Verify User Profile dropdown and Logout flow
    test('4. Verify User Profile Dropdown and Logout', async ({ page }) => {
        let dashboard = new DashboardPage(page);

        // Click user dropdown and select Logout
        await dashboard.clickLogout();

        // Verify user is redirected back to Login page
        await expect(page).toHaveURL(/.*auth\/login/);
        await expect(page.locator(TestData.usernameInput)).toBeVisible();
        await expect(page.locator(TestData.loginButton)).toBeVisible();
    });

});
