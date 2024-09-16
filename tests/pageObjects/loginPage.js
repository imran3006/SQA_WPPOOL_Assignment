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

    async login(email,pass){
        await this.userNameInput.fill(email)
        await this.passInput.fill(pass)
        // await this.page.waitForTimeout()
        await this.loginButton.click()
        
    }

    async gotoLoginPage(url) {
        await this.page.goto(url)
     }

}
export default LoginPage