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

// mobile.productInfo('info')

/** -------------------------
 * 39-interfaces-with-classes
 */

interface Car {
  brand: string;
  model: string;
  year: number;
}

class SportsCar implements Car {
  brand: string;
  model: string;
  year: number;
  speed: number;

  constructor(brand: string, model: string, year: number, speed: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.speed = speed;
  }

  accelerate() {
    console.log(
      `The ${this.year} ${this.brand} ${this.model} is accelerating.`
    );
  }
}

const mySportsCar = new SportsCar("Ferrari", "458 Italia", 2022, 200);

// mySportsCar.accelerate();
