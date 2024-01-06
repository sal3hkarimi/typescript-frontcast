"use strict";
// Getter - Setter
class Person {
    name;
    email;
    age;
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
class Student extends Person {
    _lessons;
    constructor(name, email, age, _lessons) {
        super(name, email, age);
        this._lessons = _lessons;
        this._lessons = _lessons;
    }
    get lessons() {
        return this._lessons;
    }
    set lessons(lesson) {
        this._lessons.push(lesson);
    }
}
// const aliStudent = new Student("Ali", "ali@gmail.com", 23, ["Math"]);
// const mmdPerson = new Person("MMD", "mmd@gmail.com", 30);
console.log(aliStudent);
aliStudent.lessons = "TS";
aliStudent.lessons = "Nodejs";
console.log(aliStudent.lessons);
