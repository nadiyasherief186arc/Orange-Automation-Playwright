import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';
import { NavigationPage } from '../Pages/navigationpage';
import { LeavePage } from '../Pages/leavepage';
import { TestData } from '../TestData/testdata';

test.describe('OrangeHRM Leave Module Tests', () => {

    test.beforeEach(async ({ page }) => {
        // Step 1: Open Login page
        await page.goto(TestData.url, { waitUntil: 'domcontentloaded' });

        // Step 2: Login with valid credentials
        let loginPage = new LoginPage(page);
        await loginPage.login(TestData.validUsername, TestData.validPassword);
        await expect(page).toHaveURL(/.*dashboard/);

        // Step 3: Navigate to Leave module
        let nav = new NavigationPage(page);
        await nav.clickLeave();
        await expect(page).toHaveURL(new RegExp(TestData.leaveUrl));
    });

    // Scenario 1: Verify Leave Module Navigation and Header
    test('1. Verify Leave Module Navigation and Header', async ({ page }) => {
        let leave = new LeavePage(page);

        // Verify URL contains /leave/viewLeaveModule
        await expect(page).toHaveURL(new RegExp(TestData.leaveUrl));

        // Verify Header displays 'Leave'
        await expect(page.locator(TestData.pageHeader)).toContainText(TestData.leaveHeaderText);

        // Verify Apply tab is visible in topbar
        await expect(page.locator(leave.tabApply)).toBeVisible();
    });

    // Scenario 2: Navigate to Apply Leave Tab
    test('2. Navigate to Apply Leave tab and verify form fields', async ({ page }) => {
        let leave = new LeavePage(page);

        // Click Apply tab
        await leave.clickApplyTab();

        // Verify navigation to applyLeave page
        await expect(page).toHaveURL(/.*leave\/applyLeave/);

        // Verify Leave Type select, comments textarea, and Apply button are visible
        await expect(page.locator(leave.leaveTypeSelect)).toBeVisible();
        await expect(page.locator(leave.commentsTextarea)).toBeVisible();
        await expect(page.locator(leave.applyButton)).toBeVisible();
    });

    // Scenario 3: Required Field Validation on Empty Apply Leave Submission
    test('3. Verify Required validation on empty Apply Leave submission', async ({ page }) => {
        let leave = new LeavePage(page);

        // Navigate to Apply Leave tab
        await leave.clickApplyTab();
        await expect(page).toHaveURL(/.*leave\/applyLeave/);

        // Click Apply without selecting Leave Type or dates
        await leave.clickApply();

        // Verify "Required" validation error appears
        await expect(page.locator(leave.requiredError).first()).toBeVisible();
        await expect(page.locator(leave.requiredError).first()).toContainText(TestData.requiredErrorMessage);
    });

    // Scenario 4: Navigate to My Leave Tab
    test('4. Navigate to My Leave tab and verify My Leave list', async ({ page }) => {
        let leave = new LeavePage(page);

        // Click My Leave tab
        await leave.clickMyLeaveTab();

        // Verify URL contains viewMyLeaveList
        await expect(page).toHaveURL(/.*leave\/viewMyLeaveList/);

        // Verify search button is visible
        await expect(page.locator(leave.searchButton)).toBeVisible();
    });

    // Scenario 5: Reset Filters on Leave List Page
    test('5. Reset search filters on Leave List', async ({ page }) => {
        let leave = new LeavePage(page);

        // Enter sample date in From Date filter
        await leave.fillFromDate('2024-01-01');

        // Click Reset
        await leave.clickReset();

        // Verify search button is still interactive and page remains loaded
        await expect(page.locator(leave.searchButton)).toBeVisible();
    });

});
