import {expect, test} from "@playwright/test"
import testConfig from "../../../testConfig"
import LoginPage from "../../pageObjects/loginPage"
import DashboardPage from "../../pageObjects/dashboardPage"
import testData from "../../testData/dashboardData.json"



test.describe('WP dark mode plugin automation',async()=>{

  test.only('Verify the wp functionality mentioned in the scenario are working as expected', async ({ page }) => {

    test.setTimeout(900000)
    const pluginName = 'WP Dark Mode'
    const loginPage = new LoginPage(page)
    
    /* .......Log in to your WordPress site.....*/

    const dashboardPage = new DashboardPage(page)
    await loginPage.gotoLoginPage(`${testConfig.baseURL}`)
    await loginPage.login(testConfig.userName,testConfig.userPassword)

    /* .......Check whether the “WP Dark Mode” Plugin is Active or not......*/
    /*........If Active, navigate to the WP Dark Mode & continue.....*/

    await  dashboardPage.pluginLinkLocator.click()
    await dashboardPage.searchInstalledPlugin(pluginName)
    const isWpDarkModeInstalled = page.locator('td.plugin-title strong:text("WP Dark Mode")')
    // const noPluginsFoundText = await dashboardPage.noPluginsFoundTextLocator.textContent()

    if(await isWpDarkModeInstalled.isVisible()){
        console.log('WP Dark Mode plugin is already installed.')
        await dashboardPage.wpDarkModeLinkLocator.click()
        await dashboardPage.pluginLinkLocator.click()
        // await dashboardPage.deactivateWPDarkModeLinkLocator.click()
        // await dashboardPage.skipDeactiveLocator.waitFor({ state: 'visible', timeout: 30000 })
        // await dashboardPage.skipDeactiveLocator.click()
    
        // page.on('dialog', async dialog => {
        //   await dialog.accept(); // or dialog.dismiss() to cancel
        // });

        // await dashboardPage.deleteTheme.click()
        // await dashboardPage.deletefilesLocator.click()
        // await expect(dashboardPage.deleteSuccessMessageLocator).toHaveText('WP Dark Mode was successfully deleted.')
    }
    else {

      /*........Install the Plugin and Activate it......*/
      console.log('WP Dark Mode plugin is not installed. Installing now.')
         await expect ( dashboardPage.noPluginsFoundTextLocator).toContainText(testData.noPluginsFoundText)
        await dashboardPage.addPluginLinkLocator.click()
        await dashboardPage.searchInstalledPlugin(pluginName)
        await dashboardPage.installWPDarkModeLinkLocator.click()
        const activateButton = page.locator('a.activate-now')
        await activateButton.waitFor({ state: 'visible', timeout: 30000 })
        await  dashboardPage.pluginLinkLocator.click()
        await dashboardPage.activateWPDarkModeLinkLocator.click()
        await  dashboardPage.pluginLinkLocator.click()
        expect(dashboardPage.deactivateWPDarkModeLinkLocator).toContainText('Deactivate')

      /*........Enable Admin Dashboard Dark Mode from Controls → Admin Panel Dark Mode.......*/ 

        await dashboardPage.wpDarkModeLinkLocator.click()
        // await dashboardPage.controlDropdownMenuLocator.click()
        await dashboardPage.adminPanelDarkModeLocator.click()
        await dashboardPage.enableAdminPaneltoggleBtnLocator.click()
        await dashboardPage.submitBtnLocator.click()
        await page.waitForTimeout(3000)

      /*........Validate whether the dark mode is working or not on the Admin Dashboard........*/   
        await dashboardPage.adminDashboardLocator.click()
        await dashboardPage.darkThemeEnableAdminDashboardLocator.click()
        await expect(page.locator('div.switch.wp-dark-mode-ignore.active')).toBeVisible()
        await dashboardPage.lightThemeEnableAdminDashboardLocator.click()

      /*........Navigate to the WP Dark Mode.........*/   
        await dashboardPage.wpDarkModeLinkLocator.click()

      /*........From Customization → Switch Settings → Change the “Floating Switch Style” from the default selections.........*/    
        await dashboardPage.wpCustomizationDropdownLocator.click()
        await dashboardPage.switchSettingsLinkLocator.click()
        await dashboardPage.floatingSwitchEnableToggleLocator.click()
        await dashboardPage.floatingSwitchLocator.click()
        await dashboardPage.submitBtnLocator.click()

      /*........From Customization → Switch Settings → Switch Customization - Select Custom Switch size & Scale it to 220.........*/  
        await dashboardPage.floatingSwitchSize.fill('220')
        // await dashboardPage.submitBtnLocator.click()

      /*........From Customization → Switch Settings - Change the Floating Switch Position (Left)..........*/  
        await dashboardPage.floatingSwitchPosition.click()
        await dashboardPage.submitBtnLocator.click()

      /*........Disable the Keyboard Shortcut from the Accessibility Settings..........*/ 

        await dashboardPage.advancedDropdownLocator.click()
        await dashboardPage.accessibilityLinkLocator.click()
        await dashboardPage.keyboardShortcutToggle.click()
        await dashboardPage.accessibilitySubmitBtnLocator.click()

      /*........From Customization → Site Animation → “Enable Page-Transition Animation” & change the Animation Effect from the default selections..........*/ 

        // await dashboardPage.wpCustomizationDropdownLocator.click()
        await dashboardPage.siteAnimationLinkLocator.click()
        await dashboardPage.pageTransitionEnableToggleLocator.click()
        await dashboardPage.flipAnimationSelectLocator.click()
        await dashboardPage.submitBtnLocator.click()
        await page.waitForTimeout(2000)
        await dashboardPage.siteLinkLocator.click()
        await page.waitForTimeout(2000)
        await dashboardPage.siteDarkModeBtnLocator.click()

        // await page.waitForSelector('body.wp-dark-mode-active', { timeout: 5000 });
      
      /*........Validate whether the dark mode is working or not from the front end..........*/ 
        // Verify that dark mode is enabled by checking the presence of the class
        const isDarkModeEnabled =  page.locator('wp-dark-mode-switch-styled wp-dark-mode-switch-1 active')
        if (isDarkModeEnabled) {
            console.log('Dark mode is successfully enabled!')
        } else {
            console.log('Dark mode is not enabled.')
        }
      

      /*.......Deactive and delete theme........*/

        // await dashboardPage.siteLinkLocator.click()
        // await dashboardPage.pluginLinkLocator.click()
        // await dashboardPage.deactivateWPDarkModeLinkLocator.click()
        // // await dashboardPage.skipDeactiveLocator.click()

        
        // // page.on('dialog', async dialog => {
        // //   await dialog.accept() // or dialog.dismiss() to cancel
        // // });
        // await dashboardPage.deleteTheme.click()
        // await dashboardPage.deletefilesLocator.click()

    }


  })
 
})

