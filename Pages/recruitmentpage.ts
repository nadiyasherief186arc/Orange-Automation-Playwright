import { Page } from '@playwright/test';
import { TestData } from '../TestData/testdata';

export class RecruitmentPage {
    constructor(private page: Page) {}

    // Top Tabs & Add Button
    tabCandidates = TestData.recruitmentTabCandidates;
    tabVacancies = TestData.recruitmentTabVacancies;
    addButton = TestData.recruitmentAddButton;

    // Search Filter Locators
    candidateNameInput = TestData.recruitmentCandidateNameInput;
    keywordsInput = TestData.recruitmentKeywordsInput;
    searchButton = TestData.recruitmentSearchButton;
    resetButton = TestData.recruitmentResetButton;
    tableRecords = TestData.recruitmentTableRecords;

    // Add Candidate Form Locators
    firstNameInput = TestData.recruitmentFirstNameInput;
    middleNameInput = TestData.recruitmentMiddleNameInput;
    lastNameInput = TestData.recruitmentLastNameInput;
    emailInput = TestData.recruitmentEmailInput;
    saveButton = TestData.recruitmentSaveButton;
    cancelButton = TestData.recruitmentCancelButton;
    requiredError = TestData.recruitmentRequiredError;

    // Tab Navigation Actions
    async clickCandidatesTab() {
        await this.page.locator(this.tabCandidates).click();
    }

    async clickVacanciesTab() {
        await this.page.locator(this.tabVacancies).click();
    }

    async clickAddButton() {
        await this.page.locator(this.addButton).click();
    }

    // Filter Actions
    async fillCandidateName(name: string) {
        await this.page.locator(this.candidateNameInput).first().fill(name);
    }

    async fillKeywords(keywords: string) {
        await this.page.locator(this.keywordsInput).fill(keywords);
    }

    async clickSearch() {
        await this.page.locator(this.searchButton).click();
    }

    async clickReset() {
        await this.page.locator(this.resetButton).click();
    }

    // Add Candidate Actions
    async fillAddCandidateForm(firstName: string, lastName: string, email: string, middleName: string = '') {
        await this.page.locator(this.firstNameInput).fill(firstName);
        if (middleName) {
            await this.page.locator(this.middleNameInput).fill(middleName);
        }
        await this.page.locator(this.lastNameInput).fill(lastName);
        await this.page.locator(this.emailInput).fill(email);
    }

    async clickSave() {
        await this.page.locator(this.saveButton).click();
    }

    async clickCancel() {
        await this.page.locator(this.cancelButton).click();
    }
}
