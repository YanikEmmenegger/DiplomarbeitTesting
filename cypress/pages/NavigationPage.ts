class NavigationPage {
    elements = {
        buttonDashboard: () => cy.get("#nav-btn-dashboard").should('exist'),
        buttonDiary: () => cy.get("#nav-btn-diary").should('exist'),
        buttonSettings: () => cy.get("#nav-btn-settings").should('exist'),
        buttonAddFood: () => cy.get("#nav-btn-add")
    }

    clickDashboard() {
        cy.wait(500);
        this.elements.buttonDashboard().click();
    }

    clickDiary() {
        cy.wait(500);
        this.elements.buttonDiary().click();
    }

    clickSettings() {
        cy.wait(500);
        this.elements.buttonSettings().click();
    }

    clickAddFood() {
        cy.wait(500);
        this.elements.buttonAddFood().click();
    }

    checkAddFoodButtonIsVisible() {
        this.elements.buttonAddFood().should('be.visible');
    }

    checkAddFoodButtonIsNotVisible() {
        this.elements.buttonAddFood().should('not.be.visible');
    }
}

export default new NavigationPage();