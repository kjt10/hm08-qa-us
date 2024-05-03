# Sprint 8 project: Urban Routes functionality testing

## Project description:
This project is designed to test the functionality of the Urban Routes app. WebdriverIO E2E tests were created to test the apps UI and ensure that functionality of the full process of ordering a taxi.

## Setup:
Before running the tests, make sure you have the following software installed:
1. Git
2. Visual Studio Code
3. WebdriverIO
4. Firefox

## Configuration:
1. Clone the repository to your local directory.
2. In the terminal in this directory run: `npm install`.
3. Start the Urban Routes server and copy the server URL.
4. Add the server URL to the `wdio.config.js` file setting `baseUrl`.
5. Run all the tests: `npm run wdio`.

## Running Tests:
1. Use the Urban Routes app and DevTools to examen the UI.
2. In VS code use the template provided in the `createAnOrder.e2e.js` file to create tests cases to check the full process of ordering a taxi.
3. Give the tests a name that would help you identify what you are testing. Comment the tests names.
4. Use the `page.js` module file to organize and maintain your code.
5. Find elements in your UI by using DevTools and add missing locators to your Inputs, Buttons, and Modals. 
6. Create Functions for the test cases to reduce repetitive code.
7. Create tests cases for: setting an address, selecting the supportive plan, filling in the phone number, adding a credit card, writing a message for the driver, ordering a blanket and handkerchiefs, ordering 2 ice creams, inspection the search modal appearing, and inspecting the driver information is displayed.
8. Use the `expect` command and "matcher" to compare actual and expected results.
9. Save your tests before running the tests.
10. When you're ready to run the tests use the command `npm run wdio`.
11. Check if the tests passed or failed and what the expected and received results are supposed to be.

## Test Cases:
1. Setting the address:
    Should set the address - PASSED
2. Selecting supportive plan:
    Should select supportive mode - PASSED
3. Filling in the phone number:
    Should fill the phone number - PASSED
4. Adding a credit card:
    Should add credit card - PASSED
5. Writing message for the driver:
    Should add message for the driver - PASSED
6. Ordering a blanket and handkerchief:
    Should add blanket and handkerchief - PASSED
7. Ordering 2 ice creams:
    Shoudl add 2 ice creams - PASSED
8. Car search modal appearing:
    Should open car search modal - PASSED
9. Driver info displayed:
    Should show driver info in the modal - PASSED