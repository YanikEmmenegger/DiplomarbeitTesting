class OnboardingPageStepOne {

    elements = {
        //get input by name attribute containing "email"

        nameInput: () => cy.get("[name='name']").should('exist'),
        firstNameInput: () => cy.get("[name='firstname']").should('exist'),
        emailInput: () => cy.get("[name='email']").should('exist'),
        birthdateInput: () => cy.get("[name='birthdate']").should('exist'),
        buttonMale: ()=> cy.get("#onboard-btn-gender-male").should('exist'),
        buttonFemale: ()=> cy.get("#onboard-btn-gender-female").should('exist')
    }
    setName(name: string) {
        this.elements.nameInput().clear();
        name !== "__NULL__" &&this.elements.nameInput().type(name);
    }
    setFirstName(firstName: string) {
        this.elements.firstNameInput().clear();
        firstName !== "__NULL__" && this.elements.firstNameInput().type(firstName);
    }
    setEmail(email: string) {
        this.elements.emailInput().clear();
        email !== "__NULL__" && this.elements.emailInput().type(email);
    }
    setBirthdate(birthdate: string) {
        this.elements.birthdateInput().clear();
        birthdate !== "__NULL__" &&this.elements.birthdateInput().type(birthdate);
    }
    clickMale() {
        this.elements.buttonMale().click();
    }
    clickFemale() {
        this.elements.buttonFemale().click();
    }
    checkMaleIsSelected() {
        this.elements.buttonMale().should('have.class', 'gender-active');
    }
    checkFemaleIsSelected() {
        this.elements.buttonFemale().should('have.class', 'gender-active');
    }
    checkBirthdayIsValid() {
        this.elements.birthdateInput().should('have.class', 'border-CalorieCompass-Primary');
    }
    checkBirthdayIsInvalid() {
        this.elements.birthdateInput().should('have.class', 'border-red-500');
    }
    checkNameIsValid() {
        this.elements.nameInput().should('have.class', 'border-CalorieCompass-Primary');
    }
    checkNameIsInvalid() {
        this.elements.nameInput().should('have.class', 'border-red-500');
    }
    checkFirstNameIsValid() {
        this.elements.firstNameInput().should('have.class', 'border-CalorieCompass-Primary');
    }
    checkFirstNameIsInvalid() {
        this.elements.firstNameInput().should('have.class', 'border-red-500');
    }
    checkEmailIsValid() {
        this.elements.emailInput().should('have.class', 'border-CalorieCompass-Primary');
    }
    checkEmailIsInvalid() {
        this.elements.emailInput().should('have.class', 'border-red-500');
    }

}
export default new OnboardingPageStepOne();
