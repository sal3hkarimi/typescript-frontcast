/** -----------
 * 41-decorators
 * 43-advanced-decorators
 */

function log(target: Function): void {
  console.log("logger...");
}

function addTodDom(content: string, id: string) {
  return function (_: Function) {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = content;
    }
  };
}

// @addTodDom("<h2>Product Object</h2>", "app")
class ProductCart {
  title = "Book";
  constructor() {
    console.log("Create ProductCart class");
  }
}

// const prd = new ProductCart();
