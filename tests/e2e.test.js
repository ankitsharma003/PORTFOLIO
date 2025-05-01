// e2e.test.js - Simple end-to-end test script
// Run with: npx playwright test

const { test, expect } = require("@playwright/test");

test.describe("Portfolio Website Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the homepage before each test
    await page.goto("http://localhost:3000");
    // Wait for animations to finish
    await page.waitForTimeout(1000);
  });

  test("Home page loads correctly", async ({ page }) => {
    // Verify home page title is visible
    await expect(page.locator("h1")).toBeVisible();

    // Check for navigation bar
    await expect(page.locator(".sidenav")).toBeVisible();
  });

  test("Navigation works correctly", async ({ page }) => {
    // Click Projects link
    await page.click("text=Projects");
    await page.waitForTimeout(500);

    // Verify we navigated to projects page
    await expect(page.url()).toContain("/Projects");

    // Click About link
    await page.click("text=About");
    await page.waitForTimeout(500);

    // Verify we navigated to about page
    await expect(page.url()).toContain("/About");

    // Click Contact link
    await page.click("text=Contact");
    await page.waitForTimeout(500);

    // Verify we navigated to contact page
    await expect(page.url()).toContain("/Contact");
  });

  test("Dark mode toggle works", async ({ page }) => {
    // Find and click the theme toggle button
    await page.click(".theme-toggle-button");
    await page.waitForTimeout(500);

    // Check if dark-mode class is added to html
    const isDarkMode = await page.evaluate(() => {
      return document.documentElement.classList.contains("dark-mode");
    });

    expect(isDarkMode).toBeTruthy();

    // Toggle back to light mode
    await page.click(".theme-toggle-button");
    await page.waitForTimeout(500);

    // Check if dark-mode class is removed
    const isLightMode = await page.evaluate(() => {
      return !document.documentElement.classList.contains("dark-mode");
    });

    expect(isLightMode).toBeTruthy();
  });

  test("Contact form validation works", async ({ page }) => {
    // Navigate to contact page
    await page.click("text=Contact");
    await page.waitForTimeout(500);

    // Try to submit empty form
    await page.click("text=Send Message");

    // Verify form validation is working (form should not submit)
    await expect(page.locator("input:invalid")).toBeVisible();

    // Fill out the form
    await page.fill('input[name="name"]', "Test User");
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('textarea[name="message"]', "This is a test message");

    // For an actual test, you'd mock the submission here
    // This is just a basic check that the form can be filled
    await expect(page.locator('input[name="name"]')).toHaveValue("Test User");
  });

  test("Floating action button works", async ({ page }) => {
    // Click the floating action button
    await page.click(".fab-button");
    await page.waitForTimeout(500);

    // Verify the menu appears
    await expect(page.locator(".fab-menu")).toBeVisible();

    // Click a navigation link in the menu
    await page.click(".fab-item >> text=About");
    await page.waitForTimeout(500);

    // Verify navigation worked
    await expect(page.url()).toContain("/About");
  });

  test("404 page shows for invalid routes", async ({ page }) => {
    // Go to a non-existent page
    await page.goto("http://localhost:3000/non-existent-page");
    await page.waitForTimeout(500);

    // Verify 404 page content appears
    await expect(page.locator("text=404")).toBeVisible();
    await expect(page.locator("text=Page Not Found")).toBeVisible();

    // Check navigation back works
    await page.click("text=Go Home");
    await page.waitForTimeout(500);

    // Verify we're back at home page
    await expect(page.url()).toBe("http://localhost:3000/");
  });
});
