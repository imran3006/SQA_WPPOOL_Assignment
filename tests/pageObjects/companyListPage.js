class CompanyListPage{
    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page){
        this.page = page
        this.addCompanyBtn = page.locator('a[href = "#/app/company/add"]')
        this.comapanyNameFieldLocator = page.locator('input[placeholder = "Enter Company Name" ]')
        this.contactPersonFieldLocator = page.locator('input[placeholder = "Enter Contact Person Name" ]')
        this.emailFieldLocator = page.locator('input[placeholder = "Enter a valid email Address" ]')
        this.countryFieldLocator = page.locator('#mui-component-select-country')
        this.countrySelectionLocator = page.locator('ul li').getByText('Bangladesh')
        this.createGroupButtonLocator = page.locator('button[type ="submit"]')
        this.listOfCompaniesTextLocator = page.locator(`h6.MuiTypography-root MuiTypography-h6`)
        this.tableDataLocator = page.locator('table tr td')
        this.paginationDropdownLocator = page.locator('div[role="combobox"]')
        this.paginationRowLocator = page.locator('li[data-value="50"]')
        this.companyPictureUploadLocator = page.locator('input[type = "file"]')
        

        

        
    }

    

    async createCompany( companyName,email,contactPersonName){
        await this.addCompanyBtn.click()
        // await this.companyPictureUploadLocator.setInputFiles(companyPicture)
        await this.comapanyNameFieldLocator.fill(companyName)
        await this.emailFieldLocator.fill(email)
        await this.contactPersonFieldLocator.fill(contactPersonName)
        await this.countryFieldLocator.click()
        await this.countrySelectionLocator.click()
        await this.createGroupButtonLocator.click()

    }
    

    async getCompanyMailFromList(randomMail){
        for (var i =1; i< await this.tableDataLocator.count(); i++ ){
            const emailLocator = this.tableDataLocator.nth(i);
            const emailText = await emailLocator.textContent();
            // console.log(emailText)
            if (emailText.trim() === randomMail){
                return emailText
                
            }
            
        }   

        
    
    }
    async extendedCompanyRowsPerPage(){
        await this.paginationDropdownLocator.click()
        await this.paginationRowLocator.click()
    } 
    
  
}
export default CompanyListPage