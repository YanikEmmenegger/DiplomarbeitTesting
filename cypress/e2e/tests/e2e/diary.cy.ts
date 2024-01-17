import loginPage from "../../../pages/loginPage";
import DiaryPage from "../../../pages/diary/DiaryPage";
import NavigationPage from "../../../pages/NavigationPage";
import FoodSearchPage from "../../../pages/foodsearch/FoodSearchPage";
import PopUpPage from "../../../pages/popup/PopUpPage";
import Toast from "../../../pages/Toast";

describe('Diary', () => {

    const nextDay = (date:string) => {
        //date comes as string in format YYYY-MM-DD convert to date add one day and return as string
        const dateObj = new Date(date);
        dateObj.setDate(dateObj.getDate() + 1);
        return dateObj.toISOString().slice(0, 10);
    }
    const previousDay = (date:string) => {
        //date comes as string in format YYYY-MM-DD convert to date add one day and return as string
        const dateObj = new Date(date);
        dateObj.setDate(dateObj.getDate() - 1);
        return dateObj.toISOString().slice(0, 10);

    }

    beforeEach(() => {

        cy.viewport('iphone-x')
        cy.visit("/login");
        loginPage.login("yanik1999@hotmail.com", "1234")
        loginPage.checkLoginSuccess();
        cy.wait(1000);
    });

    it('happy path add food to diary every meal (100g Penne)', () => {
            //assert -> clear diary if entries exists
            NavigationPage.clickDiary();

            //Day has to be today: format: YYYY-MM-DD
            const today = new Date().toISOString().slice(0, 10);
            cy.wait(1000);
            cy.url().should('include', today);
            DiaryPage.clearDiary();
            DiaryPage.clickAddFoodToMeal(1);
            cy.wait(1000);
            cy.url().should('include', '/food/' + today + '/1');

        FoodSearchPage.setFoodSearch("Penne");
        cy.wait(500)
        FoodSearchPage.clickFirstSearchResult();
        PopUpPage.checkBreakfastIsActive();
        PopUpPage.clickLunch();
        PopUpPage.checkLunchIsActive();
        PopUpPage.checkBreakfastIsInactive()

        PopUpPage.setServingSize("100");
        PopUpPage.clickSave();
        Toast.toastMessage('Gespeichert')

        FoodSearchPage.clickFirstSearchResult();
        PopUpPage.checkBreakfastIsActive();

        PopUpPage.setServingSize("100");
        PopUpPage.clickSave();
        Toast.toastMessage('Gespeichert')

        FoodSearchPage.clickFirstSearchResult();
        PopUpPage.clickDinner();
        PopUpPage.checkDinnerIsActive();

        PopUpPage.setServingSize("100");
        PopUpPage.clickSave();
        Toast.toastMessage('Gespeichert')

        FoodSearchPage.clickFirstSearchResult();
        PopUpPage.clickSnack();
        PopUpPage.checkSnackIsActive();

        PopUpPage.setServingSize("100");
        PopUpPage.clickSave();
        Toast.toastMessage('Gespeichert')

        //assert
        NavigationPage.clickDiary();
        DiaryPage.getCaloriesFromMeal(1).should('have.text', '359');
        DiaryPage.getCaloriesFromMeal(2).should('have.text', '359');
        DiaryPage.getCaloriesFromMeal(3).should('have.text', '359');
        DiaryPage.getCaloriesFromMeal(4).should('have.text', '359');

    });
    it('Check if Navigation in diary works', () => {
        //assert -> clear diary if entries exists
        NavigationPage.clickDiary();
        //Day has to be today: format: YYYY-MM-DD
        const today = new Date().toISOString().slice(0, 10);
        cy.wait(1000);
        cy.url().should('include', today);
        DiaryPage.clickNextDay();
        cy.url().should('include', nextDay(today));
        DiaryPage.clickPreviousDay();
        cy.url().should('include', today);
        DiaryPage.clickPreviousDay();
        cy.url().should('include', previousDay(today));
        DiaryPage.clickNextDay();
        cy.url().should('include', today);
    });
    it('check if calorie calculation is correct', () => {
        NavigationPage.clickDiary();
        //Day has to be today: format: YYYY-MM-DD
        const today = new Date().toISOString().slice(0, 10);
        cy.wait(1000);
        cy.url().should('include', today);
        DiaryPage.clearDiary();
        DiaryPage.clickAddFoodToMeal(3);
        cy.wait(1000);
        cy.url().should('include', '/food/' + today + '/3');

        FoodSearchPage.setFoodSearch("Penne");
        cy.wait(500)
        FoodSearchPage.clickFirstSearchResult();
        PopUpPage.checkDinnerIsActive();

        PopUpPage.setServingSize("100");
        PopUpPage.clickSave();
        Toast.toastMessage('Gespeichert')

        FoodSearchPage.setFoodSearch("Pesto");
        cy.wait(500)
        FoodSearchPage.clickFirstSearchResult();
        PopUpPage.checkDinnerIsActive();

        PopUpPage.setServingSize("20");
        PopUpPage.clickSave();
        Toast.toastMessage('Gespeichert')

        NavigationPage.clickDiary();
        DiaryPage.getCaloriesFromMeal(3).should('have.text', '455');
    });
    it('add food from dashboard button', () => {
        NavigationPage.checkAddFoodButtonIsVisible();
        NavigationPage.clickAddFood();
        const today = new Date().toISOString().slice(0, 10);
        cy.wait(1000);
        cy.url().should('include', '/food/' + today + '/1');

        FoodSearchPage.setFoodSearch("Penne");
        cy.wait(500)
        FoodSearchPage.clickFirstSearchResult();
        PopUpPage.checkBreakfastIsActive();

        PopUpPage.setServingSize("100");
        PopUpPage.clickSave();
        Toast.toastMessage('Gespeichert')

        NavigationPage.clickDiary();
        DiaryPage.mealContainerHasAnyEntries(1);
    })

});