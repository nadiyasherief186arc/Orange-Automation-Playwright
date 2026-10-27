import { Page } from '@playwright/test';
import { TestData } from '../TestData/testdata';

export class PimPage {
    constructor(private page: Page) {}

    // PIM Sub-Navigation Tabs
    tabEmployeeList = TestData.pimTabEmployeeList;
    tabAddEmployee = TestData.pimTabAddEmployee;
    tabReports = TestData.pimTabReports;
    addEmployeeButton = TestData.pimAddEmployeeButton;

    // Search Filter Locators
    searchEmployeeNameInput = TestData.pimSearchEmployeeNameInput;
    searchEmployeeIdInput = TestData.pimSearchEmployeeIdInput;
    searchButton = TestData.pimSearchButton;
    resetButton = TestData.pimResetButton;
    tableRecords = TestData.pimTableRecords;
    recordsCountText = TestData.pimRecordsCountText;

    // Add Employee Form Locators
    firstNameInput = TestData.pimFirstNameInput;
    middleNameInput = TestData.pimMiddleNameInput;
    lastNameInput = TestData.pimLastNameInput;
    saveButton = TestData.pimSaveButton;
    cancelButton = TestData.pimCancelButton;
    requiredError = TestData.pimRequiredError;
    successToast = TestData.pimSuccessToast;

    // Sub-Navigation Tab Actions
    async clickEmployeeListTab() {
        await this.page.locator(this.tabEmployeeList).click();
    }

    async clickAddEmployeeTab() {
        await this.page.locator(this.tabAddEmployee).click();
    }

    async clickReportsTab() {
        await this.page.locator(this.tabReports).click();
    }

    // Search Actions
    async fillSearchEmployeeName(name: string) {
        await this.page.locator(this.searchEmployeeNameInput).first().fill(name);
    }

    async fillSearchEmployeeId(id: string) {
        await this.page.locator(this.searchEmployeeIdInput).fill(id);
    }

    async clickSearch() {
        await this.page.locator(this.searchButton).click();
    }

    async clickReset() {
        await this.page.locator(this.resetButton).click();
    }

    async searchEmployeeByName(name: string) {
        await this.fillSearchEmployeeName(name);
        await this.clickSearch();
    }

    async searchEmployeeById(id: string) {
        await this.fillSearchEmployeeId(id);
        await this.clickSearch();
    }

    // Add Employee Form Actions
    async fillAddEmployeeForm(firstName: string, lastName: string, middleName: string = '') {
        await this.page.locator(this.firstNameInput).fill(firstName);
        if (middleName) {
            await this.page.locator(this.middleNameInput).fill(middleName);
        }
        await this.page.locator(this.lastNameInput).fill(lastName);
    }

    async clickSave() {
        await this.page.locator(this.saveButton).click();
    }

    async clickCancel() {
        await this.page.locator(this.cancelButton).click();
    }

    // Combined Add Employee Action
    async addEmployee(firstName: string, lastName: string, middleName: string = '') {
        await this.fillAddEmployeeForm(firstName, lastName, middleName);
        await this.clickSave();
    }
}
