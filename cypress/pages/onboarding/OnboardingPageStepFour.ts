class OnboardingPageStepFour{
    elements = {
        goalOne: () => cy.get("#onboard-btn-goal-1").should('exist'),
        goalTwo: () => cy.get("#onboard-btn-goal-2").should('exist'),
        goalThree: () => cy.get("#onboard-btn-goal-3").should('exist'),
    }
    clickGoalOne() {
        this.elements.goalOne().click();
    }
    clickGoalTwo() {
        this.elements.goalTwo().click();
    }
    clickGoalThree() {
        this.elements.goalThree().click();
    }
    checkGoalOneIsSelected() {
        this.elements.goalOne().should('have.class', 'goal-active');
    }
    checkGoalTwoIsSelected() {
        this.elements.goalTwo().should('have.class', 'goal-active');
    }
    checkGoalThreeIsSelected() {
        this.elements.goalThree().should('have.class', 'goal-active');
    }
}
export default new OnboardingPageStepFour();