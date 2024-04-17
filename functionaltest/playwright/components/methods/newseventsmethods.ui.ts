import { Page } from "@playwright/test"
import { NewsEventsLocators } from "../locators/newseventslocators.ui"

export class NewsEventsMethos {
    readonly newseventslocators: NewsEventsLocators;

    constructor(page: Page) {
        this.newseventslocators = new NewsEventsLocators(page);
    }

    async clickOnNewsBtn() {
        await this.newseventslocators.newsevents.click();
    }

    async clickOnNobleArgueBtn() {
        await this.newseventslocators.nobleargues.click();
    }

    async clickOnIceLondonBtn() {
        await this.newseventslocators.icelondon.click();
    }

    async clickOnSwipeBtn() {
        const swipeBtn = await this.newseventslocators.swipebtn;
        if (!swipeBtn) {
            console.error('Swipe button not found');
            return;
        }
        for (let i = 0; i < 4; i++) {
            await swipeBtn.click();
        }
    }
}
