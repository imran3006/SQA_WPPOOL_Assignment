import {test,expect} from "@playwright/test"
import LoginPage from "../tests/pageObjects/loginPage";
import { STORAGE_STATE } from "../playwright.config";
import testConfig from "../testConfig";
import DashboardPage from "../tests/pageObjects/dashboardPage";
import fs from 'fs'


test('Before starting, Store the Login Session',async({page})=>{
const loginPage = new LoginPage(page)
const dashboardPage = new DashboardPage(page)
await loginPage.gotoLoginPage(`${testConfig.baseURL}#/login/`)
await loginPage.login(testConfig.userEmail,testConfig.userPassword)
await expect(dashboardPage.dashboardTitleselector).toContainText('Dashboard')
await page.context().storageState({
    path: STORAGE_STATE
  })
})