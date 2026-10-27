# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.ts >> OrangeHRM Dashboard Page Tests >> 2. Verify Key Dashboard Widgets are Visible
- Location: tests\dashboard.spec.ts:32:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.orangehrm-dashboard-widget:has-text("Time at Work")')
Expected: visible
Error: strict mode violation: locator('.orangehrm-dashboard-widget:has-text("Time at Work")') resolved to 2 elements:
    1) <div data-v-c93bdbf3="" data-v-04c617d8="" class="oxd-grid-item oxd-grid-item--gutters orangehrm-dashboard-widget">…</div> aka locator('div').filter({ hasText: 'Time at Work' }).nth(5)
    2) <div data-v-8a31f039="" data-v-133d244a="" data-v-58bcc29e="" data-v-04c617d8="" class="oxd-sheet oxd-sheet--rounded oxd-sheet--white orangehrm-dashboard-widget">…</div> aka locator('div').filter({ hasText: /^Time at Work$/ }).nth(1)

Call log:
  - Expect "toBeVisible" locator('.orangehrm-dashboard-widget:has-text("Time at Work")') with timeout 10000ms
  - waiting for locator('.orangehrm-dashboard-widget:has-text("Time at Work")')

```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic:
    - complementary [ref=f1e4]:
      - navigation "Sidepanel" [ref=f1e5]:
        - generic [ref=f1e6]:
          - link [ref=f1e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f1e9]
          - text: 
        - generic [ref=f1e10]:
          - generic [ref=f1e11]:
            - generic [ref=f1e12]:
              - textbox "Search" [ref=f1e15]
              - button "" [ref=f1e16] [cursor=pointer]
            - separator [ref=f1e18]
          - list [ref=f1e19]:
            - listitem [ref=f1e20]:
              - link "Admin" [ref=f1e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f1e25]:
              - link "PIM" [ref=f1e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f1e41]:
              - link "Leave" [ref=f1e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f1e46]:
              - link "Time" [ref=f1e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f1e54]:
              - link "Recruitment" [ref=f1e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f1e62]:
              - link "My Info" [ref=f1e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f1e70]:
              - link "Performance" [ref=f1e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f1e80]:
              - link "Dashboard" [ref=f1e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f1e85]:
              - link "Directory" [ref=f1e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f1e90]:
              - link "Maintenance" [ref=f1e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f1e96]:
              - link "Claim" [ref=f1e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f1e105]:
              - link "Buzz" [ref=f1e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f1e110]:
      - generic [ref=f1e111]:
        - generic [ref=f1e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=f1e114]
        - link [ref=f1e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f1e117] [cursor=pointer]
        - list [ref=f1e123]:
          - listitem [ref=f1e124]:
            - generic [ref=f1e125] [cursor=pointer]:
              - img "profile picture" [ref=f1e126]
              - paragraph [ref=f1e127]: QA swarmm0 Abdurasul
              - generic [ref=f1e128]: 
      - navigation "Topbar Menu" [ref=f1e130]:
        - list [ref=f1e131]:
          - button "" [ref=f1e133] [cursor=pointer]
  - generic [ref=f1e135]:
    - generic [ref=f1e137]:
      - generic [ref=f1e139]:
        - generic [ref=f1e141]:
          - generic [ref=f1e142]: 
          - paragraph [ref=f1e143]: Time at Work
        - separator [ref=f1e144]
        - generic [ref=f1e146]:
          - generic [ref=f1e147]:
            - img "profile picture" [ref=f1e149]
            - generic [ref=f1e150]:
              - paragraph [ref=f1e151]: Punched In
              - paragraph [ref=f1e152]: "Punched In: Dec 30th at 08:28 AM (GMT 1)"
          - generic [ref=f1e153]:
            - generic [ref=f1e154]: 1583h 57m Today
            - button "" [ref=f1e155] [cursor=pointer]
          - separator [ref=f1e157]
          - generic [ref=f1e158]:
            - generic [ref=f1e159]:
              - paragraph [ref=f1e160]: This Week
              - paragraph [ref=f1e161]: Oct 19 - Oct 25
            - generic [ref=f1e162]:
              - generic [ref=f1e163]: 
              - paragraph [ref=f1e164]: 0h 6m
      - generic [ref=f1e168]:
        - generic [ref=f1e170]:
          - generic [ref=f1e171]: 
          - paragraph [ref=f1e172]: My Actions
        - separator [ref=f1e173]
        - generic [ref=f1e175]:
          - generic [ref=f1e176]:
            - button [ref=f1e177] [cursor=pointer]
            - paragraph [ref=f1e183] [cursor=pointer]: (5) Leave Requests to Approve
          - generic [ref=f1e184]:
            - button [ref=f1e185] [cursor=pointer]
            - paragraph [ref=f1e191] [cursor=pointer]: (1) Pending Self Review
          - generic [ref=f1e192]:
            - button [ref=f1e193] [cursor=pointer]
            - paragraph [ref=f1e202] [cursor=pointer]: (2) Candidates to Interview
      - generic [ref=f1e204]:
        - generic [ref=f1e206]:
          - generic [ref=f1e207]: 
          - paragraph [ref=f1e208]: Quick Launch
        - separator [ref=f1e209]
        - generic [ref=f1e211]:
          - generic [ref=f1e212]:
            - button "Assign Leave" [ref=f1e213] [cursor=pointer]
            - generic "Assign Leave" [ref=f1e216]:
              - paragraph [ref=f1e217]: Assign Leave
          - generic [ref=f1e218]:
            - button "Leave List" [ref=f1e219] [cursor=pointer]
            - generic "Leave List" [ref=f1e226]:
              - paragraph [ref=f1e227]: Leave List
          - generic [ref=f1e228]:
            - button "Timesheets" [ref=f1e229] [cursor=pointer]
            - generic "Timesheets" [ref=f1e235]:
              - paragraph [ref=f1e236]: Timesheets
          - generic [ref=f1e237]:
            - button "Apply Leave" [ref=f1e238] [cursor=pointer]
            - generic "Apply Leave" [ref=f1e241]:
              - paragraph [ref=f1e242]: Apply Leave
          - generic [ref=f1e243]:
            - button "My Leave" [ref=f1e244] [cursor=pointer]
            - generic "My Leave" [ref=f1e249]:
              - paragraph [ref=f1e250]: My Leave
          - generic [ref=f1e251]:
            - button "My Timesheet" [ref=f1e252] [cursor=pointer]
            - generic "My Timesheet" [ref=f1e255]:
              - paragraph [ref=f1e256]: My Timesheet
      - generic [ref=f1e258]:
        - generic [ref=f1e260]:
          - generic [ref=f1e261]: 
          - paragraph [ref=f1e262]: Buzz Latest Posts
        - separator [ref=f1e263]
        - generic [ref=f1e265]:
          - generic [ref=f1e266]:
            - generic [ref=f1e267] [cursor=pointer]:
              - img "profile picture" [ref=f1e269]
              - generic [ref=f1e270]:
                - paragraph [ref=f1e271]: QA swarmm0 QA swarmm1 Abdurasul
                - paragraph [ref=f1e272]: 2026-25-10 01:13 PM
            - separator [ref=f1e273]
            - paragraph [ref=f1e274]: All is well
          - generic [ref=f1e275]:
            - generic [ref=f1e276] [cursor=pointer]:
              - img "profile picture" [ref=f1e278]
              - generic [ref=f1e279]:
                - paragraph [ref=f1e280]: QA swarmm0 QA swarmm1 Abdurasul
                - paragraph [ref=f1e281]: 2026-25-10 01:11 PM
            - separator [ref=f1e282]
            - paragraph [ref=f1e283]: QA automation verification f012b44d
          - generic [ref=f1e284]:
            - generic [ref=f1e285] [cursor=pointer]:
              - img "profile picture" [ref=f1e287]
              - generic [ref=f1e288]:
                - paragraph [ref=f1e289]: QA swarmm0 QA swarmm1 Abdurasul
                - paragraph [ref=f1e290]: 2026-25-10 01:09 PM
            - separator [ref=f1e291]
            - paragraph [ref=f1e292]: All is well
          - generic [ref=f1e293]:
            - generic [ref=f1e294] [cursor=pointer]:
              - img "profile picture" [ref=f1e296]
              - generic [ref=f1e297]:
                - paragraph [ref=f1e298]: QA swarmm0 QA swarmm1 Abdurasul
                - paragraph [ref=f1e299]: 2026-25-10 01:07 PM
            - separator [ref=f1e300]
            - paragraph [ref=f1e301]: All is well
          - generic [ref=f1e302]:
            - generic [ref=f1e303] [cursor=pointer]:
              - img "profile picture" [ref=f1e305]
              - generic [ref=f1e306]:
                - paragraph [ref=f1e307]: QA swarmm0 QA swarmm1 Abdurasul
                - paragraph [ref=f1e308]: 2026-25-10 01:05 PM
            - separator [ref=f1e309]
            - paragraph [ref=f1e310]: All is well
      - generic [ref=f1e312]:
        - generic [ref=f1e313]:
          - paragraph [ref=f1e318]: Employees on Leave Today
          - generic [ref=f1e319] [cursor=pointer]: 
        - separator [ref=f1e320]
        - generic [ref=f1e322]:
          - img "No Content" [ref=f1e323]
          - paragraph [ref=f1e324]: No Employees are on Leave Today
      - generic [ref=f1e326]:
        - generic [ref=f1e328]:
          - generic [ref=f1e329]: 
          - paragraph [ref=f1e330]: Employee Distribution by Sub Unit
        - separator [ref=f1e331]
        - list [ref=f1e336]:
          - listitem [ref=f1e337] [cursor=pointer]:
            - generic "Engineering" [ref=f1e339]
          - listitem [ref=f1e340] [cursor=pointer]:
            - generic "Human Resources" [ref=f1e342]
          - listitem [ref=f1e343] [cursor=pointer]:
            - generic "Administration" [ref=f1e345]
          - listitem [ref=f1e346] [cursor=pointer]:
            - generic "Client Services" [ref=f1e348]
          - listitem [ref=f1e349] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e351]
      - generic [ref=f1e353]:
        - generic [ref=f1e355]:
          - generic [ref=f1e356]: 
          - paragraph [ref=f1e357]: Employee Distribution by Location
        - separator [ref=f1e358]
        - list [ref=f1e363]:
          - listitem [ref=f1e364] [cursor=pointer]:
            - generic "Texas R&D" [ref=f1e366]
          - listitem [ref=f1e367] [cursor=pointer]:
            - generic "New York Sales Office" [ref=f1e369]
          - listitem [ref=f1e370] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e372]
    - generic [ref=f1e373]:
      - paragraph [ref=f1e374]: OrangeHRM OS 5.9
      - paragraph [ref=f1e375]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e376] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../Pages/loginpage';
  3  | import { DashboardPage } from '../Pages/dashboardpage';
  4  | import { TestData } from '../TestData/testdata';
  5  | 
  6  | test.describe('OrangeHRM Dashboard Page Tests', () => {
  7  | 
  8  |     test.beforeEach(async ({ page }) => {
  9  |         // Step 1: Open Login page
  10 |         await page.goto(TestData.url);
  11 | 
  12 |         // Step 2: Login with valid credentials
  13 |         let loginPage = new LoginPage(page);
  14 |         await loginPage.login(TestData.validUsername, TestData.validPassword);
  15 | 
  16 |         // Step 3: Verify user is landed on Dashboard page
  17 |         await expect(page).toHaveURL(/.*dashboard/);
  18 |     });
  19 | 
  20 |     // Scenario 1: Verify Dashboard page header and URL
  21 |     test('1. Verify Dashboard Page Header and URL', async ({ page }) => {
  22 |         let dashboard = new DashboardPage(page);
  23 | 
  24 |         // Verify URL contains /dashboard/index
  25 |         await expect(page).toHaveURL(new RegExp(TestData.dashboardUrl));
  26 | 
  27 |         // Verify Page Header displays 'Dashboard'
  28 |         await expect(page.locator(dashboard.pageHeader)).toContainText(TestData.dashboardHeaderText);
  29 |     });
  30 | 
  31 |     // Scenario 2: Verify all key Dashboard widgets are visible
  32 |     test('2. Verify Key Dashboard Widgets are Visible', async ({ page }) => {
  33 |         let dashboard = new DashboardPage(page);
  34 | 
  35 |         // Verify Time at Work widget
> 36 |         await expect(page.locator(dashboard.timeAtWorkWidget)).toBeVisible();
     |                                                                ^ Error: expect(locator).toBeVisible() failed
  37 | 
  38 |         // Verify My Actions widget
  39 |         await expect(page.locator(dashboard.myActionsWidget)).toBeVisible();
  40 | 
  41 |         // Verify Quick Launch widget
  42 |         await expect(page.locator(dashboard.quickLaunchWidget)).toBeVisible();
  43 | 
  44 |         // Verify Buzz Latest Posts widget
  45 |         await expect(page.locator(dashboard.buzzLatestPostsWidget)).toBeVisible();
  46 | 
  47 |         // Verify Employees on Leave Today widget
  48 |         await expect(page.locator(dashboard.employeesOnLeaveWidget)).toBeVisible();
  49 |     });
  50 | 
  51 |     // Scenario 3: Verify Quick Launch button action (Apply Leave shortcut)
  52 |     test('3. Verify Quick Launch Apply Leave navigation', async ({ page }) => {
  53 |         let dashboard = new DashboardPage(page);
  54 | 
  55 |         // Click Apply Leave button from Quick Launch
  56 |         await dashboard.clickApplyLeave();
  57 | 
  58 |         // Verify navigation to Apply Leave page
  59 |         await expect(page).toHaveURL(/.*leave\/applyLeave/);
  60 |         await expect(page.locator(TestData.pageHeader)).toContainText(TestData.leaveHeaderText);
  61 |     });
  62 | 
  63 |     // Scenario 4: Verify User Profile dropdown and Logout flow
  64 |     test('4. Verify User Profile Dropdown and Logout', async ({ page }) => {
  65 |         let dashboard = new DashboardPage(page);
  66 | 
  67 |         // Click user dropdown and select Logout
  68 |         await dashboard.clickLogout();
  69 | 
  70 |         // Verify user is redirected back to Login page
  71 |         await expect(page).toHaveURL(/.*auth\/login/);
  72 |         await expect(page.locator(TestData.usernameInput)).toBeVisible();
  73 |         await expect(page.locator(TestData.loginButton)).toBeVisible();
  74 |     });
  75 | 
  76 | });
  77 | 
```