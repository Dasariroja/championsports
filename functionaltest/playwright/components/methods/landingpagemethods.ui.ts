import { Page } from "@playwright/test"
import { LandingPageLocators } from "../locators/landingpagelocators.ui";

export class LandingPagemethods {
    readonly landingpagelocators: LandingPageLocators;

    constructor(page: Page) {
        this.landingpagelocators = new LandingPageLocators(page);
    }

    async printFirstTitle() {
        const firstTitle = await this.landingpagelocators.landingtext1.innerText();
        console.log(firstTitle);
    }

    async printSecondTitle() {
       const SecondTitle = await this.landingpagelocators.text2.innerText();
       console.log(SecondTitle);
    }

    async printTirdTitle() {
       const ThirdTitle = await this.landingpagelocators.text3.innerText();
       console.log(ThirdTitle);
    }

    async printSportsTitle() {
       const SportsTitle = await this.landingpagelocators.titlespf.innerText();
       console.log(SportsTitle);
    }

    async printWhyChampionsTitle() {
       const WhyChampions =  await this.landingpagelocators.titlewcs1.innerText();
       console.log(WhyChampions);
    }

    async printNewsTitle() {
        const PrintNews = await this.landingpagelocators.titlenw2.innerText();
        console.log(PrintNews);
    }
}