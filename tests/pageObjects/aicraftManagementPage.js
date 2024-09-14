class AircraftManagementPage{
    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page){
        this.page = page
        this.provisionAircraftLinkLocator = page.locator('a[href="#/app/aircraft_provisioning"]') 
        this.companyDropdownLocator = page.locator('div[role="combobox"]')
        this.listLocator = page.locator('ul li')
    }

    async getCompanyNameFromList(company){
        for(var i = 1; i<= await this.listLocator.count();i++){
            const companayName = await this.listLocator.nth(i)
            const companyNameText = await companayName.textContent()
            console.log(companyNameText)
            if(companyNameText === company){
                return companyNameText
            }

        }
    }
    
  
}
export default AircraftManagementPage