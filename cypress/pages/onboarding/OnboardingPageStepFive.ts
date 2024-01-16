class OnboardingPageStepFive{
    elements = {
        inputGoalCarbs: () => cy.get("[name='goal_carbs']").should('exist'),
        inputGoalProtein: () => cy.get("[name='goal_protein']").should('exist'),
        inputGoalFat: () => cy.get("[name='goal_fat']").should('exist'),
        calorieGoal: () => cy.get("#onboard-text-calorie-goal").should('exist'),
    }
    setGoalCarbs(goalCarbs: any) {
        this.elements.inputGoalCarbs().clear();
        goalCarbs !== "__NULL__" && this.elements.inputGoalCarbs().type(goalCarbs);
    }
    setGoalProtein(goalProtein: any) {
        this.elements.inputGoalProtein().clear();
        goalProtein !== "__NULL__" &&this.elements.inputGoalProtein().type(goalProtein);
    }
    setGoalFat(goalFat: any) {
        this.elements.inputGoalFat().clear();
        goalFat !== "__NULL__" && this.elements.inputGoalFat().type(goalFat);
    }
    checkGoalCarbsIsValid() {
        this.elements.inputGoalCarbs().should('have.class', 'border-CalorieCompass-Primary');
    }
    checkGoalCarbsIsInvalid() {
        this.elements.inputGoalCarbs().should('have.class', 'border-red-500');
    }
    checkGoalProteinIsValid() {
        this.elements.inputGoalProtein().should('have.class', 'border-CalorieCompass-Primary');
    }
    checkGoalProteinIsInvalid() {
        this.elements.inputGoalProtein().should('have.class', 'border-red-500');
    }
    checkGoalFatIsValid() {
        this.elements.inputGoalFat().should('have.class', 'border-CalorieCompass-Primary');
    }
    checkGoalFatIsInvalid() {
        this.elements.inputGoalFat().should('have.class', 'border-red-500');
    }
    assertCalorieGoal(calorieGoal: string) {
        return this.elements.calorieGoal().should('have.text', calorieGoal);
    }
    async getCarbs() {
        return await this.getInputValues(this.elements.inputGoalCarbs());
    }
    async getProtein() {
        return await this.getInputValues(this.elements.inputGoalProtein());
    }
    async getFat() {
        return await this.getInputValues(this.elements.inputGoalFat());
    }
    assertGoalFat(goalFat: string) {
        this.elements.inputGoalFat().should('have.value', goalFat);
    }
    assertGoalProtein(goalProtein: string) {
        this.elements.inputGoalProtein().should('have.value', goalProtein);
    }
    assertGoalCarbs(goalCarbs: string) {
        this.elements.inputGoalCarbs().should('have.value', goalCarbs);
    }
    getInputValues(element: Cypress.Chainable<JQuery<HTMLElement>>) {
        return new Promise((resolve) => {
            element.invoke('val').then((inputValue) => {
                resolve(JSON.stringify(inputValue).replace(/['"]+/g, ''));
            });
        });
    }

}
export default new OnboardingPageStepFive();
