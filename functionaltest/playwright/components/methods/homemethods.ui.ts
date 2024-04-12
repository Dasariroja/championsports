import { Page } from "@playwright/test"
import { HomeLocators } from "../locators/homelocators.ui";

export class HomeMethods {
    readonly homelocators: HomeLocators;

    constructor(page: Page) {
        this.homelocators = new HomeLocators(page);
    }

    async clickonLogo() {
        await this.homelocators.logo.click();
    }

    async clickonAboutUsBtn() {
        await this.homelocators.aboutus.click();
    }

    async clickonWhyChamSports() {
        await this.homelocators.whychamsports.click();
    }

    async clickonSportsBook() {
        await this.homelocators.sportsbookbtn.click();
    }
}
