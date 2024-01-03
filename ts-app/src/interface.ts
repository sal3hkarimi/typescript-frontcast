/**
 * 38-interface
 */

interface Product {
  title: string;
  price: number;

  productInfo(describe: string): void;
}

const mobile: Product = {
  title: "IPhone 13",
  price: 560,
  productInfo(describe) {
    console.log(`${describe}: ${this.price}`);
  },
};

mobile.productInfo('info')