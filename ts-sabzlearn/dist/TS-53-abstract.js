"use strict";
// * abstract
class PersonA {
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
class StudentA extends PersonA {
    _lessons;
    // static score: number;
    static counts = 0;
    constructor(name, email, age, _lessons) {
        super(name, email, age);
        this._lessons = _lessons;
        this._lessons = _lessons;
        StudentA.counts++;
    }
    info() {
        return `${this.name} Infos (Student) :))`;
    }
    static getCounts() {
        return StudentA.counts;
    }
    get lessons() {
        return this._lessons;
    }
    set lessons(lesson) {
        this._lessons.push(lesson);
    }
}
// class Teacher extends PersonA {
//   constructor(
//     name: string,
//     email: string,
//     age: number,
//     public subject: string
//   ) {
//     super(name, email, age);
//     this.subject = subject;
//   }
//   info(): string {
//     return `${this.name} Infos (Teacher) :))`;
//   }
// }
const aliStudent = new StudentA("Ali", "ali@gmail.com", 23, ["Math"]);
const amirStudent = new StudentA("Amir", "amir@gmail.com", 21, ["Math"]);
const aminStudent = new StudentA("Amin", "amin@gmail.com", 22, ["Math"]);
// const keyvanTeacher = new Teacher("Keyvan", "keyvan@gmail.com", 21, "Security");
// const aliPerson = new Person()
// console.log(aliStudent.score);
// console.log(Student.getCounts());
// console.log(aminStudent.info());
// console.log(keyvanTeacher.info());
