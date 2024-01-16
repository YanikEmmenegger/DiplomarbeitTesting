class SettingsWeightHeightPage {
    elements = {
        buttonSaveWeight: () => cy.get("#settings-btn-save-weight").should('exist'),
        buttonSaveHeight: () => cy.get("#settings-btn-save-height").should('exist'),
        inputWeight: () => cy.get("[name='weight']").should('exist'),
        inputHeight: () => cy.get("[name='height']").should('exist'),
    }

    clickSaveWeight() {
        this.elements.buttonSaveWeight().click();
    }

    clickSaveHeight() {
        this.elements.buttonSaveHeight().click();
    }

    setWeight(weight: string) {
        this.elements.inputWeight().clear();
        weight !== "__NULL__" && this.elements.inputWeight().type(weight);
    }

    setHeight(height: string) {
        this.elements.inputHeight().clear();
        height !== "__NULL__" && this.elements.inputHeight().type(height);
    }

    checkSaveWeightButtonIsDisabled() {
        this.elements.buttonSaveWeight().should('be.disabled');
    }

    checkSaveHeightButtonIsDisabled() {
        this.elements.buttonSaveHeight().should('be.disabled');
    }

    checkSaveWeightButtonIsEnabled() {
        this.elements.buttonSaveWeight().should('not.be.disabled');
    }

    checkSaveHeightButtonIsEnabled() {
        this.elements.buttonSaveHeight().should('not.be.disabled');
    }

    getWeightInputValue() {
        return this.getInputValues(this.elements.inputWeight());
    }

    getHeightInputValue() {
        return this.getInputValues(this.elements.inputHeight());
    }

    assertWeightInputValue(weight: string) {
        this.elements.inputWeight().should('have.value', weight);
    }

    assertHeightInputValue(height: string) {
        this.elements.inputHeight().should('have.value', height);
    }

    checkWeightIsValid() {
        this.elements.inputWeight().should('have.class', 'border-CalorieCompass-Primary');
   }
   checkWeightIsInvalid() {
        this.elements.inputWeight().should('have.class', 'border-red-500');
   }
    checkHeightIsValid() {
          this.elements.inputHeight().should('have.class', 'border-CalorieCompass-Primary');
    }
    checkHeightIsInvalid() {
          this.elements.inputHeight().should('have.class', 'border-red-500');
    }

    getInputValues(element: Cypress.Chainable<JQuery<HTMLElement>>) {
        return new Promise((resolve) => {
            element.invoke('val').then((inputValue) => {
                resolve(JSON.stringify(inputValue).replace(/['"]+/g, ''));
            });
        });
    }
}

export default new SettingsWeightHeightPage();