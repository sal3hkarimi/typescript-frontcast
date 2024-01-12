"use strict";
// function MinLengthName(limitNumber: number) {
//     return function (target: any, propertyKey: string) {
//         console.log(target[propertyKey]);
//     };
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Client_1;
// class TeacherCollege {
//     @MinLengthName(3)
//     public firstName: string;
//     constructor(
//         firstName: string,
//         public lastName: string,
//         public age: number
//     ) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
// }
// console.log(TeacherCollege);
// ---------------------------------------------------------
// function MyDecorator(target: any, key: string) {
//     console.log(
//         `Decorating property ${key} in class ${target.constructor.name}`
//     );
// }
// class MyClass {
//     @MyDecorator
//     private _myVariable: string = "";
//     @MyDecorator
//     get myVariable(): string {
//         return this._myVariable;
//     }
//     set myVariable(value: string) {
//         this._myVariable = value;
//     }
// }
// const myInstance = new MyClass();
// myInstance.myVariable = "Hello, Decorator!";
// console.log(myInstance.myVariable);
// ---------------------------------------------------------
//https://refine.dev/blog/typescript-decorators/#method-decorators-in-typescript
// class User {
//     private static userType: string = "Generic";
//     private _email: string;
//     public username: string;
//     public addressLine1: string = "";
//     public addressLine2: string = "";
//     public country: string = "";
//     constructor(username: string, email: string) {
//       this.username = username;
//       this._email = email;
//     }
//     get userType() {
//       return User.userType;
//     }
//     get email() {
//       return this._email;
//     }
//     set email(newEmail: string) {
//       this._email = newEmail;
//     }
//     address(): any {
//       return `${this.addressLine1}\n${this.addressLine2}\n${this.country}`;
//     }
//   }
//   const p = new User("exampleUser", "example@exmaple.com");
//   p.addressLine1 = "1, New Avenue";
//   p.addressLine2 = "Bahcelievler, Istanbul";
let Client = class Client {
    static { Client_1 = this; }
    static userType = "Generic";
    _email;
    username;
    addressLine1 = "";
    addressLine2 = "";
    country = "";
    constructor(username, email) {
        this.username = username;
        this._email = email;
    }
    get userType() {
        return Client_1.userType;
    }
    get email() {
        return this._email;
    }
    set email(newEmail) {
        this._email = newEmail;
    }
    address() {
        return `${this.addressLine1}\n${this.addressLine2}\n${this.country}`;
    }
};
__decorate([
    required
], Client.prototype, "_email", void 0);
__decorate([
    required
], Client.prototype, "username", void 0);
__decorate([
    enumerable(false)
], Client.prototype, "userType", null);
__decorate([
    deprecated
], Client.prototype, "address", null);
Client = Client_1 = __decorate([
    frozen
], Client);
const p = new Client("exampleUser", "example@example.com");
p.addressLine1 = "1, New Avenue";
p.addressLine2 = "Bahcelievler, Istanbul";
function frozen(target) {
    Object.freeze(target);
    Object.freeze(target.prototype);
}
console.log(Object.isFrozen(Client)); // true
// Client.addNewProp = "Trying to add new prop value"; // [ERR]: Cannot add property addNewProp, object is not extensible
console.log(Object.isFrozen(new Client("example", "example@example.com"))); // false
function required(target, key) {
    let currentValue = target[key];
    Object.defineProperty(target, key, {
        set: (newValue) => {
            if (!newValue) {
                throw new Error(`${key} is required.`);
            }
            currentValue = newValue;
        },
        get: () => currentValue,
    });
}
// const p = new Client("", "example@example.com"); // [ERR]: username is required.
const u = new Client("example", ""); // [ERR]: _email is required.
function enumerable(isEnumerable) {
    return (target, key, descriptor) => {
        descriptor.enumerable = isEnumerable;
        console.log("The enumerable property of this member is set to: " +
            descriptor.enumerable);
    };
}
function deprecated(target, key, descriptor) {
    const originalDef = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Warning: ${key}() is deprecated. Use other methods instead.`);
        return originalDef.apply(this, args);
    };
    return descriptor;
}
// const newClient = new Client()
