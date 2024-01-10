// * 1
class HtmlElem<T> {
    constructor(private element: T) {
        this.element = element;
    }

    getElement() {
        return this.element;
    }
}

const elem = document.createElement("input");
const usernameInput = new HtmlElem<HTMLInputElement>(elem);

// * 2

class ListAny {
    private items: any[] = [];

    addItem(item: any) {
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

class ListAnyGen<T> {
    private items: T[] = [];

    addItem(item: T) {
        this.items.push(item);
        return true;
    }

    popItem(): T | undefined {
        return this.items.pop();
    }
}

const newScores = new ListAnyGen();

newScores.addItem(2);
newScores.addItem(3);
newScores.addItem(4);

console.log(newScores.popItem());
