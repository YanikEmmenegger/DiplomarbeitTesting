class OnboardingPageNavigation {

    elements = {

        buttonNext: () => cy.get("#onboard-btn-next").should('exist'),
        buttonPrevious: () => cy.get("#onboard-btn-back").should('exist'),
    }
    clickNext() {
        this.elements.buttonNext().click();
    }
    clickPrevious() {
        this.elements.buttonPrevious().click();
    }
    buttonPreviousIsDisabled() {
        this.elements.buttonPrevious().should('be.disabled');
    }
    buttonPreviousIsEnabled() {
        this.elements.buttonPrevious().should('be.enabled');
    }

}

export default new OnboardingPageNavigation();
