import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';
import { NavigationPage } from '../Pages/navigationpage';
import { PimPage } from '../Pages/pimpage';
import { TestData } from '../TestData/testdata';

test.describe('OrangeHRM PIM Module Tests', () => {

    test.beforeEach(async ({ page }) => {
        // Step 1: Open Login page
        await page.goto(TestData.url, { waitUntil: 'domcontentloaded' });

        // Step 2: Login with valid credentials
        let loginPage = new LoginPage(page);
        await loginPage.login(TestData.validUsername, TestData.validPassword);
        await expect(page).toHaveURL(/.*dashboard/);

        // Step 3: Navigate to PIM module
        let nav = new NavigationPage(page);
        await nav.clickPIM();
        await expect(page).toHaveURL(new RegExp(TestData.pimUrl));
    });

    // Scenario 1: Verify PIM Module Navigation and Header
    test('1. Verify PIM Module Navigation and Header', async ({ page }) => {
        let pim = new PimPage(page);

        // Verify URL contains /pim/viewPimModule
        await expect(page).toHaveURL(new RegExp(TestData.pimUrl));

        // Verify header displays 'PIM'
        await expect(page.locator(TestData.pageHeader)).toContainText(TestData.pimHeaderText);

        // Verify Employee List tab is visible
        await expect(page.locator(pim.tabEmployeeList)).toBeVisible();
    });

    // Scenario 2: Search Employee by ID
    test('2. Search employee by Employee ID', async ({ page }) => {
        let pim = new PimPage(page);

        // Enter ID and click search
        await pim.searchEmployeeById(TestData.pimSearchSampleId);

        // Verify records table is displayed with at least one record or records found text
        await expect(page.locator(pim.tableRecords).first()).toBeVisible();
        await expect(page.locator(pim.tableRecords).first()).toContainText(TestData.pimSearchSampleId);
    });

    // Scenario 3: Reset Search Filters
    test('3. Reset employee search filters in PIM page', async ({ page }) => {
        let pim = new PimPage(page);

        // Enter sample search values
        await pim.fillSearchEmployeeId(TestData.pimSearchSampleId);

        // Click Reset
        await pim.clickReset();

        // Verify Employee ID input is cleared
        await expect(page.locator(pim.searchEmployeeIdInput)).toHaveValue('');
    });

    // Scenario 4: Navigate to Add Employee Tab
    test('4. Navigate to Add Employee tab and verify form fields', async ({ page }) => {
        let pim = new PimPage(page);

        // Click Add Employee tab
        await pim.clickAddEmployeeTab();

        // Verify URL contains /pim/addEmployee
        await expect(page).toHaveURL(/.*pim\/addEmployee/);

        // Verify First Name and Last Name inputs are visible
        await expect(page.locator(pim.firstNameInput)).toBeVisible();
        await expect(page.locator(pim.lastNameInput)).toBeVisible();
        await expect(page.locator(pim.saveButton)).toBeVisible();
    });

    // Scenario 5: Validate Mandatory Fields Error on Add Employee Form
    test('5. Verify Required validation message on empty Add Employee submission', async ({ page }) => {
        let pim = new PimPage(page);

        // Navigate to Add Employee tab
        await pim.clickAddEmployeeTab();
        await expect(page).toHaveURL(/.*pim\/addEmployee/);

        // Click Save button without filling required fields
        await pim.clickSave();

        // Verify "Required" validation error messages appear under First Name and Last Name
        await expect(page.locator(pim.requiredError).first()).toBeVisible();
        await expect(page.locator(pim.requiredError).first()).toContainText(TestData.requiredErrorMessage);
    });

});
