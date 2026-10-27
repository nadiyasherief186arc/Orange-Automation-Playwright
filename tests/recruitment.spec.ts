import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';
import { NavigationPage } from '../Pages/navigationpage';
import { RecruitmentPage } from '../Pages/recruitmentpage';
import { TestData } from '../TestData/testdata';

test.describe('OrangeHRM Recruitment Module Tests', () => {

    test.beforeEach(async ({ page }) => {
        // Step 1: Open Login page
        await page.goto(TestData.url, { waitUntil: 'domcontentloaded' });

        // Step 2: Login with valid credentials
        let loginPage = new LoginPage(page);
        await loginPage.login(TestData.validUsername, TestData.validPassword);
        await expect(page).toHaveURL(/.*dashboard/);

        // Step 3: Navigate to Recruitment module
        let nav = new NavigationPage(page);
        await nav.clickRecruitment();
        await expect(page).toHaveURL(new RegExp(TestData.recruitmentUrl));
    });

    // Scenario 1: Verify Recruitment Module Navigation and Header
    test('1. Verify Recruitment Module Navigation and Header', async ({ page }) => {
        let recruit = new RecruitmentPage(page);

        // Verify URL contains /recruitment/viewRecruitmentModule
        await expect(page).toHaveURL(new RegExp(TestData.recruitmentUrl));

        // Verify Header displays 'Recruitment'
        await expect(page.locator(TestData.pageHeader)).toContainText(TestData.recruitmentHeaderText);

        // Verify Candidates tab and Add button are visible
        await expect(page.locator(recruit.tabCandidates)).toBeVisible();
        await expect(page.locator(recruit.addButton)).toBeVisible();
    });

    // Scenario 2: Verify Candidates Search Filters
    test('2. Verify Candidates search filter elements', async ({ page }) => {
        let recruit = new RecruitmentPage(page);

        // Verify Candidate Name input, keywords input, and search button are visible
        await expect(page.locator(recruit.candidateNameInput).first()).toBeVisible();
        await expect(page.locator(recruit.keywordsInput)).toBeVisible();
        await expect(page.locator(recruit.searchButton)).toBeVisible();
    });

    // Scenario 3: Reset Search Filters
    test('3. Reset candidate search filters', async ({ page }) => {
        let recruit = new RecruitmentPage(page);

        // Enter sample keywords in filter
        await recruit.fillKeywords('Automation');

        // Click Reset
        await recruit.clickReset();

        // Verify search input is cleared
        await expect(page.locator(recruit.keywordsInput)).toHaveValue('');
    });

    // Scenario 4: Navigate to Add Candidate Form
    test('4. Navigate to Add Candidate form and verify form fields', async ({ page }) => {
        let recruit = new RecruitmentPage(page);

        // Click Add button
        await recruit.clickAddButton();

        // Verify navigation to addCandidate page
        await expect(page).toHaveURL(/.*recruitment\/addCandidate/);

        // Verify First Name, Last Name, Email, and Save button are visible
        await expect(page.locator(recruit.firstNameInput)).toBeVisible();
        await expect(page.locator(recruit.lastNameInput)).toBeVisible();
        await expect(page.locator(recruit.emailInput).first()).toBeVisible();
        await expect(page.locator(recruit.saveButton)).toBeVisible();
    });

    // Scenario 5: Required Validation on Empty Candidate Submission
    test('5. Verify Required validation on empty Add Candidate submission', async ({ page }) => {
        let recruit = new RecruitmentPage(page);

        // Navigate to Add Candidate form
        await recruit.clickAddButton();
        await expect(page).toHaveURL(/.*recruitment\/addCandidate/);

        // Click Save without filling mandatory fields
        await recruit.clickSave();

        // Verify "Required" validation error messages appear
        await expect(page.locator(recruit.requiredError).first()).toBeVisible();
        await expect(page.locator(recruit.requiredError).first()).toContainText(TestData.requiredErrorMessage);
    });

});
