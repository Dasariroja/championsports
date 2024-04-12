import { Page } from "@playwright/test"
import { HomeLocators } from "../locators/homelocators.ui";

export class HomeMethods {
    readonly homelocators: HomeLocators;

    constructor(page: Page) {
        this.homelocators = new HomeLocators(page);
    }
    async ClickonLogo() {
        await this.homelocators.logo.click();
    }
    async ClickonAboutUsBtn() {
        await this.homelocators.aboutus.click();
    }
    async ClickonWhyChamSports() {
        await this.homelocators.whychamsports.click();
    }
    async ClickonSportsBook() {
        await this.homelocators.sportsbookbtn.click();
    }
}
