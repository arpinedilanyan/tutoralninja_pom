import { expect, Locator, Page, test } from '@playwright/test';
import { BASE_URL } from '../utils/constants';


export class SearchPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    }
    async goToHomePage(): Promise<void> {
        await this.page.goto(BASE_URL);
        await expect(this.page).toHaveURL(/route=common\/home/);
        await expect(this.page).toHaveTitle('Your Store');
    }
   
    async fillSearchInput(searchItem : string) {
        await this.page.getByRole('textbox', { name: 'Search' }).click();
        await this.page.getByRole('textbox', { name: 'Search' }).fill(searchItem);
        await this.page.getByRole('textbox', { name: 'Search' }).press('Enter');

    }
    async clickSearchButton(){
        await this.page.getByRole('button', { name: '' }).click();

    }
    async checkSearchItems(searchItems : string){
        const products = await this.page.locator('.product-thumb .caption h4').allTextContents();
            console.log(products);
            for (let item of products) {
                expect(item.toLowerCase()).toContain(searchItems);


    }

}
}