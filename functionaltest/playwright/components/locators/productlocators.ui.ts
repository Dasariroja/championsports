import { Locator, Page } from "@playwright/test"
export class Productlocators {
    readonly demobtn: Locator;

    constructor(page: Page) {
        this.demobtn = page.locator('.txt_btn').first();
    }
}