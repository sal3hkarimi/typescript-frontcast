// function MinLengthName(limitNumber: number) {
//     return function (target: any, propertyKey: string) {
//         console.log(target[propertyKey]);
//     };
// }

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

@frozen
class Client {
    private static userType: string = "Generic";

    @required
    private _email: string;

    @required
    public username: string;

    public addressLine1: string = "";
    public addressLine2: string = "";
    public country: string = "";

    constructor(username: string, email: string) {
        this.username = username;
        this._email = email;
    }

    @enumerable(false)
    get userType() {
        return Client.userType;
    }

    get email() {
        return this._email;
    }

    set email(newEmail: string) {
        this._email = newEmail;
    }

    @deprecated
    address(): any {
        return `${this.addressLine1}\n${this.addressLine2}\n${this.country}`;
    }
}

const p = new Client("exampleUser", "example@example.com");
p.addressLine1 = "1, New Avenue";
p.addressLine2 = "Bahcelievler, Istanbul";

function frozen(target: Function) {
    Object.freeze(target);
    Object.freeze(target.prototype);
}

console.log(Object.isFrozen(Client)); // true
// Client.addNewProp = "Trying to add new prop value"; // [ERR]: Cannot add property addNewProp, object is not extensible
console.log(Object.isFrozen(new Client("example", "example@example.com"))); // false

function required(target: any, key: string) {
    let currentValue = target[key];

    Object.defineProperty(target, key, {
        set: (newValue: string) => {
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

function enumerable(isEnumerable: boolean) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        descriptor.enumerable = isEnumerable;
        console.log(
            "The enumerable property of this member is set to: " +
                descriptor.enumerable
        );
    };
}

function deprecated(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalDef = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(
            `Warning: ${key}() is deprecated. Use other methods instead.`
        );
        return originalDef.apply(this, args);
    };
    return descriptor;
}

// const newClient = new Client()
