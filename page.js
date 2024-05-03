module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumberField: '#number',
    cvvField: '.card-second-row #code',
    messageForDriverField: '#comment',
    addedCard: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[2]/div[2]/div[1]',
    iceCreamValueCounter: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[3]/div/div[2]/div[1]/div/div[2]/div/div[2]',
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    supportiveButton: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[1]/div[5]',
    paymentButton: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[2]',
    addCardButton: '//*[@id="root"]/div/div[2]/div[2]/div[1]/div[2]/div[3]',
    addingACardTitle: '//*[@id="root"]/div/div[2]/div[2]/div[2]/div',
    linkButton: '//*[@id="root"]/div/div[2]/div[2]/div[2]/form/div[3]/button[1]',
    closePaymentButton: '//*[@id="root"]/div/div[2]/div[2]/div[1]/button',
    blanketHandkerchiefButton: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[1]/div/div[2]',
    iceCreamPlusButton: '//*[@id="root"]/div/div[3]/div[3]/div[2]/div[2]/div[4]/div[2]/div[3]/div/div[2]/div[1]/div/div[2]/div/div[3]',
    enterNumberAndOrderButton: '//*[@id="root"]/div/div[3]/div[4]/button',
    // Modals
    phoneNumberModal: '.modal',
    carSearchModal: '//*[@id="root"]/div/div[5]/div[2]',
    driverInfoModal: '//div[contains(text(),"The driver will arrive in")]',
    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    selectSupportivePlan: async function() {
        const supportiveButton= await $(this.supportiveButton);
        await supportiveButton.waitForDisplayed();
        await supportiveButton.click();
    },
    addCreditCardNumber: async function (cardNumber, cvv) {
        const paymentButton= await $(this.paymentButton);
        await paymentButton.waitForDisplayed();
        await paymentButton.click();
        const addCardButton= await $(this.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        const cardNumberField = await $(this.cardNumberField);
        await cardNumberField.setValue(cardNumber);
        const cvvField = await $(this.cvvField);
        await cvvField.setValue(cvv);
        const addingACardTitle= await $(this.addingACardTitle);
        await addingACardTitle.waitForDisplayed();
        await addingACardTitle.click();
        const linkButton= await $(this.linkButton);
        await linkButton.waitForDisplayed();
        await linkButton.click();
        const closePaymentButton= await $(this.closePaymentButton);
        await closePaymentButton.waitForDisplayed();
        await closePaymentButton.click();
    },
    messageForDriver: async function (message) {
        const messageForDriverField = await $(this.messageForDriverField);
        await messageForDriverField.setValue(message);
    },
    orderingBlanketAndHankerchiefs: async function () {
        const blanketHandkerchiefButton= await $(this.blanketHandkerchiefButton);
        await blanketHandkerchiefButton.waitForDisplayed();
        await blanketHandkerchiefButton.click();
    },
    orderingIceCream: async function () {
        const iceCreamPlusButton= await $(this.iceCreamPlusButton);
        await iceCreamPlusButton.waitForDisplayed();
        await iceCreamPlusButton.click();
        await iceCreamPlusButton.click();
    },
    openCarSearchModal: async function () {
        const enterNumberAndOrderButton= await $(this.enterNumberAndOrderButton);
        await enterNumberAndOrderButton.waitForDisplayed();
        await enterNumberAndOrderButton.click();
        const carSearchModal= await $(this.carSearchModal);
        await carSearchModal.waitForDisplayed();
        const driverInfoModal= await $(this.driverInfoModal);
        await driverInfoModal.waitForDisplayed();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
};