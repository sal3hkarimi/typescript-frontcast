var IranKhodro;
(function (IranKhodro) {
    IranKhodro.car = "Pars";
    var Body = /** @class */ (function () {
        function Body(name, color) {
            this.name = name;
            this.color = color;
            this.name = name;
            this.color = color;
        }
        Body.prototype.make = function () {
            console.log("".concat(this.name, " Created Successfully"));
        };
        return Body;
    }());
    IranKhodro.Body = Body;
})(IranKhodro || (IranKhodro = {}));
var Saipa;
(function (Saipa) {
    Saipa.car = "Pride";
})(Saipa || (Saipa = {}));
// console.log(IranKhodro.car);
// console.log(Saipa.car);
var Parse = new IranKhodro.Body("parse", "white");
// Parse.make();
//https://marketsplash.com/tutorials/typescript/typescript-namespace-vs-module/#:~:text=One%20of%20the%20key%20benefits,across%20multiple%20files%20and%20directories.
/// <reference path="TS-73-namespace.ts" />
console.log(IranKhodro.car);
// tsc --outfile ./dist/TS-74-directive.js ./src/TS-74-directive.ts
