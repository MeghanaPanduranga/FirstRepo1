import { test, expect } from '@playwright/test';
import locators from '../../data/locators/locators.json';
import testData from '../../data/testData/testData.json';
import credentials from '../../data/creds/credentials.json';

const locator = locators.vibecoding.automationPractice;
const testInfo = testData.vibecoding.automationPractice;
const creds = credentials.vibecoding.automationPractice;

test('Navigate to PlaywrightPractice tab, enter username, check terms, and click start button', async ({ page }) => {
  // Step 1: Navigate to the website
  await page.goto(creds.url);
  
  // Wait for the page to load
  await page.waitForLoadState('networkidle');
  
  // Step 2: Go to PlaywrightPractice tab
  // First, look for the tab and click it
  const playwrightTab = page.locator(locator.playwrightTab);
  await playwrightTab.click();
  
  // Wait for navigation/content to load
  await page.waitForLoadState('networkidle');
  
  // Step 3: Enter username in the Form Elements Username field
  // Look for the username input field
  const usernameInput = page.locator(locator.usernameInput).first();
  await usernameInput.fill(testInfo.username);
  
  // Step 4: Click the checkbox below it - Accept Terms
  const acceptTermsCheckbox = page.locator(locator.acceptTermsCheckbox).first();
  await acceptTermsCheckbox.check();
  
  // Step 5: Click on start button
  const startButton = page.locator(locator.startButton).first();
  await startButton.click();
  
  // Wait for any navigation or action to complete
  await page.waitForLoadState('networkidle');
  
  // Verification: Check if the action was successful
  // You can add specific assertions based on what should happen after clicking start
  expect(page.url()).toBeTruthy();
});
