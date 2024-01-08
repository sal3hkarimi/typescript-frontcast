"use strict";
function echoStr(param) {
    return param;
}
function echoNum(param) {
    return param;
}
function echoAny(param) {
    return param;
}
function echo(param) {
    return param;
}
const resultEcho = echo("JS");
resultEcho.length;
const resultEchoNum = echo(23);
function mergeObjs(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
function merge(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const personData = mergeObjs({ name: "sal3h" }, { age: 23 });
const personMerge = merge({ name: "sla3h" }, { age: 26 });
personMerge.age;
