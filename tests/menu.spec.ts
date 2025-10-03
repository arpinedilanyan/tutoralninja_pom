import { test, expect } from '@playwright/test';
import { MenuPage } from '../pages/MenuPage';

test.describe('Menu Test', () => {
    let menuPage: MenuPage;

    test.beforeEach(async ({ page }) => {
        menuPage = new MenuPage(page);
        await menuPage.goto();

    });

    test("Desktop PC(0)", async ({ page }) => {
        await menuPage.openSubMenu('Desktops', 'PC (0)');
        await menuPage.checkCurrentPageHeading('PC');

        await menuPage.clcikContinueButton();
        await menuPage.checkCurrentPage('Your Store', 'https://tutorialsninja.com/demo/index.php?route=common/home');


    });

    test('Desktop Mac(1)', async({ page })=> {
        await menuPage.openSubMenu('Desktops', 'Mac (1)');
        await menuPage.checkCurrentPageHeading('Mac');
        await menuPage.checkCurrentPage('Mac', 'https://tutorialsninja.com/demo/index.php?route=product/category&path=20_27');


    });

});
