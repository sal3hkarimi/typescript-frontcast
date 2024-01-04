"use strict";
/**
 * TS-23-const-assertion
 * const assertion (const cast)
 */
let nameWebsite = "7learn.com";
const listNumber = [1, 2, 3, 4, 5];
// listNumber.push(6) // -> error TS2339: Property 'push' does not exist on type 'readonly [1, 2, 3, 4, 5]'.
const userSchool = {
    id: 133,
    name: "Sal3h",
};
// userSchool.id = 23 // -> Cannot assign to 'id' because it is a read-only property.
/**
 * usage in methods
 * ---------------- */
function totalNum(num_1, num_2) {
    return num_1 + num_2;
}
const numbersReadonly = [1, 2];
const numbersNoReadOnly = [1, 2];
const asConst = totalNum(...numbersReadonly); // Right
// const noAsConst = totalNum(...numbersNoReadOnly); // -> Error TS2556: A spread argument must either have a tuple type or be passed to a rest parameter.
/**
 * usage in object
 * --------------- */
const favorites = ["JS", "Node.Js"];
const user = {
    id: 1,
    name: "sal3h",
    favorites,
};
user.favorites.push("React.Js"); // Right -> ["JS", "Node.Js", "React.Js"]
/**
 * usage in if
 * ----------- */
let actions = [{ type: "ADD_TODO" }, { type: "REMOVE_TODO" }];
let actionsNoConst = [{ type: "ADD_TODO" }, { type: "REMOVE_TODO" }];
if (actionsNoConst[0].type === "UPDATE_TODO")
    console.log("Update todo..."); // -> Right
// if (actions[0].type === "UPDATE_TODO") console.log("Update todo..."); // -> Error TS2367: This comparison appears to be unintentional because the types '"ADD_TODO"' and '"UPDATE_TODO"' have no overlap.
