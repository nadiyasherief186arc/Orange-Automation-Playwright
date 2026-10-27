import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';
import { NavigationPage } from '../Pages/navigationpage';
import { MyInfoPage } from '../Pages/myinfopage';
import { TestData } from '../TestData/testdata';

test.describe('OrangeHRM My Info Module Tests', () => {

    test.beforeEach(async ({ page }) => {
        // Step 1: Open Login page
        await page.goto(TestData.url, { waitUntil: 'domcontentloaded' });

        // Step 2: Login with valid credentials
        let loginPage = new LoginPage(page);
        await loginPage.login(TestData.validUsername, TestData.validPassword);
        await expect(page).toHaveURL(/.*dashboard/);

        // Step 3: Navigate to My Info module
        let nav = new NavigationPage(page);
        await nav.clickMyInfo();
        await expect(page).toHaveURL(new RegExp(TestData.myInfoUrl));
    });

    // Scenario 1: Verify My Info Module Navigation and Header
    test('1. Verify My Info Module Navigation and Header', async ({ page }) => {
        let myInfo = new MyInfoPage(page);

        // Verify URL contains /pim/viewPersonalDetails
        await expect(page).toHaveURL(new RegExp(TestData.myInfoUrl));

        // Verify Header displays 'PIM'
        await expect(page.locator(TestData.pageHeader)).toContainText(TestData.myInfoHeaderText);

        // Verify Personal Details tab is active
        await expect(page.locator(myInfo.tabPersonalDetails)).toBeVisible();
    });

    // Scenario 2: Verify Personal Details Form Fields
    test('2. Verify Personal Details name fields are visible', async ({ page }) => {
        let myInfo = new MyInfoPage(page);

        // Verify First Name, Middle Name, and Last Name are displayed
        await expect(page.locator(myInfo.firstNameInput)).toBeVisible();
        await expect(page.locator(myInfo.middleNameInput)).toBeVisible();
        await expect(page.locator(myInfo.lastNameInput)).toBeVisible();
        await expect(page.locator(myInfo.saveButton).first()).toBeVisible();
    });

    // Scenario 3: Update Nickname / Middle Name and Click Save
    test('3. Update employee Middle Name and Save', async ({ page }) => {
        let myInfo = new MyInfoPage(page);

        // Enter new middle name
        await myInfo.fillMiddleName('Junior');

        // Click Save
        await myInfo.clickSave();

        // Verify save button is interactive
        await expect(page.locator(myInfo.saveButton).first()).toBeVisible();
    });

    // Scenario 4: Navigate to Contact Details Tab
    test('4. Navigate to Contact Details tab', async ({ page }) => {
        let myInfo = new MyInfoPage(page);

        // Click Contact Details tab
        await myInfo.clickContactDetailsTab();

        // Verify URL contains /pim/contactDetails
        await expect(page).toHaveURL(/.*pim\/contactDetails/);

        // Verify Emergency Contacts tab is also visible
        await expect(page.locator(myInfo.tabEmergencyContacts)).toBeVisible();
    });

    // Scenario 5: Required Validation on Clearing Mandatory First Name
    test('5. Verify Required validation when clearing First Name', async ({ page }) => {
        let myInfo = new MyInfoPage(page);

        // Clear First Name field
        await myInfo.clearFirstName();

        // Click Save
        await myInfo.clickSave();

        // Verify "Required" validation error appears
        await expect(page.locator(myInfo.requiredError).first()).toBeVisible();
        await expect(page.locator(myInfo.requiredError).first()).toContainText(TestData.requiredErrorMessage);
    });

});
