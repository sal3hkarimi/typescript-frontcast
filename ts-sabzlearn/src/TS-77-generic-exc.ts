interface Type {
    length: number;
    indexOf: (param: any) => number;
}

function describe<T extends Type>(param: T): [string, T] {
    let text = "zero (0) items";

    if (param.length) {
        text = `${param.length} items`;
    }
    return [text, param];
}

const result = describe("7learn.com");
const result2 = describe([1, 2, 3, 4]);

// const result3 = describe(13); // -> error TS2345: Argument of type 'number' is not assignable to parameter of type 'Type'.
