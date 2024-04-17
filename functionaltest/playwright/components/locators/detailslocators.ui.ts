import { Locator, Page } from "@playwright/test"
export class DetailsLocators {
    readonly firstname: Locator;
    readonly lastname: Locator;
    readonly email: Locator;
    readonly confirmemail: Locator;
    readonly contactumber: Locator;
    readonly skype: Locator;
    readonly clickphone: Locator;
    readonly clickonnumber: Locator;
    readonly methodofcontact: Locator;
    readonly hear: Locator;
    readonly searchenginebtn: Locator;
    readonly productinterest: Locator;
    readonly comments: Locator;
    readonly sent: Locator;
    readonly closebtn: Locator;

    constructor(page: Page) {
        this.firstname = page.getByPlaceholder('First Name');
        this.lastname = page.getByPlaceholder('Last Name');
        this.email = page.getByPlaceholder('Email Address……', { exact: true });
        this.confirmemail = page.getByPlaceholder('Confirm Email Address……');
        this.contactumber = page.getByPlaceholder('Phone Number……');
        this.skype = page.locator('span').filter({ hasText: 'Skype' });
        this.clickphone = page.getByText('Phone');
        this.methodofcontact = page.getByPlaceholder('ID or numbers……');
        this.hear = page.getByText('How Did You Hear About');
        this.searchenginebtn = page.getByText('Search Engine');
        this.productinterest = page.getByLabel('Sportsbook');
        this.comments = page.getByPlaceholder('Please leave your comments...');
        this.sent = page.getByText('send');
        this.closebtn = page.locator('a').first();
    }
}