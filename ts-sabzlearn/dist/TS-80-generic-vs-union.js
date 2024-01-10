"use strict";
class ListGen {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    getItems() {
        return this.items;
    }
}
const listNumGen = new ListGen();
listNumGen.addItem(1);
listNumGen.addItem("a");
listNumGen.addItem(false);
class ListNoGen {
    items = [];
    addItems(item) {
        // this.items.push(item);
        return true;
    }
    getItems() {
        return this.items;
    }
}
