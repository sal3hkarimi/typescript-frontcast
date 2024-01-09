"use strict";
// exm 1
function mergeUser(name, fav) {
    return { ...name, fav };
}
const mergeUser1 = mergeUser({ name: "sal3h" }, ["Js", "Nodejs"]);
mergeUser1.fav;
// exm 2
function echoList(param) {
    console.log(param.length);
    return param[0];
}
function echoWidth(param) {
    console.log(param.length);
    return param;
}
