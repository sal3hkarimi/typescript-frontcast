/**
 * for use of decorators you must active ("experimentalDecorators": true) from tsconfig.ts.
 */
function Logger(constructor: Function) {
    console.log("Logger Decorator:", constructor);
    constructor.prototype.id = crypto.randomUUID();
}

@Logger
class User {
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

const aliUser = new User("ali", "ahmadi", "ali@yahoo.com");
