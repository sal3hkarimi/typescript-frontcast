"use strict";
/**
 * 38-interface
 */
const mobile = {
    title: "IPhone 13",
    price: 560,
    productInfo(describe) {
        console.log(`${describe}: ${this.price}`);
    },
};
class SportsCar {
    constructor(brand, model, year, speed) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.speed = speed;
    }
    accelerate() {
        console.log(`The ${this.year} ${this.brand} ${this.model} is accelerating.`);
    }
}
const mySportsCar = new SportsCar("Ferrari", "458 Italia", 2022, 200);
// mySportsCar.accelerate();
