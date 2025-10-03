import { expect, Locator, Page, test } from '@playwright/test';
import { BASE_URL } from '../utils/constants';

export class MenuPage {
    readonly page: Page;
    readonly contiueButton: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.contiueButton = this.page.getByRole('link', { name: 'Continue' });
    }

    async goto(): Promise<void> {
        await this.page.goto(BASE_URL);
        await expect(this.page).toHaveURL(/route=common\/home/);
        await expect(this.page).toHaveTitle('Your Store');
    }

    async openTopMenuByText(menuName: string): Promise<void> {
        // Implement the logic to open the top menu by text here
    }

    async openSubMenu(menuName: string, subMenuName: string): Promise<void> {
        // Implement the logic to open the submenu by text here
        await this.page.getByRole('link', { name: menuName }).click();
        await this.page.getByRole('link', { name: subMenuName }).click();

    }

    async clcikContinueButton(): Promise<void> {
        await this.contiueButton.click();

    }
    async checkCurrentPageHeading(heading: string): Promise<void> {
        await expect(this.page.getByRole('heading', { name: heading , exact: true})).toBeVisible();

    }
    async checkCurrentPage(title:string, url:string): Promise<void>{
         await expect(this.page).toHaveTitle(title);
        await expect(this.page).toHaveURL(url);
    }


    }

