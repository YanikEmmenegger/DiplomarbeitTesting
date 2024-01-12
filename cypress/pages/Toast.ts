class Toast {
    elements = {
        toast: () => cy.get(".toast", { timeout: 10000 })
    }

    toastAction(text: string) {
        this.elements.toast().should('exist');
        this.elements.toast().contains(text);
        this.elements.toast().should('not.exist');
    }
}

export default new Toast();