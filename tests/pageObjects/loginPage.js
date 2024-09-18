class LoginPage{
    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page){
        this.page = page
        this.userNameInput = page.locator('input[id="user_login"]')
        this.passInput = page.locator('input[id="user_pass"]')
        this.loginButton = page.locator('input[type="submit"]')
        
    }

    async login(userName,pass){
        await this.userNameInput.fill(userName)
        await this.passInput.fill(pass)
        // await this.page.waitForTimeout()
        await this.loginButton.click()
        
    }

    async gotoLoginPage(url) {
        await this.page.goto(url)
     }

}
export default LoginPage