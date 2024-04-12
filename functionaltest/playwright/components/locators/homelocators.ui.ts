import { Locator, Page } from "@playwright/test"

export class HomeLocators {
readonly sportsbookbtn : Locator;
readonly logo: Locator;
readonly aboutus: Locator;
readonly whychamsports: Locator;
constructor(page:Page){
    this.logo = page.locator('img').first();
    this.aboutus = page.getByText('about us').first();
    this.whychamsports = page.getByText('why champion sports').first();
    this.sportsbookbtn = page.locator('.btn_list').first();
}
}