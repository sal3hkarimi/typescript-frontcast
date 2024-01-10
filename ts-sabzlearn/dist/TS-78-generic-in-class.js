"use strict";
// * 1
class HtmlElem {
    element;
    constructor(element) {
        this.element = element;
        this.element = element;
    }
    getElement() {
        return this.element;
    }
}
const elem = document.createElement("input");
const usernameInput = new HtmlElem(elem);
// * 2
class ListAny {
    items = [];
    addItem(item) {
        this.items.push(item);
        return true;
    }
    popItem() {
        return this.items.pop();
    }
}
const numberList = new ListAny();
numberList.addItem(1);
numberList.addItem(2);
numberList.addItem("3");
// console.log(numberList.popItem().toFixed()); // In Browser -> Uncaught TypeError: numberList.popItem(...).toFixed is not a function
class ListAnyGen {
    items = [];
    addItem(item) {
        this.items.push(item);
        return true;
    }
    popItem() {
        return this.items.pop();
    }
}
const newScores = new ListAnyGen();
newScores.addItem(2);
newScores.addItem(3);
newScores.addItem(4);
console.log(newScores.popItem());
