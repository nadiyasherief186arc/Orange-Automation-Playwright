import { Page } from '@playwright/test';
import { TestData } from '../TestData/testdata';

export class MyInfoPage {
    constructor(private page: Page) {}

    // Sub-Navigation Tabs
    tabPersonalDetails = TestData.myInfoTabPersonalDetails;
    tabContactDetails = TestData.myInfoTabContactDetails;
    tabEmergencyContacts = TestData.myInfoTabEmergencyContacts;
    tabDependents = TestData.myInfoTabDependents;
    tabJob = TestData.myInfoTabJob;

    // Personal Details Form Fields
    firstNameInput = TestData.myInfoFirstNameInput;
    middleNameInput = TestData.myInfoMiddleNameInput;
    lastNameInput = TestData.myInfoLastNameInput;
    nicknameInput = TestData.myInfoNicknameInput;
    saveButton = TestData.myInfoSaveButton;
    successToast = TestData.myInfoSuccessToast;
    requiredError = TestData.myInfoRequiredError;

    // Sub-Navigation Actions
    async clickPersonalDetailsTab() {
        await this.page.locator(this.tabPersonalDetails).click();
    }

    async clickContactDetailsTab() {
        await this.page.locator(this.tabContactDetails).click();
    }

    async clickEmergencyContactsTab() {
        await this.page.locator(this.tabEmergencyContacts).click();
    }

    // Personal Details Form Actions
    async getFirstName(): Promise<string> {
        return await this.page.locator(this.firstNameInput).inputValue();
    }

    async getLastName(): Promise<string> {
        return await this.page.locator(this.lastNameInput).inputValue();
    }

    async fillFirstName(name: string) {
        await this.page.locator(this.firstNameInput).fill(name);
    }

    async fillMiddleName(name: string) {
        await this.page.locator(this.middleNameInput).fill(name);
    }

    async fillLastName(name: string) {
        await this.page.locator(this.lastNameInput).fill(name);
    }

    async clearFirstName() {
        await this.page.locator(this.firstNameInput).fill('');
    }

    async clickSave() {
        await this.page.locator(this.saveButton).first().click();
    }
}
