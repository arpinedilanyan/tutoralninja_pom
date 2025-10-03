  test('PC Test', async ({ page }) => {
        await page.getByRole('link', { name: 'Desktops', exact: true }).click();

        await page.getByRole('link', { name: 'PC (0)' }).click();
        await expect(page.getByRole('heading', { name: 'PC' })).toBeVisible();
        await expect(page).toHaveTitle('PC');

        await page.getByRole('link', { name: 'Continue' }).click();
        await expect(page).toHaveTitle('Your Store');
        await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');

    });
