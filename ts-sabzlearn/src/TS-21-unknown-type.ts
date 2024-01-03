let test: unknown = 23;

if (typeof test === "number") {
  test++;
  console.log(test);
}

if (typeof test === "string") {
  console.log(test.length);
}


