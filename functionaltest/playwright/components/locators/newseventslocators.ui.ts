import { Locator, Page } from "@playwright/test"

export class NewsEventsLocators {
    readonly newsevents: Locator;
    readonly nobleargues: Locator;
    readonly icelondon: Locator;
    readonly swipebtn: Locator;

    constructor(page: Page) {
        this.newsevents = page.getByText('news & events', { exact: true });
        this.nobleargues = page.getByText('Noble argues markets like Nigeria can be just as lucrative as the US').first();
        this.icelondon = page.getByText('Champion Sports @ ICE London 2020');
        this.swipebtn = page.locator('.swiper-button-next');
    }
}