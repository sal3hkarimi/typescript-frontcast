// exm 1
function mergeUser<T extends object, U extends string[]>(
  name: T,
  fav: U
): T & { fav: U } {
  return { ...name, fav };
}

const mergeUser1 = mergeUser({ name: "sal3h" }, ["Js", "Nodejs"]);
mergeUser1.fav;

// exm 2
function echoList<T>(param: T[]): T {
  console.log(param.length);
  return param[0];
}

// exm3
interface Width {
  length: number;
}

function echoWidth<T extends Width>(param: T): T {
  console.log(param.length);
  return param;
}
