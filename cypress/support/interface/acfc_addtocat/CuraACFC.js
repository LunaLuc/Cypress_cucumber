class CuraACFC {
    static getChooseLocation(){
        return cy.xpath("//input[@id='northern']")
    }

    static getConfirmLocation(){
        return cy.xpath("//button[@class='mgn-location-popup-button']")
    }

    static getTapSearchForm(){
        return cy.xpath("//input[@id='search']")
    }

    static getChooseTheFirstItem(){
        return cy.xpath("//div[@class='products wrapper products-grid products-grid-3-columns']//li[1]")
    }

    static getChooseSizeOfItem(){
        return cy.xpath("//div[@class='swatch-attribute-options clearfix']//div[1]")
    }

    static getClickAddtoCart(){
        return cy.xpath("//button[@id='product-addtocart-button']")
    }

    static getClickGotoCart(){
        return cy.xpath("//div[@class='minicart-wrapper']")
    }

    static getSubtotalPrice(){
        return cy.xpath("//td[@class='col subtotal']//span[1]//span[@class='cart-price']")
    }

    static getGrandtotalPrice(){
        return cy.xpath("//tr[@class='grand totals']//td[1]//strong[1]")
    }
}
export default CuraACFC