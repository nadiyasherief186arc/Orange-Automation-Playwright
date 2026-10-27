import { Page } from '@playwright/test';
import { TestData } from '../TestData/testdata';

export class DashboardPage {
    constructor(private page: Page) {}

    // Dashboard Header & Grid Locators
    pageHeader = TestData.dashboardHeader;
    dashboardGrid = TestData.dashboardGrid;
    dashboardWidgets = TestData.dashboardWidgets;

    // Dashboard Widget Locators
    timeAtWorkWidget = TestData.timeAtWorkWidget;
    myActionsWidget = TestData.myActionsWidget;
    quickLaunchWidget = TestData.quickLaunchWidget;
    buzzLatestPostsWidget = TestData.buzzLatestPostsWidget;
    employeesOnLeaveWidget = TestData.employeesOnLeaveWidget;
    employeeDistributionSubUnitWidget = TestData.employeeDistributionSubUnitWidget;
    employeeDistributionLocationWidget = TestData.employeeDistributionLocationWidget;

    // Quick Launch Buttons
    quickLaunchAssignLeave = TestData.quickLaunchAssignLeave;
    quickLaunchLeaveList = TestData.quickLaunchLeaveList;
    quickLaunchTimesheets = TestData.quickLaunchTimesheets;
    quickLaunchApplyLeave = TestData.quickLaunchApplyLeave;
    quickLaunchMyLeave = TestData.quickLaunchMyLeave;
    quickLaunchMyTimesheet = TestData.quickLaunchMyTimesheet;

    // User Profile Dropdown & Logout
    userDropdown = TestData.userDropdown;
    userDropdownMenu = TestData.userDropdownMenu;
    dropdownAbout = TestData.dropdownAbout;
    dropdownSupport = TestData.dropdownSupport;
    dropdownChangePassword = TestData.dropdownChangePassword;
    dropdownLogout = TestData.dropdownLogout;

    // Open User Dropdown Menu
    async openUserDropdown() {
        await this.page.locator(this.userDropdown).click();
    }

    // Click Logout
    async clickLogout() {
        await this.openUserDropdown();
        await this.page.locator(this.dropdownLogout).click();
    }

    // Click Quick Launch Action Buttons
    async clickAssignLeave() {
        await this.page.locator(this.quickLaunchAssignLeave).click();
    }

    async clickLeaveList() {
        await this.page.locator(this.quickLaunchLeaveList).click();
    }

    async clickTimesheets() {
        await this.page.locator(this.quickLaunchTimesheets).click();
    }

    async clickApplyLeave() {
        await this.page.locator(this.quickLaunchApplyLeave).click();
    }

    async clickMyLeave() {
        await this.page.locator(this.quickLaunchMyLeave).click();
    }

    async clickMyTimesheet() {
        await this.page.locator(this.quickLaunchMyTimesheet).click();
    }
}
