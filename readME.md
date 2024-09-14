

# Aerosphere Automation

## We can automate the following using Playwright: <br>
* UI Automation - Functional Test Automation <br>
* API Automation <br>
* Cross-Browser Testing Automation <br>
* Responsiveness Testing Automation <br>
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
  https://github.com/acharjeeauntor/TimeSheet-Playwright-Project.git<br>
2. Navigate to folder and install npm packages using:<br>
  npm install<br>
3. Collect the .env file from the Project Author and place in the root directory of the project<br>
----------------------------------------------------------

### Usage:
1. To run the test without project script: <br>
A. To run test on chrome project: npx playwright test --project chrome<br>
B. To run test on firefox project: npx playwright test --project firefox<br>
C. To run test on safari project: npx playwright test --project webkit<br>
D. To run in debug mode with Playwright Inspector: npx playwright test --debug<br>
E. To run tests in interactive UI mode, with a built-in watch mode (Preview): npx playwright test --ui<br>
F. To run tests in headed browsers: npx playwright test --headed <br>
G. To run all the tests: npx playwright test <br>
H. To run on parallal worker: npx playwright test --workers=3<br>

2. To run the test with project defined script: <br>
A. To run test on chrome project: npm run testChrome<br>
B. To run test on firefox project: npm run testFirefox<br>
C. To run test on safari project: npm run testSafari<br>

3. To update browser: npm run updateBrowser<br>
4. To open Allure Report: npm run allureReport <br>
5. To generate & open Allure Report: npm run allureGenerate<br>

----------------------------------------------------------
### Playwright automation features that cover in this project:
1. Secured confidential data through the .env file<br>
2. Test on multiple browser support<br>
3. Parallal test execution support<br>
4. Test on multiple environment (e.g. test, dev, stage, production) support<br>
5. Sesssion Storage and login bypass support<br>
6. Can perform both UI, AIP, Cross-Browser, Responsivness Testing<br>
7. Test data management support<br>
8. Advanced test reporting support including Screenshots, Video, Trace, Chart view for issue investigation<br>
9. Standard test automation design pattern support (POM) <br>
10. Both headless and headed mode support <br>

----------------------------------------------------------
## Allure Report view
<img width="1438" alt="Screenshot 2024-08-26 at 3 16 37 PM" src="https://github.com/user-attachments/assets/f791b5be-100a-41d4-9aa5-f63080fa669a">
<img width="1438" alt="Screenshot 2024-08-26 at 3 16 44 PM" src="https://github.com/user-attachments/assets/2054b005-91c3-41b0-964c-7fed4701bdba">
<img width="1438" alt="Screenshot 2024-08-26 at 3 16 57 PM" src="https://github.com/user-attachments/assets/ec363c73-e73d-4615-ab70-97b09dbd928a">