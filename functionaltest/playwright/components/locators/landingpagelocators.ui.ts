import { Locator, Page } from "@playwright/test"
export class LandingPageLocators {
    readonly landingtext1: Locator;
    readonly text2: Locator;
    readonly text3: Locator;
    readonly titlespf: Locator;
    readonly titlewcs1: Locator;
    readonly titlenw2: Locator;

    constructor(page: Page) {
        this.landingtext1 = page.getByText('Reliable gaming solutions');
        this.text2 = page.getByText('Fully Customisable |');
        this.text3 = page.getByText('The premier solution for you');
        this.titlespf = page.getByText('Sportsbook features');
        this.titlewcs1 = page.getByText('Why Champion Sports', { exact: true });
        this.titlenw2 = page.getByText('News & Events', { exact: true });
    }
}