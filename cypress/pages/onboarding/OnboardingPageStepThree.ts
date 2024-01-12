class OnboardingPageStepThree{
    elements = {
        activityLevelOne: () => cy.get("#onboard-btn-activity-level-1").should('exist'),
        activityLevelTwo: () => cy.get("#onboard-btn-activity-level-2").should('exist'),
        activityLevelThree: () => cy.get("#onboard-btn-activity-level-3").should('exist'),
        activityLevelFour: () => cy.get("#onboard-btn-activity-level-4").should('exist'),
    }
    clickActivityLevelOne() {
        this.elements.activityLevelOne().click();
    }
    clickActivityLevelTwo() {
        this.elements.activityLevelTwo().click();
    }
    clickActivityLevelThree() {
        this.elements.activityLevelThree().click();
    }
    clickActivityLevelFour() {
        this.elements.activityLevelFour().click();
    }
    checkActivityLevelOneIsSelected() {
        this.elements.activityLevelOne().should('have.class', 'level-active');
    }
    checkActivityLevelTwoIsSelected() {
        this.elements.activityLevelTwo().should('have.class', 'level-active');
    }
    checkActivityLevelThreeIsSelected() {
        this.elements.activityLevelThree().should('have.class', 'level-active');
    }
    checkActivityLevelFourIsSelected() {
        this.elements.activityLevelFour().should('have.class', 'level-active');
    }
}
export default new OnboardingPageStepThree();