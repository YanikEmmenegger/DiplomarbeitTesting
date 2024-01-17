class PopUpPage{
    elements = {
        deleteButton: () => cy.get('#foodmodal-form-delete'),
        buttonBreakfast: () => cy.get('#foodmodal-form-breakfast').should('exist'),
        buttonLunch: () => cy.get('#foodmodal-form-lunch').should('exist'),
        buttonDinner: () => cy.get('#foodmodal-form-dinner').should('exist'),
        buttonSnack: () => cy.get('#foodmodal-form-snack').should('exist'),
        inputServingSize: () => cy.get('#foodmodal-form-servingsize').should('exist'),
        buttonSave: () => cy.get('#foodmodal-form-save').should('exist'),
    }

    setServingSize(servingSize: string) {
        this.elements.inputServingSize().clear();
        servingSize !== "__NULL__" && this.elements.inputServingSize().type(servingSize);
    }
    clickSave(){
        this.elements.buttonSave().click();
    }
    clickDelete(){
        this.elements.deleteButton().click();
    }
    clickBreakfast(){
        this.elements.buttonBreakfast().click();
    }
    clickLunch(){
        this.elements.buttonLunch().click();
    }
    clickDinner(){
        this.elements.buttonDinner().click();
    }
    clickSnack(){
        this.elements.buttonSnack().click();
    }
    //check if buttonBreakfast is active by checking if has class bg-CalorieCompass-Primary
    checkBreakfastIsActive(){
        this.elements.buttonBreakfast().should('have.class', 'bg-CalorieCompass-Primary');
    }
    checkLunchIsActive(){
        this.elements.buttonLunch().should('have.class', 'bg-CalorieCompass-Primary');
    }
    checkDinnerIsActive(){
        this.elements.buttonDinner().should('have.class', 'bg-CalorieCompass-Primary');
    }
    checkSnackIsActive(){
        this.elements.buttonSnack().should('have.class', 'bg-CalorieCompass-Primary');
    }
    //check if buttonBreakfast is inactive by checking if has class bg-transparent
    checkBreakfastIsInactive(){
        this.elements.buttonBreakfast().should('have.class', 'bg-transparent');
    }
    checkLunchIsInactive(){
        this.elements.buttonLunch().should('have.class', 'bg-transparent');
    }
    checkDinnerIsInactive(){
        this.elements.buttonDinner().should('have.class', 'bg-transparent');
    }
    checkSnackIsInactive(){
        this.elements.buttonSnack().should('have.class', 'bg-transparent');
    }

}
export default new PopUpPage()