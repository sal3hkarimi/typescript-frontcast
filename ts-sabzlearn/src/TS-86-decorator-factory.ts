/**
 * for use of decorators you must active ("experimentalDecorators": true) from tsconfig.ts.
 */
function LoggerUser(id: string) {
    return function (constructor: Function) {
        console.log("Logger Decorator:", constructor);
        constructor.prototype.id = id;
    };
}

@LoggerUser(crypto.randomUUID())
class UserClass {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    speak(word: string) {
        console.log(`${this.firstName} say ${word}`);
    }
}
