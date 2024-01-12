class LoginPage {

    elements = {
        emailInput: () => cy.get("#email").should('exist').should('exist'),
        passwordInput: () => cy.get("#password").should('exist').should('exist'),
        loginButton: () => cy.get("button[type='submit']").should('exist').should('exist'),
        errorMessage: () => cy.get(".supabase-auth-ui_ui-message").should('exist').should('exist'),
    }

    enterText(inputElement, text) {
        inputElement().clear().type(text);
    }

    login(email, password) {
        this.enterText(this.elements.emailInput, email);
        this.enterText(this.elements.passwordInput, password);
        this.elements.loginButton().click();
    }

    checkLoginSuccess() {
        cy.url().should('include', '/app');
    }

    checkLoginFailed() {
        cy.url().should('include', '/login');
        this.elements.errorMessage().should('be.visible');
    }
}

export default new LoginPage();
