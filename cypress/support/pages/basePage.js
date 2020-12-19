export class BasePage{

    navigate(url){
        cy.visit(url)
    }
}

export const basePage = new BasePage()
