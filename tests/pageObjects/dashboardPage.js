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
        this.accessibilitySubmitBtnLocator = page.locator('button.bg-blue-500').nth(1)
        this.adminDashboardLocator = page.locator('a[href="index.php"]').nth(0)  
        this.wpCustomizationDropdownLocator = page.locator('div.wp-dark-mode-admin-sidebar-nav-container h4:has-text("Customization")')
        this.switchSettingsLinkLocator = page.locator('a[href="#/switch"]')
        this.floatingSwitchEnableToggleLocator= page.locator('label.flex.sm\\:items-center div.relative.w-10.h-full').nth(0)
        this.floatingSwitchLocator = page.locator('div[tabindex="0"] div.wp-dark-mode-switch-1')
        this.floatingSwitchSize = page.locator('input[type="number"][placeholder="0"]')
        this.floatingSwitchPosition = page.locator('.bg-gray-100 >> text=Left')
        this.advancedDropdownLocator = page.locator('div.cursor-pointer:has-text("Advanced")')
        this.accessibilityLinkLocator = page.locator('a[href="#/accessibility"]').first()
        this.keyboardShortcutToggle = page.locator('div.bg-blue-600')
        this.siteAnimationLinkLocator = page.locator('a[href="#/animation"]')
        this.pageTransitionEnableToggleLocator = page.locator('div.bg-slate-200')
        this.flipAnimationSelectLocator = page.locator('div.flex span:has-text("Flip")')
        this.siteLinkLocator = page.locator('a[href="http://localhost/wordpress-6.6.2/wordpress/"]').nth(0)
        this.siteDarkModeBtnLocator = page.locator('div.wp-dark-mode-switch-styled')
        
        this.skipDeactiveLocator = page.locator('a[href*="plugins.php?action=deactivate"][class="dont-bother-me wd-dr-button-secondary"]')
        this.deleteTheme = page.locator('#delete-wp-dark-mode')
        this.deleteSuccessMessageLocator = page.locator('#wp-dark-mode-deleted')
        this.deletefilesLocator = page.locator('input#submit[type="submit"][value="Yes, delete these files"]')
        this.darkThemeEnableAdminDashboardLocator = page.locator('span.wp-dark-mode-ignore', { hasText: 'Dark' })
        this.lightThemeEnableAdminDashboardLocator = page.locator('span.wp-dark-mode-ignore', { hasText: 'Light' })
        
    }

    async searchInstalledPlugin(plugin){
        await this.searchFieldLocator.fill(plugin)  
        await this.searchFieldLocator.press('Enter')
    }


}
export default DashboardPage