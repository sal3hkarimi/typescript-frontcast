/** -----------
 * 45-property-decorators
 */

function Log(target: any, propertyName: string) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}

class ProductDec {
  @Log
  title: string;
  private price: number;

  set setPrice(value: number) {
    if (value > 0) {
      this.price = value;
    } else {
      console.log("Invalid Price");
    }
  }

  constructor(titlePrd: string, pricePrd: number) {
    this.title = titlePrd;
    this.price = pricePrd;
  }

  priceWithTax(tax: number) {
    return this.price * tax;
  }
}
