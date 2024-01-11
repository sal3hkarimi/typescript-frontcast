"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function SetCourse(target, methodName, decorator) {
    console.log("target |>", target);
    console.log("methodName |>", methodName);
    console.log("describe |>", decorator);
    const setCourseMain = decorator.value;
    decorator.value = function (course) {
        setCourseMain.call(this, {
            id: crypto.randomUUID(),
            name: course,
        });
    };
}
class StudentCourse {
    firstName;
    lastName;
    email;
    courses = [];
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    setCourse(course) {
        this.courses.push(course);
    }
    getCourses() {
        console.log(this.courses);
    }
}
__decorate([
    SetCourse
], StudentCourse.prototype, "setCourse", null);
const aliCourse = new StudentCourse("Ali", "Ahmadi", "aliahmadi@gmail.com");
aliCourse.setCourse("JS");
aliCourse.getCourses();
