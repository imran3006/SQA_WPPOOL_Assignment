import {expect, test} from "@playwright/test"
import axios from 'axios';
import fs from 'fs'
import { faker } from '@faker-js/faker';
import testConfig from "../../../testConfig"
import LoginPage from "../../pageObjects/loginPage"
import { TIMEOUT } from "dns";

const randomAvatarUrl = faker.image.avatar();
// const filePath = path.join(__dirname, '../../testData/companyPicture/avatar.png')


test.describe('Access control Management',async()=>{


// const randomfirstName = faker.person.firstName()
// const randomMiddleName = faker.person.middleName()
// const randomLastName = faker.person.lastName()
// const randomEmail = faker.internet.email()
// const phoneNumber = common.randomNumberGenerator(10000000000, 99999999999).toString()
// const street = faker.location.street()
// const city = faker.location.city()
// const state = faker.location.state()
// const zipCode = faker.location.zipCode()
// const country = faker.location.country()
// const password = common.randomPasswordGenerator()
// const randomGroupName = faker.person.middleName()
// const randomDescription = faker.lorem.lines(2)
// const randomCompanyName = faker.company.name()
// const randomAvator = faker.image.avatar()






  test.only('Verify that a new user can be added to the AeroSphere View and can login with newly created user', async ({ page }) => {


   
    const loginPage = new LoginPage(page)
    
    // const userListPage= new UserListPage(page)
    // const dashboardPage = new DashboardPage(page)
    await loginPage.gotoLoginPage(`${testConfig.baseURL}`)
    await loginPage.login(testConfig.userEmail,testConfig.userPassword)

  })
 
})

