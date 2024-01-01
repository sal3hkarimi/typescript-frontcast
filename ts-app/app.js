/**
 * 10-enums
 */
var Color;
(function (Color) {
    Color[Color["BLUE"] = 0] = "BLUE";
    Color[Color["RED"] = 1] = "RED";
    Color[Color["GREEN"] = 2] = "GREEN";
})(Color || (Color = {}));
var product = {
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
    var result;
    if (typeof input_1 === "number" && typeof input_2 === "number") {
        result = input_1 + input_2;
    }
    else {
        result = input_1.toString() + input_2.toString();
    }
    return result;
}
var totalNumber = total(12, 5);
var totalString = total("Ali", " Mohammadi");
// console.log(totalNumber);
// console.log(totalString);
/**
 * 13-literal-types
 */
function totalLit(input_1, input_2, resultType // literal-types
) {
    var result;
    if ((typeof input_1 === "number" && typeof input_2 === "number") ||
        resultType === "isNumber") {
        result = +input_1 + +input_2;
    }
    else {
        result = input_1.toString() + input_2.toString();
    }
    return result;
}
var totalNumberLit = totalLit(12, 5, "isNumber");
var totalStringLit = totalLit("Ali", " Mohammadi", "isString");
var joeAge = 23;
var joeJob = "teacher";
console.log(joeAge, joeJob);
