import { test } from "@playwright/test";
import { CookiesMethods } from "../components/methods/cookiesmethods.ui";
import { DetailsMethods } from "../components/methods/detailsmethods.ui";
import { HomeMethods } from "../components/methods/homemethods.ui";
import { LandingPagemethods } from "../components/methods/landingpagemethods.ui";
import { NewsEventsMethos } from "../components/methods/newseventsmethods.ui";
import { ProductMethods } from "../components/methods/productmethods.ui";

test.describe('three tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.championsports.net/home?id=1&lang=en');

        const cookiesmethods = new CookiesMethods(page)
        await cookiesmethods.clickOnIAgree();
    });

    test('Navigate to champion sports', async ({ page }) => {
        await page.goto('https://www.championsports.net/home?lang=en');

        const cookiesmethods = new CookiesMethods(page)
        await cookiesmethods.clickOnIAgree();

        const homemethods = new HomeMethods(page);
        await homemethods.clickonLogo();
        await homemethods.clickonAboutUsBtn();
        await homemethods.clickonWhyChamSports();
        await homemethods.clickonLogo();
        await homemethods.clickonSportsBook();

        const productmethods = new ProductMethods(page);
        await productmethods.clickOnDemoBtn();
        await page.waitForLoadState();
        await page.waitForTimeout(40000);

        const detailsmethods = new DetailsMethods(page);
        await detailsmethods.clickOnFirstName();
        await detailsmethods.clickOnLastName();
        await detailsmethods.clickOnEmail();
        await detailsmethods.clickOnConfirmEmail();
        await detailsmethods.clickOnPhoneNumber();
        await detailsmethods.clickOnSkype();
        await detailsmethods.clickOnPhone();
        await detailsmethods.clickOnNumberBtn();
        await detailsmethods.clickOnMethodofContact();
        await detailsmethods.clickOnHearabout();
        await detailsmethods.clickOnaSearchengin();
        await detailsmethods.clickOnBox();
        await detailsmethods.clickOnComments();
        await detailsmethods.clickonSentBtn();
        await detailsmethods.clickOnCloseBtn();
    });

    test('Navigate to champion sports News1', async ({ page }) => {
        await page.goto('https://www.championsports.net/sportsbook?id=4&lang=en');

        const cookiesmethods = new CookiesMethods(page)
        await cookiesmethods.clickOnIAgree();

        const newseventsmethods = new NewsEventsMethos(page);
        await newseventsmethods.clickOnNewsBtn();
        await newseventsmethods.clickOnNobleArgueBtn();
        await newseventsmethods.clickOnIceLondonBtn();
        await newseventsmethods.clickOnSwipeBtn();
        // await page.waitForTimeout(5000);
    });

    test('Home Page', async ({ page }) => {
        const landingpagemethods = new LandingPagemethods(page);
        await landingpagemethods.printFirstTitle();
        await landingpagemethods.printSecondTitle();
        await landingpagemethods.printTirdTitle();
        await landingpagemethods.printSportsTitle();
        await landingpagemethods.printWhyChampionsTitle();
        await landingpagemethods.printNewsTitle();
        await page.waitForTimeout(5000);
    });

    test('Sample test Fossil', async ({ page }) => {
        await page.goto('https://www.fossil.com/en-gb/');
        await page.getByRole('button', { name: 'ACCEPT ALL' }).click();
        await page.getByRole('button', { name: 'ACCEPT ALL' }).click();
        await page.getByLabel('Women', { exact: true }).click();
    });
});