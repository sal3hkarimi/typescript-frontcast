"use strict";
/**
 * 10-enums
 */
var Color;
(function (Color) {
    Color[Color["BLUE"] = 0] = "BLUE";
    Color[Color["RED"] = 1] = "RED";
    Color[Color["GREEN"] = 2] = "GREEN";
})(Color || (Color = {}));
const product = {
    title: "book",
    price: 23,
    discount: ["atm", "smr"],
    cat: [1, "learning"],
    color: Color.BLUE,
};
/**
 * 12-union-types
 */
function total(input_1, input_2) {
    let result;
    if (typeof input_1 === "number" && typeof input_2 === "number") {
        result = input_1 + input_2;
    }
    else {
        result = input_1.toString() + input_2.toString();
    }
    return result;
}
const totalNumber = total(12, 5);
const totalString = total("Ali", " Mohammadi");
// console.log(totalNumber);
// console.log(totalString);
/**
 * 13-literal-types
 */
function totalLit(input_1, input_2, resultType // literal-types
) {
    let result;
    if ((typeof input_1 === "number" && typeof input_2 === "number") ||
        resultType === "isNumber") {
        result = +input_1 + +input_2;
    }
    else {
        result = input_1.toString() + input_2.toString();
    }
    return result;
}
const totalNumberLit = totalLit(12, 5, "isNumber");
const totalStringLit = totalLit("Ali", " Mohammadi", "isString");
const joeAge = 23;
const joeJob = "teacher";
// console.log(joeAge, joeJob);
/**
 * 15-function-return-type
 */
// number type
function typeNumberMethod() {
    return 12;
}
// void type
function typeVoidMethod() {
    console.log("function with type void");
}
/** ----------------
 * 16-functions-type
 */
// let combine = Function;
let combine;
function student(name, age) {
    return `${name}: ${age}`;
}
combine = student;
// console.log(combine("sal3h", 333));
/** ----------------
 * 17-callbacks
 */
function getProduct(nameProduct, priceProduct, cb) {
    cb(nameProduct, priceProduct);
}
// getProduct("mobile", 23, (a, b) => console.log(a, b)); // -> mobile 23
/** ----------------
 * 18-unknown-type
 */
let inputUnk;
let courseStr;
inputUnk = 23;
inputUnk = "js";
if (typeof inputUnk === "string") {
    courseStr = inputUnk;
}
