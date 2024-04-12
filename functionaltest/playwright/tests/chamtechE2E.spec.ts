import { test } from "@playwright/test";
import { CookiesMethods } from "../components/methods/cookiesmethods.ui";
import { DetailsMethods } from "../components/methods/detailsmethods.ui";
import { HomeMethods } from "../components/methods/homemethods.ui";
import { ProductMethods } from "../components/methods/productmethods.ui";

test.only('Navigate to champion sports', async ({ page }) => {
    await page.goto('https://www.championsports.net/home?lang=en');

    const cookiesmethods = new CookiesMethods(page)
    await cookiesmethods.ClickonIagree();

    const homemethods = new HomeMethods(page);
    await homemethods.ClickonLogo();
    await homemethods.ClickonAboutUsBtn();
    await homemethods.ClickonWhyChamSports();
    await homemethods.ClickonLogo();
    await homemethods.ClickonSportsBook();

    const productmethods = new ProductMethods(page);
    await productmethods.ClickOnDemoBtn();
    await page.waitForLoadState();
    await page.waitForTimeout(30000);

    const detailsmethods = new DetailsMethods(page);
    await detailsmethods.ClickOnFstName();
    await detailsmethods.clickonlastname();
    await detailsmethods.Clickonemail();
    await detailsmethods.Clickonconfirmemail();
    await detailsmethods.Clickonphonenumber();
    await detailsmethods.Clickonskype();
    await detailsmethods.ClickonPhone();
    await detailsmethods.Clickonnumberbtn();
    await detailsmethods.Clickonmethodofcontact();
    await detailsmethods.Clickonhearabout();
    await detailsmethods.Clickonasearchengin();
    await detailsmethods.Clickonbox();
    await detailsmethods.Clickoncomments();
    await detailsmethods.ClickonSentBtn();
    await page.waitForTimeout(5000);
});

