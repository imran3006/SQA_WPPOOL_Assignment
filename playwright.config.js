// @ts-check
import { defineConfig, devices } from '@playwright/test'
import path from 'path';
import testConfig from './testConfig'

const STORAGE_STATE = path.join(__dirname, 'authentication/.auth/admin.json');


export default defineConfig({
  /* Run tests in files in parallel */
  fullyParallel: true,
  // retries: 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html',{open:'never'}], ["allure-playwright"]],
  use: {
    headless: true,
    timeout: 60000
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      testMatch: "**/preCondition.setup.js",
      use: {
        headless: !false,
        baseURL: testConfig.baseURL,
      }
    },
    {
      name: 'chrome',
      testDir: './tests/specs/ui/',
      use: {
        ...devices['Desktop Chrome'],
        // storageState: STORAGE_STATE,
        baseURL: testConfig.baseURL,
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
      },
      //  dependencies: ['setup']
    },

    {
      name: 'firefox',
      testDir: './tests/specs/ui/',
      use: {
        ...devices['Desktop Firefox'],
        storageState: STORAGE_STATE,
        baseURL: testConfig.baseURL,
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
      },
      //dependencies: ['setup']
    },

    {
      name: 'webkit',
      testDir: './tests/specs/ui/',
      use: {
        ...devices['Desktop Safari'],
        storageState: STORAGE_STATE,
        baseURL: testConfig.baseURL,
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
      },
      dependencies: ['setup']
    },

    
  ],
});
export { STORAGE_STATE };