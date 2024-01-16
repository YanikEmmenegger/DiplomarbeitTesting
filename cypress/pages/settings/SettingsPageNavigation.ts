class SettingsPageNavigation {
    elements = {
        buttonPersonalSettings: () => cy.get("#settings-btn-personal").should('exist'),
        buttonPlanSettings: () => cy.get("#settings-btn-plan").should('exist'),
        buttonLogout: () => cy.get("#settings-btn-logout").should('exist'),
        buttonWeightHeightSettings: () => cy.get("#settings-btn-weight_height").should('exist'),
        buttonOnboard: () => cy.get("#settings-btn-onboard").should('exist'),
        buttonSettingsBack: () => cy.get("#settings-btn-back").should('exist'),
        buttonSaveSettings: () => cy.get("#settings-btn-save").should('exist'),
    }
    clickSettingsBack() {
        this.elements.buttonSettingsBack().click();
    }

    clickSave() {
        this.elements.buttonSaveSettings().click();
    }

    checkSaveButtonIsDisabled() {
        this.elements.buttonSaveSettings().should('be.disabled');
    }

    checkSaveButtonIsEnabled() {
        this.elements.buttonSaveSettings().should('not.be.disabled');
    }

    clickPersonalSettings() {
        this.elements.buttonPersonalSettings().click();
    }

    clickPlanSettings() {
        this.elements.buttonPlanSettings().click();
    }

    clickLogout() {
        this.elements.buttonLogout().click();
    }

    clickWeightHeightSettings() {
        this.elements.buttonWeightHeightSettings().click();
    }

    clickOnboard() {
        this.elements.buttonOnboard().click();
    }
}

export default new SettingsPageNavigation();