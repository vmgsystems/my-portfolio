import { test, expect } from "@playwright/test";

test.describe("VMG Systems Portfolio Audit", () => {
  test("Homepage loads and has active components", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/VMG Systems/);
    
    // Check main navigation indicator (hidden on mobile devices, visible on desktop)
    const isMobile = page.viewportSize()?.width && page.viewportSize()!.width < 640;
    if (!isMobile) {
      await expect(page.locator("text=Node Operational")).toBeVisible();
    } else {
      await expect(page.locator("text=Node Operational")).toBeHidden();
    }
    
    // Check Core Capabilities
    await expect(page.locator("text=Core Consulting Capabilities")).toBeVisible();
    await expect(page.locator("text=Clean Slate Infrastructure & AI Engineering")).toBeVisible();
    await expect(page.locator("text=Infrastructure Stack")).toBeVisible();
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
    await expect(page.locator("text=WO2017177203A1").first()).toBeVisible();
    await expect(page.locator("text=B.S. Electrical Engineering")).toBeVisible();
  });

  test("The Lab page features telemetry monitors", async ({ page }) => {
    await page.goto("/lab");
    await expect(page.locator("text=The Builder’s Lab")).toBeVisible();
    await expect(page.locator("text=PD3board Terminal")).toBeVisible();
    await expect(page.locator("text=Rambler Smart Bridge")).toBeVisible();
    await expect(page.locator("text=VMG AI OS")).toBeVisible();
    // 5 telemetry cards track Uptime metrics (EA Agent, PD3board, Rambler, n8n, Langfuse)
    await expect(page.locator("text=Uptime")).toHaveCount(5);
  });

  test("Contact page highlights direct channels", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.locator("text=Direct Email")).toBeVisible();
    await expect(page.locator("text=LinkedIn Profile")).toBeVisible();
  });
});
