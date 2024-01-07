"use strict";
const showProp = (member) => {
    if ("startDate" in member) {
        console.log(member.startDate);
    }
    else if ("privileges" in member) {
        console.log(member.privileges);
    }
};
const reza = {
    name: "Reza Dolati",
    startDate: new Date(),
};
const amin = {
    name: "Reza Dolati",
    privileges: ["Accept Comment", "Remove Comment"],
};
const add = (param1, param2) => {
    if (typeof param1 === "string" && typeof param2 === "string") {
        return param1.toString() + param2.toString();
    }
    else if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
};
// * 3
class Car {
    name;
    color;
    model;
    constructor(name, color, model) {
        this.name = name;
        this.color = color;
        this.model = model;
        this.name = name;
        this.color = color;
        this.model = model;
    }
    drive(speed) {
        console.log(`${this.name} drive ${speed}(Km/h)`);
    }
}
class Truck extends Car {
    name;
    color;
    model;
    constructor(name, color, model) {
        super(name, color, model);
        this.name = name;
        this.color = color;
        this.model = model;
    }
    load(weight) {
        console.log(`set ${weight}(Kg) load on ${this.name}`);
    }
}
const useCar = (car) => {
    if (car instanceof Truck) {
        // car.drive(100);
    }
    else if (car instanceof Car) {
        // car.load(200);
    }
};
const pride = new Car("Pride", "Black", 1403);
const FH = new Truck("FH", "White", 2022);
// useCar(FH);
useCar(pride);
