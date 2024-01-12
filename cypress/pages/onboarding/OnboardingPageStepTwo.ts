class OnboardingPageStepTwo{
    elements = {
        weightInput: () => cy.get("[name='weight']").should('exist'),
        heightInput: () => cy.get("[name='height']").should('exist'),
    }
    setWeight(weight: any) {
        this.elements.weightInput().clear();
        weight !== "__NULL__" &&this.elements.weightInput().type(weight);
    }
    setHeight(height: any) {
        this.elements.heightInput().clear();
        height !== "__NULL__" &&this.elements.heightInput().type(height);
    }
    checkWeightIsValid() {
        this.elements.weightInput().should('have.class', 'border-CalorieCompass-Primary');
    }
    checkWeightIsInvalid() {
        this.elements.weightInput().should('have.class', 'border-red-500');
    }

    checkHeightIsValid() {
        this.elements.heightInput().should('have.class', 'border-CalorieCompass-Primary');
    }
    checkHeightIsInvalid() {
        this.elements.heightInput().should('have.class', 'border-red-500');
    }
}
export default new OnboardingPageStepTwo();