import { BasePage } from "./base.page";
export class SelectablePage extends BasePage{
    static get url(){
        return "/selectable";
    }
    static selectGridTab(){
        return cy.get("[id=demo-tab-grid]")
    }
    static selectGrid(){
        return cy.get("[id=gridContainer]")
    }
}