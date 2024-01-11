"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * for use of decorators you must active ("experimentalDecorators": true) from tsconfig.ts.
 */
function Logger(constructor) {
    console.log("Logger Decorator:", constructor);
    constructor.prototype.id = crypto.randomUUID();
}
let User = class User {
    firstName;
    lastName;
    email;
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    speak(word) {
        console.log(`${this.firstName} say ${word}`);
    }
};
User = __decorate([
    Logger
], User);
const aliUser = new User("ali", "ahmadi", "ali@yahoo.com");
