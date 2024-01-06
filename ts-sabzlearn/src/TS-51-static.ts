// Static

class StudentS {
  private static _studentsList: string[] = [];

  constructor(public name: string, public email: string) {
    this.name = name;
    this.email = email;
    StudentS._studentsList.push(name);
  }

  static studentsList() {
    return StudentS._studentsList;
  }
}

const aliStudent = new StudentS("Ali", "ali@gmail.com");
const mmdPerson = new StudentS("Mohammad", "mmd@gmail.com");
const amirPerson = new StudentS("Amir", "amir@gmail.com");

console.log(StudentS.studentsList()); // -> ['Ali', 'Mohammad', 'Amir']
