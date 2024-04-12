import { Page } from "@playwright/test"
import { DetailsLocators } from "../locators/detailslocators.ui";

export class DetailsMethods {
    readonly detailslocators: DetailsLocators;

    constructor(page: Page) {
        this.detailslocators = new DetailsLocators(page);
    }

    async ClickOnFstName() {
        await this.detailslocators.firstname.fill('Roja');
    }

    async clickonlastname() {
        await this.detailslocators.lastname.fill('Dasari');
    }

    async Clickonemail() {
        await this.detailslocators.email.fill('rojaroja@gmail.com');
    }

    async Clickonconfirmemail() {
        await this.detailslocators.confirmemail.fill('rojaroja@gmail.com');
    }

    async Clickonphonenumber() {
        await this.detailslocators.contactumber.fill('8956457867');
    }

    async Clickonskype() {
        await this.detailslocators.skype.click();
    }

    async ClickonPhone() {
        await this.detailslocators.clickphone.click();
    }

    async Clickonnumberbtn() {
        await this.detailslocators.methodofcontact.click();
    }

    async Clickonmethodofcontact() {
        await this.detailslocators.methodofcontact.fill('8686866699');
    }

    async Clickonhearabout() {
        await this.detailslocators.hear.click();
    }

    async Clickonasearchengin() {
        await this.detailslocators.searchenginebtn.click();
    }

    async Clickonbox() {
        await this.detailslocators.productinterest.click();
    }

    async Clickoncomments() {
        await this.detailslocators.comments.fill('Right Comments here ');
    }

    async ClickonSentBtn() {
        await this.detailslocators.sent.click();
    }
}
