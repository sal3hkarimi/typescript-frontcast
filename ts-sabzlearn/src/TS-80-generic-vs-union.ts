class ListGen<T extends boolean | number | string> {
    private items: T[] = [];

    addItem(item: T) {
        this.items.push(item);
    }

    getItems(): T[] {
        return this.items;
    }
}

const listNumGen = new ListGen();
listNumGen.addItem(1);
listNumGen.addItem("a");
listNumGen.addItem(false);

class ListNoGen {
    private items: boolean[] | number[] | string[] = [];

    addItems(item: boolean | number | string) {
        // this.items.push(item);
        return true;
    }

    getItems() {
        return this.items;
    }
}
