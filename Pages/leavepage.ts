import { Page } from '@playwright/test';
import { TestData } from '../TestData/testdata';

export class LeavePage {
    constructor(private page: Page) {}

    // Sub-Navigation Tabs
    tabApply = TestData.leaveTabApply;
    tabMyLeave = TestData.leaveTabMyLeave;
    tabLeaveList = TestData.leaveTabLeaveList;
    tabAssignLeave = TestData.leaveTabAssignLeave;

    // Leave List Filter Locators
    fromDateInput = TestData.leaveFromDateInput;
    toDateInput = TestData.leaveToDateInput;
    searchButton = TestData.leaveSearchButton;
    resetButton = TestData.leaveResetButton;
    tableRecords = TestData.leaveTableRecords;

    // Apply Leave Form Locators
    leaveTypeSelect = TestData.leaveTypeSelect;
    commentsTextarea = TestData.leaveCommentsTextarea;
    applyButton = TestData.leaveApplyButton;
    requiredError = TestData.leaveRequiredError;

    // Sub-Navigation Tab Actions
    async clickApplyTab() {
        await this.page.locator(this.tabApply).click();
    }

    async clickMyLeaveTab() {
        await this.page.locator(this.tabMyLeave).click();
    }

    async clickLeaveListTab() {
        await this.page.locator(this.tabLeaveList).click();
    }

    async clickAssignLeaveTab() {
        await this.page.locator(this.tabAssignLeave).click();
    }

    // Leave List Filter Actions
    async fillFromDate(date: string) {
        await this.page.locator(this.fromDateInput).fill(date);
    }

    async fillToDate(date: string) {
        await this.page.locator(this.toDateInput).fill(date);
    }

    async clickSearch() {
        await this.page.locator(this.searchButton).click();
    }

    async clickReset() {
        await this.page.locator(this.resetButton).click();
    }

    // Apply Leave Actions
    async fillComments(comments: string) {
        await this.page.locator(this.commentsTextarea).fill(comments);
    }

    async clickApply() {
        await this.page.locator(this.applyButton).click();
    }
}
