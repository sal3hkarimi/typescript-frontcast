// * abstract

abstract class PersonA {
  constructor(
    public name: string,
    readonly email: string,
    protected age: number
  ) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  abstract info(): string;
}

class StudentA extends PersonA {
  // static score: number;
  private static counts: number = 0;

  constructor(
    name: string,
    email: string,
    age: number,
    private _lessons: string[]
  ) {
    super(name, email, age);
    this._lessons = _lessons;
    StudentA.counts++;
  }

  info(): string {
    return `${this.name} Infos (Student) :))`;
  }

  public static getCounts() {
    return StudentA.counts;
  }

  get lessons(): string[] {
    return this._lessons;
  }

  set lessons(lesson: string) {
    this._lessons.push(lesson);
  }
}

class Teacher extends PersonA {
  constructor(
    name: string,
    email: string,
    age: number,
    public subject: string
  ) {
    super(name, email, age);
    this.subject = subject;
  }

  info(): string {
    return `${this.name} Infos (Teacher) :))`;
  }
}

const aliStudent = new StudentA("Ali", "ali@gmail.com", 23, ["Math"]);
const amirStudent = new StudentA("Amir", "amir@gmail.com", 21, ["Math"]);
const aminStudent = new StudentA("Amin", "amin@gmail.com", 22, ["Math"]);

const keyvanTeacher = new Teacher("Keyvan", "keyvan@gmail.com", 21, "Security");

// const aliPerson = new Person()

// console.log(aliStudent.score);
// console.log(Student.getCounts());
console.log(aminStudent.info());
console.log(keyvanTeacher.info());
