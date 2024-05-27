const { SelectablePage } = require("../pageObjects/selectable.page")

describe("demoqa", () => {
  context('Selectable',()=>{
    beforeEach(()=>{
      SelectablePage.visit();
    });
    it("Select Items",()=>{
      SelectablePage.selectGridTab().click();

      SelectablePage.selectGrid().contains('Two').click()
      SelectablePage.selectGrid().contains('Four').click()
      SelectablePage.selectGrid().contains('Six').click()
      SelectablePage.selectGrid().contains('Eight').click()

      SelectablePage.selectGrid().contains('Two').should('have.class','active')
      SelectablePage.selectGrid().contains('Four').should('have.class','active')
      SelectablePage.selectGrid().contains('Six').should('have.class','active')
      SelectablePage.selectGrid().contains('Eight').should('have.class','active')

      SelectablePage.selectGrid().contains('One').should('not.have.class','active')
      SelectablePage.selectGrid().contains('Three').should('not.have.class','active')
      SelectablePage.selectGrid().contains('Five').should('not.have.class','active')
      SelectablePage.selectGrid().contains('Seven').should('not.have.class','active')
      SelectablePage.selectGrid().contains('Nine').should('not.have.class','active')
    })
  })
})