import { Page } from '@playwright/test';
import { TestData } from '../TestData/testdata';

export class NavigationPage {
    constructor(private page: Page) {}

    // 12 Sidebar Menu Locators
    menuAdmin = TestData.menuAdmin;
    menuPim = TestData.menuPim;
    menuLeave = TestData.menuLeave;
    menuTime = TestData.menuTime;
    menuRecruitment = TestData.menuRecruitment;
    menuMyInfo = TestData.menuMyInfo;
    menuPerformance = TestData.menuPerformance;
    menuDashboard = TestData.menuDashboard;
    menuDirectory = TestData.menuDirectory;
    menuMaintenance = TestData.menuMaintenance;
    menuClaim = TestData.menuClaim;
    menuBuzz = TestData.menuBuzz;

    // Common Page Header Locator
    pageHeader = TestData.pageHeader;

    // Navigation Methods for All 12 Modules
    async clickAdmin() {
        await this.page.locator(this.menuAdmin).click();
    }

    async clickPIM() {
        await this.page.locator(this.menuPim).click();
    }

    async clickLeave() {
        await this.page.locator(this.menuLeave).click();
    }

    async clickTime() {
        await this.page.locator(this.menuTime).click();
    }

    async clickRecruitment() {
        await this.page.locator(this.menuRecruitment).click();
    }

    async clickMyInfo() {
        await this.page.locator(this.menuMyInfo).click();
    }

    async clickPerformance() {
        await this.page.locator(this.menuPerformance).click();
    }

    async clickDashboard() {
        await this.page.locator(this.menuDashboard).click();
    }

    async clickDirectory() {
        await this.page.locator(this.menuDirectory).click();
    }

    async clickMaintenance() {
        await this.page.locator(this.menuMaintenance).click();
    }

    async clickClaim() {
        await this.page.locator(this.menuClaim).click();
    }

    async clickBuzz() {
        await this.page.locator(this.menuBuzz).click();
    }

    // Helper to get text from page header
    async getHeaderText(): Promise<string> {
        return (await this.page.locator(this.pageHeader).innerText()).trim();
    }
}
