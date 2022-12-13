import {Given, When,Then} from "@badeball/cypress-cucumber-preprocessor";
import CuraACFC from "../../support/interface/acfc_addtocat/CuraACFC";


Given("go to url site", ()=> {
    cy.visit('https://www.acfc.com.vn/', {failOnStatusCode: false})
    cy.wait(3000)

    cy.viewport(1920, 1080)

    Cypress.on('uncaught:exception', function (err, runnable) {
        return false
    })
});

When("choose and confirm location", ()=>  {
    CuraACFC.getChooseLocation().click({force: true})
    cy.wait(3000)
    CuraACFC.getConfirmLocation().click()
    cy.wait(3000)
});

When("search with Dress" ,()=>  {
    CuraACFC.getTapSearchForm()
        .type('Dress')
        .type('{enter}')
});

When("select first item and choose size", ()=>  {
    CuraACFC.getChooseTheFirstItem().click()
    cy.wait(3000)
    CuraACFC.getChooseSizeOfItem().click()
    cy.wait(3000)
});

When("click add to card", ()=>{
    CuraACFC.getClickAddtoCart().click()
    CuraACFC.getClickGotoCart().click()
})

Then("verify go to cart with new URL which includes cart", ()=>{
    cy.url().should('include', 'checkout/cart')
    cy.wait(3000)
})
Then("verify price",()=>{
    const normalizeText = (inputString) => inputString.replace(/\s/g, '').toLowerCase()

    //col subtotal price of items
    let firstPrice

    //grand total price for items
    let secondPrice
    CuraACFC.getSubtotalPrice()
        .find('.price')
        .then(($price) => {
            firstPrice = normalizeText($price.text())
        })
    CuraACFC.getGrandtotalPrice()
        .find('.price')
        .then(($price) => {
            secondPrice = normalizeText($price.text())

            expect(secondPrice, 'second price').to.equal(firstPrice)
        })
    cy.log('Verified!')
})