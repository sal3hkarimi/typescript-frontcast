"use strict";
let price = "12$";
let priceStrW1 = price; // way 1
let priceStrW2 = price; // way 2
// access to method string in type unknown
let lengthPrice = price.length;
// don't convert type in TS develop
let num_1 = "12";
let num_2 = "23";
const totalNumbers = num_1 + num_2; // -> '1223'
