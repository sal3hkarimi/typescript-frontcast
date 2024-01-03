"use strict";
/** -----------
 * 41-decorators
 * 43-advanced-decorators
 */
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
// @addTodDom("<h2>Product Object</h2>", "app")
class ProductCart {
    constructor() {
        this.title = "Book";
        console.log("Create ProductCart class");
    }
}
// const prd = new ProductCart();
