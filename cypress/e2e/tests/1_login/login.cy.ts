import loginPage from "../../../pages/loginPage";

describe('Login', () => {
    beforeEach(() => {
        cy.visit("/login");
    });

    it('try login in with correct credentials', () => {
        loginPage.login("yanik1999@hotmail.com", "1234")
        loginPage.checkLoginSuccess();
    });

    it('try login in with wrong credentials', () => {
        loginPage.login("yanik1999@hotmail.com", "wrongpw")
        loginPage.checkLoginFailed();
    });
    it('try to access app without logging in', () => {
        cy.visit("/app");
        cy.url().should('include', '/login');
    });
});