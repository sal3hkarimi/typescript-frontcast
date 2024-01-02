/**
 * 10-enums
 */

enum Color {
  BLUE,
  RED,
  GREEN,
}

const product: {
  title: string;
  price: number;
  discount: string[]; // 9-tuples-type
  cat: [number, string]; // 9-tuples-type
  color: Color;
} = {
  title: "book",
  price: 23,
  discount: ["atm", "smr"],
  cat: [1, "learning"],
  color: Color.BLUE,
};

/**
 * 12-union-types
 */
function total(input_1: number | string, input_2: number | string) {
  let result;
  if (typeof input_1 === "number" && typeof input_2 === "number") {
    result = input_1 + input_2;
  } else {
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
function totalLit(
  input_1: number | string,
  input_2: number | string,
  resultType: "isNumber" | "isString" // literal-types
) {
  let result;
  if (
    (typeof input_1 === "number" && typeof input_2 === "number") ||
    resultType === "isNumber"
  ) {
    result = +input_1 + +input_2;
  } else {
    result = input_1.toString() + input_2.toString();
  }
  return result;
}

const totalNumberLit = totalLit(12, 5, "isNumber");
const totalStringLit = totalLit("Ali", " Mohammadi", "isString");

// console.log(totalNumberLit);
// console.log(totalStringLit);

/**
 * 14-type-aliases
 */

type combine = string | number;
type ageType = "toctor" | "teacher";

const joeAge: combine = 23;
const joeJob: ageType = "teacher";

console.log(joeAge, joeJob);

/**
 * 15-function-return-type
 */

// number type
function typeNumberMethod(): number {
  return 12;
}
// void type
function typeVoidMethod(): void {
  console.log("function with type void");
}

/** ----------------
 * 16-functions-type
 */

// let combine = Function;
let combine: (name: string, age: number) => string;

function student(name, age) {
  return `${name}: ${age}`;
}

combine = student;

// console.log(combine("sal3h", 333));

/** ----------------
 * 17-callbacks
 */

function getProduct(
  nameProduct: string,
  priceProduct: number,
  cb: (np: string, pp: number) => void
) {
  cb(nameProduct, priceProduct);
}

// getProduct("mobile", 23, (a, b) => console.log(a, b)); // -> mobile 23


