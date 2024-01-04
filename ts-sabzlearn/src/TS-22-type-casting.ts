let price: unknown = "12$";

let priceStrW1 = price as string; // way 1
let priceStrW2 = <string>price; // way 2

// access to method string in type unknown
let lengthPrice = (price as string).length;

// don't convert type in TS develop
let num_1: unknown = "12";
let num_2: unknown = "23";

const totalNumbers = (num_1 as number) + (num_2 as number); // -> '1223'
