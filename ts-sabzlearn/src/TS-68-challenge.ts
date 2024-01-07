// * 1
type Admin = {
  name: string;
  privileges: string[];
};

type Teacher = {
  name: string;
  startDate: Date;
};

const showProp = (member: Admin | Teacher) => {
  if ("startDate" in member) {
    console.log(member.startDate);
  } else if ("privileges" in member) {
    console.log(member.privileges);
  }
};

const reza: Teacher = {
  name: "Reza Dolati",
  startDate: new Date(),
};

const amin: Admin = {
  name: "Reza Dolati",
  privileges: ["Accept Comment", "Remove Comment"],
};

// showProp(amin);

// * 2

type Combine = string | number;

const add = (param1: Combine, param2: Combine): Combine | void => {
  if (typeof param1 === "string" && typeof param2 === "string") {
    return param1.toString() + param2.toString();
  } else if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  }
};

// * 3

class Car {
  constructor(public name: string, public color: string, public model: number) {
    this.name = name;
    this.color = color;
    this.model = model;
  }

  drive(speed: number) {
    console.log(`${this.name} drive ${speed}(Km/h)`);
  }
}

class Truck extends Car {
  constructor(public name: string, public color: string, public model: number) {
    super(name, color, model);
  }

  load(weight: number) {
    console.log(`set ${weight}(Kg) load on ${this.name}`);
  }
}

const useCar = (car: Car | Truck) => {
  if (car instanceof Truck) {
    // car.drive(100);
  } else if (car instanceof Car) {
    // car.load(200);
  }
};

const pride = new Car("Pride", "Black", 1403);
const FH = new Truck("FH", "White", 2022);

// useCar(FH);
useCar(pride);
