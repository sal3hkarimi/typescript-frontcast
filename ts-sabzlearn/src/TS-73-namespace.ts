namespace IranKhodro {
  export let car = "Pars";

  export class Body {
    constructor(public name: string, public color: string) {
      this.name = name;
      this.color = color;
    }

    make() {
      console.log(`${this.name} Created Successfully`);
    }
  }
}

namespace Saipa {
  export let car = "Pride";
}

console.log(IranKhodro.car);
console.log(Saipa.car);

const Parse = new IranKhodro.Body("parse", "white");
Parse.make();

//https://marketsplash.com/tutorials/typescript/typescript-namespace-vs-module/#:~:text=One%20of%20the%20key%20benefits,across%20multiple%20files%20and%20directories.
