import PopUpPage from "../popup/PopUpPage";
import Toast from "../Toast";

class DiaryPage {
    elements = {
        containerMeal1: () => cy.get('#diary-meal-1').should('exist'),
        containerMeal2: () => cy.get('#diary-meal-2').should('exist'),
        containerMeal3: () => cy.get('#diary-meal-3').should('exist'),
        containerMeal4: () => cy.get('#diary-meal-4').should('exist'),

        buttonAddFoodToMeal1: () => cy.get('#diary-btn-add-1'),
        buttonAddFoodToMeal2: () => cy.get('#diary-btn-add-2'),
        buttonAddFoodToMeal3: () => cy.get('#diary-btn-add-3'),
        buttonAddFoodToMeal4: () => cy.get('#diary-btn-add-4'),

        diaryEntries: () => cy.get('.diary-li-item'),

        buttonNextDay: () => cy.get('#diary-btn-nav-next'),
        buttonPreviousDay: () => cy.get('#diary-btn-nav-prev'),
    }

    getCaloriesFromMeal(mealNumber: number) {
        return cy.get(`#diary-meal-${mealNumber} .diary-meal-calories`);
    }

    clickNextDay() {
        this.elements.buttonNextDay().click();
    }
    //crete function to check if mealcontainer has diary-li-item
    mealContainerHasAnyEntries(mealNumber: number) {
        switch (mealNumber) {
            case 1:
                this.elements.containerMeal1().find('.diary-li-item').should('exist');
                break;
            case 2:
                this.elements.containerMeal2().find('.diary-li-item').should('exist');
                break;
            case 3:
                this.elements.containerMeal3().find('.diary-li-item').should('exist');
                break;
            case 4:
                this.elements.containerMeal4().find('.diary-li-item').should('exist');
                break;
        }
    }


    clickPreviousDay() {
        this.elements.buttonPreviousDay().click();
    }

    deleteFood(entry: Cypress.Chainable) {
        entry.click();
        PopUpPage.clickDelete()
        Toast.toastMessage('gelöscht')

    }

    clickAddFoodToMeal(mealNumber: number) {
        //click button add food to meal
        switch (mealNumber) {
            case 1:
                this.elements.buttonAddFoodToMeal1().click();
                break;
            case 2:
                this.elements.buttonAddFoodToMeal2().click();
                break;
            case 3:
                this.elements.buttonAddFoodToMeal3().click();
                break;
            case 4:
                this.elements.buttonAddFoodToMeal4().click();
                break;
        }
    }

    clearDiary() {
        //check if entries exists
        cy.get('body').then((body) => {
            //while loop
            if (body.find('.diary-li-item').length > 0) {
                cy.get('.diary-li-item').each(() => {
                    //@ts-ignore
                    this.deleteFood(this.elements.diaryEntries().first());
                });
            } else {
                cy.log('No entries to delete');
            }
        })
    }

}

export default new DiaryPage()