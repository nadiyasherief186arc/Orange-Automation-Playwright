export const TestData = {
    // ==========================================
    // Application URL & Authentication
    // ==========================================
    url: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',

    // Valid Credentials
    validUsername: 'Admin',
    validPassword: 'admin123',

    // Invalid Credentials
    invalidUsername: 'InvalidUser',
    invalidPassword: 'wrongPassword123',

    // Login Expected Texts & Error Messages
    invalidErrorMessage: 'Invalid credentials',
    requiredErrorMessage: 'Required',
    dashboardHeaderText: 'Dashboard',

    // Login Page Locators
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    loginButton: 'button[type="submit"]',
    errorMessage: '.oxd-alert-content-text',
    requiredError: '.oxd-input-field-error-message',
    dashboardHeader: 'h6.oxd-topbar-header-breadcrumb-module',

    // ==========================================
    // 12 Sidebar Menu Locators
    // ==========================================
    menuAdmin: 'a[href*="viewAdminModule"]',
    menuPim: 'a[href*="viewPimModule"]',
    menuLeave: 'a[href*="viewLeaveModule"]',
    menuTime: 'a[href*="viewTimeModule"]',
    menuRecruitment: 'a[href*="viewRecruitmentModule"]',
    menuMyInfo: 'a[href*="viewPersonalDetails"]',
    menuPerformance: 'a[href*="viewPerformanceModule"]',
    menuDashboard: 'a[href*="dashboard/index"]',
    menuDirectory: 'a[href*="viewDirectory"]',
    menuMaintenance: 'a[href*="maintenance"]',
    menuClaim: 'a[href*="viewClaimModule"]',
    menuBuzz: 'a[href*="viewBuzz"]',

    // Common Topbar Header Locator
    pageHeader: 'h6.oxd-topbar-header-breadcrumb-module',
    pageSubHeader: 'h6.oxd-topbar-header-breadcrumb-level',

    // ==========================================
    // Expected URLs for the 12 Modules
    // ==========================================
    adminUrl: '/admin/viewAdminModule',
    pimUrl: '/pim/viewPimModule',
    leaveUrl: '/leave/viewLeaveModule',
    timeUrl: '/time/viewTimeModule',
    recruitmentUrl: '/recruitment/viewRecruitmentModule',
    myInfoUrl: '/pim/viewPersonalDetails',
    performanceUrl: '/performance/viewPerformanceModule',
    dashboardUrl: '/dashboard/index',
    directoryUrl: '/directory/viewDirectory',
    maintenanceUrl: '/maintenance',
    claimUrl: '/claim/viewClaimModule',
    buzzUrl: '/buzz/viewBuzz',

    // ==========================================
    // Expected Header Titles for the 12 Modules
    // ==========================================
    adminHeaderText: 'Admin',
    pimHeaderText: 'PIM',
    leaveHeaderText: 'Leave',
    timeHeaderText: 'Time',
    recruitmentHeaderText: 'Recruitment',
    myInfoHeaderText: 'PIM',
    performanceHeaderText: 'Performance',
    directoryHeaderText: 'Directory',
    maintenanceHeaderText: 'Administrator Access',
    claimHeaderText: 'Claim',
    buzzHeaderText: 'Buzz',

    // ==========================================
    // Admin Page Locators & Test Data
    // ==========================================
    adminSearchUsernameInput: '.oxd-form-row input.oxd-input',
    adminSearchButton: 'button[type="submit"]',
    adminResetButton: 'button[type="reset"]',
    adminAddButton: 'button:has-text("Add")',
    adminTableRecords: '.oxd-table-body .oxd-table-card',
    adminSearchUsernameValue: 'Admin',

    // ==========================================
    // Maintenance Page Specific Locators
    // ==========================================
    maintenancePasswordInput: 'input[name="password"]',
    maintenanceConfirmButton: 'button[type="submit"]',
    maintenanceCancelButton: 'button:has-text("Cancel")',
    maintenancePromptHeader: 'h6.orangehrm-admin-access-title',

    // ==========================================
    // Buzz Page Specific Locators
    // ==========================================
    buzzPostTextarea: 'textarea.oxd-buzz-post-input',
    buzzPostButton: 'button:has-text("Post")',

    // ==========================================
    // Directory Page Specific Locators
    // ==========================================
    directoryEmployeeInput: 'input[placeholder="Type for hints..."]',
    directorySearchButton: 'button[type="submit"]',

    // ==========================================
    // Dashboard Page Specific Locators & Data
    // ==========================================
    dashboardGrid: '.orangehrm-dashboard-grid',
    dashboardWidgets: '.orangehrm-dashboard-widget',
    timeAtWorkWidget: '.oxd-sheet:has-text("Time at Work")',
    myActionsWidget: '.oxd-sheet:has-text("My Actions")',
    quickLaunchWidget: '.oxd-sheet:has-text("Quick Launch")',
    buzzLatestPostsWidget: '.oxd-sheet:has-text("Buzz Latest Posts")',
    employeesOnLeaveWidget: '.oxd-sheet:has-text("Employees on Leave Today")',
    employeeDistributionSubUnitWidget: '.oxd-sheet:has-text("Employee Distribution by Sub Unit")',
    employeeDistributionLocationWidget: '.oxd-sheet:has-text("Employee Distribution by Location")',

    // Quick Launch Buttons
    quickLaunchAssignLeave: 'button[title="Assign Leave"]',
    quickLaunchLeaveList: 'button[title="Leave List"]',
    quickLaunchTimesheets: 'button[title="Timesheets"]',
    quickLaunchApplyLeave: 'button[title="Apply Leave"]',
    quickLaunchMyLeave: 'button[title="My Leave"]',
    quickLaunchMyTimesheet: 'button[title="My Timesheet"]',

    // User Profile Dropdown & Logout
    userDropdown: '.oxd-userdropdown-tab',
    userDropdownMenu: '.oxd-userdropdown-menu',
    dropdownAbout: 'a:has-text("About")',
    dropdownSupport: 'a:has-text("Support")',
    dropdownChangePassword: 'a:has-text("Change Password")',
    dropdownLogout: 'a:has-text("Logout")',

    // ==========================================
    // PIM Module Locators & Test Data
    // ==========================================
    pimTabEmployeeList: 'a.oxd-topbar-body-nav-tab-item:has-text("Employee List")',
    pimTabAddEmployee: 'a.oxd-topbar-body-nav-tab-item:has-text("Add Employee")',
    pimTabReports: 'a.oxd-topbar-body-nav-tab-item:has-text("Reports")',
    pimAddEmployeeButton: 'button:has-text("Add")',

    // PIM Search Filter Locators
    pimSearchEmployeeNameInput: '.oxd-form-row input[placeholder="Type for hints..."]',
    pimSearchEmployeeIdInput: '.oxd-form-row .oxd-grid-item:nth-child(2) input',
    pimSearchButton: 'button[type="submit"]',
    pimResetButton: 'button[type="reset"]',
    pimTableRecords: '.oxd-table-body .oxd-table-card',
    pimRecordsCountText: '.orangehrm-horizontal-padding span',

    // Add Employee Form Locators
    pimFirstNameInput: 'input[name="firstName"]',
    pimMiddleNameInput: 'input[name="middleName"]',
    pimLastNameInput: 'input[name="lastName"]',
    pimSaveButton: 'button[type="submit"]',
    pimCancelButton: 'button:has-text("Cancel")',
    pimRequiredError: '.oxd-input-field-error-message',
    pimSuccessToast: '.oxd-toast',

    // PIM Sample Test Data Values
    pimTestFirstName: 'John',
    pimTestMiddleName: 'Robert',
    pimTestLastName: 'Doe',
    pimSearchSampleId: '0038',

    // ==========================================
    // Leave Module Locators & Test Data
    // ==========================================
    leaveTabApply: 'a.oxd-topbar-body-nav-tab-item:has-text("Apply")',
    leaveTabMyLeave: 'a.oxd-topbar-body-nav-tab-item:has-text("My Leave")',
    leaveTabLeaveList: 'a.oxd-topbar-body-nav-tab-item:has-text("Leave List")',
    leaveTabAssignLeave: 'a.oxd-topbar-body-nav-tab-item:has-text("Assign Leave")',

    // Leave List Search Filter
    leaveFromDateInput: '.oxd-form-row .oxd-date-input:first-child input',
    leaveToDateInput: '.oxd-form-row .oxd-date-input:last-child input',
    leaveSearchButton: 'button[type="submit"]',
    leaveResetButton: 'button[type="reset"]',
    leaveTableRecords: '.oxd-table-body .oxd-table-card',

    // Apply Leave Form Locators
    leaveTypeSelect: '.oxd-select-text',
    leaveCommentsTextarea: 'textarea.oxd-textarea',
    leaveApplyButton: 'button[type="submit"]',
    leaveRequiredError: '.oxd-input-field-error-message',

    // ==========================================
    // Time Module Locators & Test Data
    // ==========================================
    timeTabTimesheets: 'span.oxd-topbar-body-nav-tab-item:has-text("Timesheets")',
    timeTabAttendance: 'span.oxd-topbar-body-nav-tab-item:has-text("Attendance")',
    timeTabReports: 'span.oxd-topbar-body-nav-tab-item:has-text("Reports")',
    timeTabProjectInfo: 'span.oxd-topbar-body-nav-tab-item:has-text("Project Info")',

    // Submenu links
    timeSubmenuMyTimesheets: 'a:has-text("My Timesheets")',
    timeSubmenuEmployeeTimesheets: 'a:has-text("Employee Timesheets")',
    timeSubmenuPunchInOut: 'a:has-text("Punch In/Out")',
    timeSubmenuMyRecords: 'a:has-text("My Records")',
    timeSubmenuCustomers: 'a:has-text("Customers")',
    timeSubmenuProjects: 'a:has-text("Projects")',

    // Timesheets Search / View Form
    timeEmployeeNameInput: 'input[placeholder="Type for hints..."]',
    timeViewButton: 'button[type="submit"]',
    timeAttendanceCardTitle: 'h6.orangehrm-main-title',
    timeRecordsTable: '.oxd-table-body .oxd-table-card',

    // ==========================================
    // Recruitment Module Locators & Test Data
    // ==========================================
    recruitmentTabCandidates: 'a.oxd-topbar-body-nav-tab-item:has-text("Candidates")',
    recruitmentTabVacancies: 'a.oxd-topbar-body-nav-tab-item:has-text("Vacancies")',
    recruitmentAddButton: 'button:has-text("Add")',

    // Candidates Search Filter
    recruitmentCandidateNameInput: 'input[placeholder="Type for hints..."]',
    recruitmentKeywordsInput: 'input[placeholder="Enter comma separted words..."]',
    recruitmentSearchButton: 'button[type="submit"]',
    recruitmentResetButton: 'button[type="reset"]',
    recruitmentTableRecords: '.oxd-table-body .oxd-table-card',

    // Add Candidate Form Locators
    recruitmentFirstNameInput: 'input[name="firstName"]',
    recruitmentMiddleNameInput: 'input[name="middleName"]',
    recruitmentLastNameInput: 'input[name="lastName"]',
    recruitmentEmailInput: '.oxd-form-row input[placeholder="Type here"]',
    recruitmentSaveButton: 'button[type="submit"]',
    recruitmentCancelButton: 'button:has-text("Cancel")',
    recruitmentRequiredError: '.oxd-input-field-error-message',

    // Sample Candidate Data
    recruitmentTestCandidateFirst: 'Alex',
    recruitmentTestCandidateLast: 'Morgan',
    recruitmentTestEmail: 'alex.morgan@example.com',

    // ==========================================
    // My Info Module Locators & Test Data
    // ==========================================
    myInfoTabPersonalDetails: 'a.orangehrm-tabs-item:has-text("Personal Details")',
    myInfoTabContactDetails: 'a.orangehrm-tabs-item:has-text("Contact Details")',
    myInfoTabEmergencyContacts: 'a.orangehrm-tabs-item:has-text("Emergency Contacts")',
    myInfoTabDependents: 'a.orangehrm-tabs-item:has-text("Dependents")',
    myInfoTabJob: 'a.orangehrm-tabs-item:has-text("Job")',

    // Personal Details Form
    myInfoFirstNameInput: 'input[name="firstName"]',
    myInfoMiddleNameInput: 'input[name="middleName"]',
    myInfoLastNameInput: 'input[name="lastName"]',
    myInfoNicknameInput: '.oxd-form-row .oxd-grid-item:nth-child(1) input.oxd-input',
    myInfoSaveButton: '.orangehrm-horizontal-padding button[type="submit"]',
    myInfoSuccessToast: '.oxd-toast',
    myInfoRequiredError: '.oxd-input-field-error-message',

    // Sample Update Value
    myInfoUpdateNickname: 'Automator'
};
