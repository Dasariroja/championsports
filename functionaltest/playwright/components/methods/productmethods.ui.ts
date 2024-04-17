import { Page } from "@playwright/test"
import { Productlocators } from "../locators/productlocators.ui";
export class ProductMethods {
    readonly productlocators: Productlocators;

    constructor(page: Page) {
        this.productlocators = new Productlocators(page);
    }

    async clickOnDemoBtn() {
        await this.productlocators.demobtn.click();
    }
}
