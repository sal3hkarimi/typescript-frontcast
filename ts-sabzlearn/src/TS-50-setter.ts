// Getter - Setter

class Person {
  constructor(
    public name: string,
    readonly email: string,
    protected age: number
  ) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

class Student extends Person {
  constructor(
    name: string,
    email: string,
    age: number,
    private _lessons: string[]
  ) {
    super(name, email, age);
    this._lessons = _lessons;
  }

  get lessons(): string[] {
    return this._lessons;
  }

  set lessons(lesson: string) {
    this._lessons.push(lesson);
  }
}

// const aliStudent = new Student("Ali", "ali@gmail.com", 23, ["Math"]);
// const mmdPerson = new Person("MMD", "mmd@gmail.com", 30);

console.log(aliStudent);
aliStudent.lessons = "TS";
aliStudent.lessons = "Nodejs";

console.log(aliStudent.lessons);
