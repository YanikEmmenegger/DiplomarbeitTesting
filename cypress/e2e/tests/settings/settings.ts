import loginPage from "../../../pages/loginPage";

describe('Settings', () => {
    beforeEach(() => {

        cy.viewport('iphone-x')
        cy.visit("/login");
        loginPage.login("yanik1999@hotmail.com", "1234")
        loginPage.checkLoginSuccess();
        cy.visit("/app/settings");
    });
    it('personal details', () => {

    });

});