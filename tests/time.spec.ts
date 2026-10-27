import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';
import { NavigationPage } from '../Pages/navigationpage';
import { TimePage } from '../Pages/timepage';
import { TestData } from '../TestData/testdata';

test.describe('OrangeHRM Time Module Tests', () => {

    test.beforeEach(async ({ page }) => {
        // Step 1: Open Login page
        await page.goto(TestData.url, { waitUntil: 'domcontentloaded' });

        // Step 2: Login with valid credentials
        let loginPage = new LoginPage(page);
        await loginPage.login(TestData.validUsername, TestData.validPassword);
        await expect(page).toHaveURL(/.*dashboard/);

        // Step 3: Navigate to Time module
        let nav = new NavigationPage(page);
        await nav.clickTime();
        await expect(page).toHaveURL(new RegExp(TestData.timeUrl));
    });

    // Scenario 1: Verify Time Module Navigation and Header
    test('1. Verify Time Module Navigation and Header', async ({ page }) => {
        let time = new TimePage(page);

        // Verify URL contains /time/viewTimeModule
        await expect(page).toHaveURL(new RegExp(TestData.timeUrl));

        // Verify Header displays 'Time'
        await expect(page.locator(TestData.pageHeader)).toContainText(TestData.timeHeaderText);

        // Verify Timesheets navigation tab is visible
        await expect(page.locator(time.tabTimesheets)).toBeVisible();
    });

    // Scenario 2: Verify Employee Timesheets Search Filter
    test('2. Verify Timesheet search input and View button', async ({ page }) => {
        let time = new TimePage(page);

        // Verify Employee Name input and View button are visible
        await expect(page.locator(time.employeeNameInput)).toBeVisible();
        await expect(page.locator(time.viewButton)).toBeVisible();
    });

    // Scenario 3: Navigate to Attendance > Punch In/Out
    test('3. Navigate to Attendance Punch In/Out', async ({ page }) => {
        let time = new TimePage(page);

        // Select Punch In/Out from Attendance dropdown
        await time.selectPunchInOut();

        // Verify URL contains /attendance/punchIn
        await expect(page).toHaveURL(/.*attendance\/punchIn/);

        // Verify Punch In title is visible
        await expect(page.locator(time.attendanceCardTitle)).toBeVisible();
    });

    // Scenario 4: Navigate to Project Info > Customers
    test('4. Navigate to Project Info Customers list', async ({ page }) => {
        let time = new TimePage(page);

        // Select Customers from Project Info dropdown
        await time.selectCustomers();

        // Verify URL contains /admin/viewCustomers
        await expect(page).toHaveURL(/.*admin\/viewCustomers/);

        // Verify Customers records table or add button is visible
        await expect(page.locator(TestData.pageHeader)).toContainText(TestData.timeHeaderText);
    });

    // Scenario 5: Required Validation Error on Empty Employee Timesheet Submission
    test('5. Verify Required validation on empty Employee Timesheet view', async ({ page }) => {
        let time = new TimePage(page);

        // Click View button without entering employee name
        await time.clickViewTimesheet();

        // Verify "Required" error message is displayed
        await expect(page.locator(TestData.requiredError).first()).toBeVisible();
        await expect(page.locator(TestData.requiredError).first()).toContainText(TestData.requiredErrorMessage);
    });

});
