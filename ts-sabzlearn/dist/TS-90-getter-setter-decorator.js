"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function GetProduct(target, methodName, decorator) {
    const mainGetProduct = decorator.get;
    const mainSetProduct = decorator.set;
    decorator.set = function (product) {
        mainSetProduct?.call(this, { id: crypto.randomUUID(), name: product });
    };
    decorator.get = function () {
        const productList = mainGetProduct?.call(this);
        console.log(productList);
        return productList.map((p) => p.name);
    };
}
class Product {
    _productList = [];
    set productList(product) {
        this._productList.push(product);
    }
    get productList() {
        return this._productList;
    }
}
__decorate([
    GetProduct
], Product.prototype, "productList", null);
const pList = new Product();
pList.productList = "Javascript";
pList.productList = "Typescript";
pList.productList = "Wordpress";
console.log(pList.productList);
