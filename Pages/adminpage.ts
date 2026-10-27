import { Page } from '@playwright/test';
import { TestData } from '../TestData/testdata';

export class AdminPage {
    constructor(private page: Page) {}

    // Admin Page Locators
    searchUsernameInput = TestData.adminSearchUsernameInput;
    searchButton = TestData.adminSearchButton;
    resetButton = TestData.adminResetButton;
    addButton = TestData.adminAddButton;
    tableRecords = TestData.adminTableRecords;

    // Fill Username in Search Filter
    async fillSearchUsername(username: string) {
        // First text input in Admin system users filter
        await this.page.locator(this.searchUsernameInput).first().fill(username);
    }

    // Click Search Button
    async clickSearch() {
        await this.page.locator(this.searchButton).click();
    }

    // Click Reset Button
    async clickReset() {
        await this.page.locator(this.resetButton).click();
    }

    // Click Add User Button
    async clickAddUser() {
        await this.page.locator(this.addButton).click();
    }

    // Search for a specific user
    async searchUser(username: string) {
        await this.fillSearchUsername(username);
        await this.clickSearch();
    }
}
