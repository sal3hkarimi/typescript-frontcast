"use strict";
/** -----------
 * 41-decorators
 * 43-advanced-decorators
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function log(target) {
    console.log("logger...");
}
function addTodDom(content, id) {
    return function (_) {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = content;
        }
    };
}
let Product = class Product {
    constructor() {
        this.title = "Book";
        console.log("Create Product class");
    }
};
Product = __decorate([
    addTodDom("<h2>Product Object</h2>", "app")
], Product);
const prd = new Product();
