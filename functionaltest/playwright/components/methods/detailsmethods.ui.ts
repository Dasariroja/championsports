import { Page } from "@playwright/test"
import { DetailsLocators } from "../locators/detailslocators.ui";

export class DetailsMethods {
    readonly detailslocators: DetailsLocators;

    constructor(page: Page) {
        this.detailslocators = new DetailsLocators(page);
    }

    async clickOnFirstName() {
        await this.detailslocators.firstname.fill('Roja');
    }

    async clickOnLastName() {
        await this.detailslocators.lastname.fill('Dasari');
    }

    async clickOnEmail() {
        await this.detailslocators.email.fill('rojaroja@gmail.com');
    }

    async clickOnConfirmEmail() {
        await this.detailslocators.confirmemail.fill('rojaroja@gmail.com');
    }

    async clickOnPhoneNumber() {
        await this.detailslocators.contactumber.fill('8956457867');
    }

    async clickOnSkype() {
        await this.detailslocators.skype.click();
    }

    async clickOnPhone() {
        await this.detailslocators.clickphone.click();
    }

    async clickOnNumberBtn() {
        await this.detailslocators.methodofcontact.click();
    }

    async clickOnMethodofContact() {
        await this.detailslocators.methodofcontact.fill('8686866699');
    }

    async clickOnHearabout() {
        await this.detailslocators.hear.click();
    }

    async clickOnaSearchengin() {
        await this.detailslocators.searchenginebtn.click();
    }

    async clickOnBox() {
        await this.detailslocators.productinterest.click();
    }

    async clickOnComments() {
        await this.detailslocators.comments.fill('Right Comments here ');
    }

    async clickonSentBtn() {
        await this.detailslocators.sent.click();
    }
    
    async clickOnCloseBtn()
    {
        await this.detailslocators.closebtn.click();
    }
}
