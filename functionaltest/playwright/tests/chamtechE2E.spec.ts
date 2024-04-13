import { test } from "@playwright/test";
import { CookiesMethods } from "../components/methods/cookiesmethods.ui";
import { DetailsMethods } from "../components/methods/detailsmethods.ui";
import { HomeMethods } from "../components/methods/homemethods.ui";
import { ProductMethods } from "../components/methods/productmethods.ui";

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

