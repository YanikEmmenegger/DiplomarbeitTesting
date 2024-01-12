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
    getCalorieGoal() {
        return this.elements.calorieGoal().invoke('text');
    }

}
export default new OnboardingPageStepFive();
