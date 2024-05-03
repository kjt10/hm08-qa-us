const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    // Setting the address
    it('should set the address', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const fromField = await $(page.fromField);
        await expect(fromField).toHaveValue('East 2nd Street, 601');
        const toField = await $(page.toField);
        await expect(toField).toHaveValue('1300 1st St');
    })
    // Selecting supportive plan
    it('should select supportive mode', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        const supportiveButton= await $(page.supportiveButton); 
        await expect(supportiveButton).toHaveElementClass('active');
    })
    // Filling in the phone number
    it('should fill the phone number', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })
    // Adding a credit card
    it('should add credit card', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.addCreditCardNumber('1234 1234 1234', '12');
        const addedCard= await $(page.addedCard);
        await expect(addedCard).toHaveText('Card');
    })  
    // Writing a message for the driver
    it('should add message for the driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.messageForDriver('winter is coming');
        const messageForDriverField = await $(page.messageForDriverField);
        await expect(messageForDriverField).toHaveValue('winter is coming');
    })
    // Ordering a blanket and handkerchief
    it('should add blanket and handkerchief', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        await page.orderingBlanketAndHankerchiefs();
        const blanketHandkerchiefButton= await $(page.blanketHandkerchiefButton);
        await expect(blanketHandkerchiefButton).toHaveElementClass('r-sw');
    })
    // Ordering 2 ice creams
    it('should add 2 ice creams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        await page.orderingIceCream();
        const iceCreamValueCounter= await $(page.iceCreamValueCounter);
        await expect(iceCreamValueCounter).toHaveText('2');
    })
    // Car search modal appearing
    it('should open car search modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await page.addCreditCardNumber('1234 1234 1234', '12');
        await page.messageForDriver('winter is coming');
        await page.openCarSearchModal();
        const enterNumberAndOrderButton= await $(page.enterNumberAndOrderButton);
        await expect(enterNumberAndOrderButton).toBeExisting();
        const carSearchModal= await $(page.carSearchModal);
        await expect(carSearchModal).toBeExisting();
    })
    // Driver info displayed
    it('should show driver info in the modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportivePlan();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await page.addCreditCardNumber('1234 1234 1234', '12');
        await page.messageForDriver('winter is coming');
        await page.openCarSearchModal();
        const driverInfoModal= await $(page.driverInfoModal);
        await driverInfoModal.waitForDisplayed();
        await expect(driverInfoModal).toBeExisting();
    })
})