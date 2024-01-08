"use strict";
var IranKhodro;
(function (IranKhodro) {
    IranKhodro.car = "Pars";
    class Body {
        name;
        color;
        constructor(name, color) {
            this.name = name;
            this.color = color;
            this.name = name;
            this.color = color;
        }
        make() {
            console.log(`${this.name} Created Successfully`);
        }
    }
    IranKhodro.Body = Body;
})(IranKhodro || (IranKhodro = {}));
var Saipa;
(function (Saipa) {
    Saipa.car = "Pride";
})(Saipa || (Saipa = {}));
console.log(IranKhodro.car);
console.log(Saipa.car);
const Parse = new IranKhodro.Body("parse", "white");
Parse.make();
//https://marketsplash.com/tutorials/typescript/typescript-namespace-vs-module/#:~:text=One%20of%20the%20key%20benefits,across%20multiple%20files%20and%20directories.
