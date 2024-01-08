function echoStr(param: string) {
  return param;
}

function echoNum(param: number) {
  return param;
}

function echoAny(param: any): any {
  return param;
}

function echo<T>(param: T): T {
  return param;
}

const resultEcho: string = echo<string>("JS");
resultEcho.length;

const resultEchoNum: number = echo<number>(23);

function mergeObjs(obj1: object, obj2: object): object {
  return { ...obj1, ...obj2 };
}

function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const personData = mergeObjs({ name: "sal3h" }, { age: 23 });
const personMerge = merge({ name: "sla3h" }, { age: 26 });
personMerge.age;
