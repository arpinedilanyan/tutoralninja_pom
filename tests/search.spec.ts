import { test, expect} from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';


test.describe('Search Test', () => {
    let searchPage: SearchPage;

    test.beforeEach(async ({ page }) => {
        searchPage = new SearchPage(page); // assign to outer variable
        await searchPage.goToHomePage(); // await async navigation
    });

    const searchTerms = ['mac', 'iphone'];

    for (let term of searchTerms) {
        test(`Search for ${term}`, async ({ page }) => {
            await searchPage.fillSearchInput(term); // await async methods
            await searchPage.clickSearchButton();
            await searchPage.checkSearchItems(term);

            
        });
    }
});

