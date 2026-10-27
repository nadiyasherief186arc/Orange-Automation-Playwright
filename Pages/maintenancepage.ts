import { Page } from '@playwright/test';
import { TestData } from '../TestData/testdata';

export class MaintenancePage {
    constructor(private page: Page) {}

    // Maintenance Page Locators
    passwordInput = TestData.maintenancePasswordInput;
    confirmButton = TestData.maintenanceConfirmButton;
    cancelButton = TestData.maintenanceCancelButton;
    promptHeader = TestData.maintenancePromptHeader;

    // Enter Admin Password
    async enterPassword(password: string) {
        await this.page.locator(this.passwordInput).fill(password);
    }

    // Click Confirm
    async clickConfirm() {
        await this.page.locator(this.confirmButton).click();
    }

    // Click Cancel
    async clickCancel() {
        await this.page.locator(this.cancelButton).click();
    }
}
