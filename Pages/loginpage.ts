import { Page } from '@playwright/test';
import { TestData } from '../TestData/testdata';

export class LoginPage {
    constructor(private page: Page) {}

    // Locators
    usernameInput = TestData.usernameInput;
    passwordInput = TestData.passwordInput;
    loginButton = TestData.loginButton;
    errorMessage = TestData.errorMessage;
    requiredError = TestData.requiredError;
    dashboardHeader = TestData.dashboardHeader;

    // Enter Username
    async enterUsername(username: string) {
        await this.page.locator(this.usernameInput).waitFor({ state: 'visible' });
        await this.page.locator(this.usernameInput).fill(username);
    }

    // Enter Password
    async enterPassword(password: string) {
        await this.page.locator(this.passwordInput).fill(password);
    }

    // Click Login Button
    async clickLogin() {
        await this.page.locator(this.loginButton).click();
    }

    // Combined Login Action
    async login(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}
