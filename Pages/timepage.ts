import { Page } from '@playwright/test';
import { TestData } from '../TestData/testdata';

export class TimePage {
    constructor(private page: Page) {}

    // Top Navigation Tabs
    tabTimesheets = TestData.timeTabTimesheets;
    tabAttendance = TestData.timeTabAttendance;
    tabReports = TestData.timeTabReports;
    tabProjectInfo = TestData.timeTabProjectInfo;

    // Submenu Items
    submenuMyTimesheets = TestData.timeSubmenuMyTimesheets;
    submenuEmployeeTimesheets = TestData.timeSubmenuEmployeeTimesheets;
    submenuPunchInOut = TestData.timeSubmenuPunchInOut;
    submenuMyRecords = TestData.timeSubmenuMyRecords;
    submenuCustomers = TestData.timeSubmenuCustomers;
    submenuProjects = TestData.timeSubmenuProjects;

    // Timesheets Search / View Locators
    employeeNameInput = TestData.timeEmployeeNameInput;
    viewButton = TestData.timeViewButton;
    attendanceCardTitle = TestData.timeAttendanceCardTitle;
    recordsTable = TestData.timeRecordsTable;

    // Timesheets Navigation Actions
    async clickTimesheetsMenu() {
        await this.page.locator(this.tabTimesheets).click();
    }

    async selectEmployeeTimesheets() {
        await this.clickTimesheetsMenu();
        await this.page.locator(this.submenuEmployeeTimesheets).click();
    }

    async selectMyTimesheets() {
        await this.clickTimesheetsMenu();
        await this.page.locator(this.submenuMyTimesheets).click();
    }

    // Attendance Navigation Actions
    async clickAttendanceMenu() {
        await this.page.locator(this.tabAttendance).click();
    }

    async selectPunchInOut() {
        await this.clickAttendanceMenu();
        await this.page.locator(this.submenuPunchInOut).click();
    }

    async selectMyRecords() {
        await this.clickAttendanceMenu();
        await this.page.locator(this.submenuMyRecords).click();
    }

    // Project Info Navigation Actions
    async clickProjectInfoMenu() {
        await this.page.locator(this.tabProjectInfo).click();
    }

    async selectCustomers() {
        await this.clickProjectInfoMenu();
        await this.page.locator(this.submenuCustomers).click();
    }

    async selectProjects() {
        await this.clickProjectInfoMenu();
        await this.page.locator(this.submenuProjects).click();
    }

    // Timesheet Form Actions
    async fillEmployeeName(name: string) {
        await this.page.locator(this.employeeNameInput).fill(name);
    }

    async clickViewTimesheet() {
        await this.page.locator(this.viewButton).click();
    }
}
