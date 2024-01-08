"use strict";
/**
 * function without overloading
 */
function totalParams(p1, p2) {
    if (typeof p1 === "number" && typeof p2 === "number") {
        return p1 + p2;
    }
    if (typeof p1 === "string" && typeof p2 === "string") {
        return p1.toString() + p2.toString();
    }
}
const resultTotal = totalParams("abc", "def");
/**
 * function with overloading
 */
function totalPrm(p1, p2) {
    if (typeof p1 === "number" && typeof p2 === "number") {
        return p1 + p2;
    }
    if (typeof p1 === "string" && typeof p2 === "string") {
        return p1.toString() + p2.toString();
    }
    return "";
}
const resultTotalPrm = totalPrm("abc", "cde");
resultTotalPrm.split(""); // -> OK
