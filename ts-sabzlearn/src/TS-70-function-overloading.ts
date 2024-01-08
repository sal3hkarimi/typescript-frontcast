type strOrNum = string | number;
/**
 * function without overloading
 */

function totalParams(p1: strOrNum, p2: strOrNum): strOrNum | void {
  if (typeof p1 === "number" && typeof p2 === "number") {
    return p1 + p2;
  }
  if (typeof p1 === "string" && typeof p2 === "string") {
    return p1.toString() + p2.toString();
  }
}

const resultTotal = totalParams("abc", "def");
// console.log(resultTotal.split("")); // -> Error TS2339: Property 'split' does not exist on type 'void | strOrNum'.

/* function overloading */
function totalPrm(p1: string, p2: string): string;
function totalPrm(p1: number, p2: number): number;

/**
 * function with overloading
 */
function totalPrm(p1: strOrNum, p2: strOrNum): strOrNum {
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
