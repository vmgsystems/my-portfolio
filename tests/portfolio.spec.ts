import { test, expect } from "@playwright/test";

test.describe("VMG Systems Portfolio Audit", () => {
  test("Homepage loads and has active components", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/VMG Systems/);
    
    // Check main navigation indicator
    await expect(page.locator("text=Node Operational")).toBeVisible();
    
    // Check Operations Console
    await expect(page.locator("text=VMG Operations Console")).toBeVisible();
    await expect(page.locator("text=Interactive Infrastructure Hub")).toBeVisible();
    
    // Trigger simulated diagnostic audit
    await page.click("text=Run AI Diagnostic Audit");
    await page.waitForTimeout(2000); // Allow scan logs to stream
  });

  test("Consulting page has pricing and methodology", async ({ page }) => {
    await page.goto("/consulting");
    await expect(page.locator("text=The Clean Slate Protocol")).toBeVisible();
    await expect(page.locator("text=Fixed-Scope Audits")).toBeVisible();
    await expect(page.locator("text=Custom Product Sprints")).toBeVisible();
  });

  test("Timeline has milestones", async ({ page }) => {
    await page.goto("/timeline");
    await expect(page.locator("text=Automotive AI Platform Venture")).toBeVisible();
    await expect(page.locator("text=B.S. Electrical Engineering")).toBeVisible();
  });

  test("The Lab page features telemetry monitors", async ({ page }) => {
    await page.goto("/lab");
    await expect(page.locator("text=The Builder’s Lab")).toBeVisible();
    await expect(page.locator("text=Uptime")).toHaveCount(4); // Verify our 4 telemetry cards have Uptime metrics!
  });

  test("Contact page highlights direct channels", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.locator("text=Direct Email")).toBeVisible();
    await expect(page.locator("text=LinkedIn Profile")).toBeVisible();
  });
});
