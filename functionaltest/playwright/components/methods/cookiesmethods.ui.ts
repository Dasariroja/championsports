import { Page } from "@playwright/test"
import { CookiesLocators } from "../locators/cookieslocators.ui";

export class CookiesMethods {
    readonly cookieslocators: CookiesLocators;

    constructor(page: Page) {
        this.cookieslocators = new CookiesLocators(page);
    }
    async ClickonIagree() {
        await this.cookieslocators.agreebtn.click();
    }
    
}