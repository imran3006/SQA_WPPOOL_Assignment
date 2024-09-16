import {expect, test} from "@playwright/test"
import axios from 'axios';
import fs from 'fs'
import { faker } from '@faker-js/faker';
import testConfig from "../../../testConfig"
import LoginPage from "../../pageObjects/loginPage"
import DashboardPage from "../../pageObjects/dashboardPage";
import testData from "../../testData/dashboardData.json"
import { TIMEOUT } from "dns";

const randomAvatarUrl = faker.image.avatar();
// const filePath = path.join(__dirname, '../../testData/companyPicture/avatar.png')


test.describe('',async()=>{

  test.only('Verify that a new user can be added to the AeroSphere View and can login with newly created user', async ({ page }) => {
    test.setTimeout(900000)
    const pluginName = 'WP Dark Mode'
    const loginPage = new LoginPage(page)
    
    // const userListPage= new UserListPage(page)
    const dashboardPage = new DashboardPage(page)
    await loginPage.gotoLoginPage(`${testConfig.baseURL}`)
    await loginPage.login(testConfig.userName,testConfig.userPassword)
    await  dashboardPage.pluginLinkLocator.click()
    await dashboardPage.searchInstalledPlugin(pluginName)
    // await page.waitForTimeout(3000)
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
    await dashboardPage.wpDarkModeLinkLocator.click()
    // await dashboardPage.controlDropdownMenuLocator.click()
    await dashboardPage.adminPanelDarkModeLocator.click()
    await dashboardPage.enableAdminPaneltoggleBtnLocator.click()
    await dashboardPage.submitBtnLocator.click()
    await dashboardPage.adminDashboardLocator.click()

  })
 
})

