

#  Plugin Automation


-----------------------------------------------------------
### Technology: <br>
* Automation Framework: Playwright <br>
* Build tool: npm <br>
* Bundled Tools: Mocha, Chai
* Language: Javascript <br>
* Report: Allure,html-report <br>
* Dependency/Packages:{<br>
    "@faker-js/faker": "^8.4.1",<br>
    "@playwright/test": "^1.46.1",<br>
    "@types/node": "^22.5.0",<br>
    "allure-playwright": "^3.0.0-beta.10",<br>
    "dotenv": "^16.4.5",<br>
    "rimraf": "^6.0.1"<br>
} <br>
* IDE: Visual Studio Code <br>

----------------------------------------------------------

### Prerequisite:
The following software are required:

1. nodejs : Download and Install Node JS from<br>
    https://nodejs.org/en/download/<br>
2. Install Java 8 or above, Allure Reports require Java 8 or higher.<br>
3. allure commandline : Install allure command line for generating Allure Reports using<br>
    npm install -g allure-commandline<br>
    
----------------------------------------------------------

### Installation:
1. Clone the repo using below URL<br>
  [https://github.com/imran3006/SQA_WPPOOL_Assignment.git]<br>
2. Navigate to folder and install npm packages using:<br>
  npm install<br>
3. Collect the .env file from the Project Author and place in the root directory of the project <br>
----------------------------------------------------------

### Usage:
1. To run the test without project script: <br>
A. To run test on chrome project: npx playwright test --project chrome<br>
B. To run test on firefox project: npx playwright test --project firefox<br>
C. To run test on safari project: npx playwright test --project webkit<br>
D. To run in debug mode with Playwright Inspector: npx playwright test --debug<br>
E. To run tests in headed browsers: npx playwright test --headed <br>
F. To run all the tests: npx playwright test <br>


2. To run the test with project defined script: <br>
A. To run test on chrome project: npm run testChrome<br>
B. To run test on firefox project: npm run testFirefox<br>
C. To run test on safari project: npm run testSafari<br>

3. To update browser: npm run updateBrowser<br>
4. To open Allure Report: npm run allureReport <br>
5. To generate & open Allure Report: npm run allureGenerate<br>

----------------------------------------------------------


 ### Allure generated report summary
 
      
   ![1](https://github.com/user-attachments/assets/a9be788e-cf01-4602-9906-725fec9375c7)


----------------------------------------------------------

 ### Video of the full Automation script

 

    
   

https://github.com/user-attachments/assets/0e681c14-8c61-4ead-b31d-4e26e5bce663



    



