"use strict";
/** -----------
 * 45-property-decorators
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(target, propertyName) {
    console.log("Property Decorator");
    console.log(target, propertyName);
}
class ProductDec {
    set setPrice(value) {
        if (value > 0) {
            this.price = value;
        }
        else {
            console.log("Invalid Price");
        }
    }
    constructor(titlePrd, pricePrd) {
        this.title = titlePrd;
        this.price = pricePrd;
    }
    priceWithTax(tax) {
        return this.price * tax;
    }
}
__decorate([
    Log
], ProductDec.prototype, "title", void 0);
