class DashboardPage{
    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page){
        this.page = page
       
        this.pluginLinkLocator = page.locator('a[href="plugins.php"]').nth(0)     
        this.loginButton = page.locator('input[type="submit"]')
        this.searchFieldLocator = page.locator('input[type = "search"]')
        this.noPluginsFoundTextLocator = page.locator('.no-items')
        this.addPluginLinkLocator = page.locator('.page-title-action')
        this.installWPDarkModeLinkLocator = page.locator('a[data-slug="wp-dark-mode"]')  
        this.activateWPDarkModeLinkLocator = page.locator('#activate-wp-dark-mode') 
        this.deactivateWPDarkModeLinkLocator = page.locator('.wp-dark-mode-deactivate-link').nth(0) 
        this.wpDarkModeLinkLocator = page.locator('a[href="admin.php?page=wp-dark-mode"]').nth(0)
        this.controlDropdownMenuLocator= page.locator('flex items-center justify-between cursor-pointer').nth(0)
        this.adminPanelDarkModeLocator = page.locator('a[href="#/admin"]')
        this.enableAdminPaneltoggleBtnLocator = page.locator('div.relative.w-10.h-full.rounded-full').nth(0)
        this.submitBtnLocator = page.locator('button.bg-blue-500')
        this.adminDashboardLocator = page.locator('a[href="index.php"]')  
        this.wpCustomizationDropdownLocator = page.locator('.flex items-center justify-between cursor-pointer').nth(1)
        this.switchSettingsLinkLocator = page.locator('a[href="#/switch"]')
        this.floatingSwitchLocator = page.locator('wp-dark-mode-switch-3')
        this.floatingSwitchSize = page.locator('#02keyhwv7')
        this.floatingSwitchPosition = page.locator('.cursor-pointer flex items-center').nth(6)
        this.advancedDropdownLocator = page.locator('.text-base leading-6 wp-dark-mode-white').nth(2)
        this.accessibilityLinkLocator = page.locator('a[href="#/accessibility"]')
        this.keyboardShortcutToggle = page.locator('div.bg-blue-600')
        this.siteAnimationLinkLocator = page.locator('a[href="#/animation"]')
        this.pageTransitionEnableToggleLocator = page.locator('div.bg-slate-200')
        this.flipAnimationSelectLocator = page.locator('div.flex span:has-text("Flip")')
        // this.countrySelectionLocator = page.locator('ul li').getByText('Bangladesh')


         
        // a[href="http://localhost/wordpress-6.6.2/wordpress/wp-admin/update.php?action=install-plugin&plugin=wp-dark-mode&_wpnonce=cccc7ab922"]     
    }

    async searchInstalledPlugin(plugin){
        await this.searchFieldLocator.fill(plugin)  
        await this.searchFieldLocator.press('Enter')
    }


}
export default DashboardPage