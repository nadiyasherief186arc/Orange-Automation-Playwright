import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';
import { NavigationPage } from '../Pages/navigationpage';
import { TestData } from '../TestData/testdata';

test.describe('OrangeHRM 12 Modules Navigation Tests', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to URL and Login as Admin
        await page.goto(TestData.url);
        let loginPage = new LoginPage(page);
        await loginPage.login(TestData.validUsername, TestData.validPassword);
        await expect(page).toHaveURL(/.*dashboard/);
    });

    // 1. Admin Page
    test('1. Verify Admin Page Navigation and Header', async ({ page }) => {
        let nav = new NavigationPage(page);
        await nav.clickAdmin();

        await expect(page).toHaveURL(new RegExp(TestData.adminUrl));
        await expect(page.locator(nav.pageHeader)).toContainText(TestData.adminHeaderText);
    });

    // 2. PIM Page
    test('2. Verify PIM Page Navigation and Header', async ({ page }) => {
        let nav = new NavigationPage(page);
        await nav.clickPIM();

        await expect(page).toHaveURL(new RegExp(TestData.pimUrl));
        await expect(page.locator(nav.pageHeader)).toContainText(TestData.pimHeaderText);
    });

    // 3. Leave Page
    test('3. Verify Leave Page Navigation and Header', async ({ page }) => {
        let nav = new NavigationPage(page);
        await nav.clickLeave();

        await expect(page).toHaveURL(new RegExp(TestData.leaveUrl));
        await expect(page.locator(nav.pageHeader)).toContainText(TestData.leaveHeaderText);
    });

    // 4. Time Page
    test('4. Verify Time Page Navigation and Header', async ({ page }) => {
        let nav = new NavigationPage(page);
        await nav.clickTime();

        await expect(page).toHaveURL(new RegExp(TestData.timeUrl));
        await expect(page.locator(nav.pageHeader)).toContainText(TestData.timeHeaderText);
    });

    // 5. Recruitment Page
    test('5. Verify Recruitment Page Navigation and Header', async ({ page }) => {
        let nav = new NavigationPage(page);
        await nav.clickRecruitment();

        await expect(page).toHaveURL(new RegExp(TestData.recruitmentUrl));
        await expect(page.locator(nav.pageHeader)).toContainText(TestData.recruitmentHeaderText);
    });

    // 6. My Info Page
    test('6. Verify My Info Page Navigation and Header', async ({ page }) => {
        let nav = new NavigationPage(page);
        await nav.clickMyInfo();

        await expect(page).toHaveURL(new RegExp(TestData.myInfoUrl));
        await expect(page.locator(nav.pageHeader)).toContainText(TestData.myInfoHeaderText);
    });

    // 7. Performance Page
    test('7. Verify Performance Page Navigation and Header', async ({ page }) => {
        let nav = new NavigationPage(page);
        await nav.clickPerformance();

        await expect(page).toHaveURL(new RegExp(TestData.performanceUrl));
        await expect(page.locator(nav.pageHeader)).toContainText(TestData.performanceHeaderText);
    });

    // 8. Dashboard Page
    test('8. Verify Dashboard Page Navigation and Header', async ({ page }) => {
        let nav = new NavigationPage(page);
        // Navigate away first, then back to Dashboard
        await nav.clickAdmin();
        await nav.clickDashboard();

        await expect(page).toHaveURL(new RegExp(TestData.dashboardUrl));
        await expect(page.locator(nav.pageHeader)).toContainText(TestData.dashboardHeaderText);
    });

    // 9. Directory Page
    test('9. Verify Directory Page Navigation and Header', async ({ page }) => {
        let nav = new NavigationPage(page);
        await nav.clickDirectory();

        await expect(page).toHaveURL(new RegExp(TestData.directoryUrl));
        await expect(page.locator(nav.pageHeader)).toContainText(TestData.directoryHeaderText);
    });

    // 10. Maintenance Page
    test('10. Verify Maintenance Page Navigation and Admin Access Prompt', async ({ page }) => {
        let nav = new NavigationPage(page);
        await nav.clickMaintenance();

        await expect(page).toHaveURL(new RegExp(TestData.maintenanceUrl));
        // Verify Administrator Access password prompt is displayed
        await expect(page.locator(TestData.maintenancePromptHeader)).toContainText(TestData.maintenanceHeaderText);
    });

    // 11. Claim Page
    test('11. Verify Claim Page Navigation and Header', async ({ page }) => {
        let nav = new NavigationPage(page);
        await nav.clickClaim();

        await expect(page).toHaveURL(new RegExp(TestData.claimUrl));
        await expect(page.locator(nav.pageHeader)).toContainText(TestData.claimHeaderText);
    });

    // 12. Buzz Page
    test('12. Verify Buzz Page Navigation and Header', async ({ page }) => {
        let nav = new NavigationPage(page);
        await nav.clickBuzz();

        await expect(page).toHaveURL(new RegExp(TestData.buzzUrl));
        await expect(page.locator(nav.pageHeader)).toContainText(TestData.buzzHeaderText);
    });

});
