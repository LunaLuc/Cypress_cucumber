Cypress.Commands.add("SearchinGoogle",(keysearch)=>{
     cy.visit('https://www.google.com.vn/?hl=vi')
        cy.xpath("//input[@name='q']")
        .type(keysearch)
        .type('{enter}')
})
