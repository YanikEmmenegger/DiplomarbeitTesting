class FoodSearchPage {
    elements = {
        inputFoodSearch: () => cy.get('#food-input-search').should('exist'),
        searchResult: () => cy.get('.food-li-item'),
    }

    clickFirstSearchResult() {
        this.elements.searchResult().first().click();
    }

    setFoodSearch(foodName: string) {
        this.elements.inputFoodSearch().clear();
        foodName !== "__NULL__" && this.elements.inputFoodSearch().type(foodName);
    }
}

export default new FoodSearchPage()