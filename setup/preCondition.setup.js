import {test,expect} from "@playwright/test"
import LoginPage from "../tests/pageObjects/loginPage"
import { STORAGE_STATE } from "../playwright.config"
import testConfig from "../testConfig"
import DashboardPage from "../tests/pageObjects/dashboardPage"



test('Before starting, Store the Login Session',async({page})=>{
const loginPage = new LoginPage(page)
const dashboardPage = new DashboardPage(page)
await loginPage.gotoLoginPage(`${testConfig.baseURL}#/login/`)
await loginPage.login(testConfig.userName,testConfig.userPassword)
await page.context().storageState({
    path: STORAGE_STATE
  })
})