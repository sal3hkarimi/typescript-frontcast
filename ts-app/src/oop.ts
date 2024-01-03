/**
 * 25-creating-class
 * 27-this-keyword
 * 28-private-and-public-access
 * 29-shorthand-initialization
 * 30-readonly-properties
 */

class Team {
  protected members: string[] = [];

  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  describe() {
    console.log(`Team: ${this.id}-${this.name}`);
  }

  addMember(member: string) {
    // this.id = Math.random() // -> error TS2540: Cannot assign to 'id' because it is a read-only property.
    this.members.push(member);
  }

  memberInfo() {
    console.log(`members: ${this.members.length}`);
    console.log(this.members);
  }
}

const devTeam = new Team("t1", "Developer");
// devTeam.describe();

devTeam.addMember("Mohammad");
devTeam.addMember("Joe");
// devTeam.members[5] = "ali" // -> Error: Property 'members' is private and only accessible within class 'Team'.
// devTeam.memberInfo();

const uiTeam = { name: "UI", describe: devTeam.describe };
// uiTeam.describe();

// -------------------------------------------------------------------

/**
 * 31-inheritance
 * 32-protected-modifier
 */

class DevTeam extends Team {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super("d1", "Develop Team");
    this.admins = admins;
  }

  addMember(name: string) {
    if (name === "admin") {
      return console.error("You con't add 'admin' to members!");
    }

    this.members.push(name);
  }
}

const frontTeam = new DevTeam("ft1", ["Mohammad"]);
// frontTeam.addMember("admin");
frontTeam.addMember("user-1");
// frontTeam.memberInfo()

// -------------------------------------------------

/**
 * 33-getters
 * 34-setters
 * 35-static-methods
 */

class UiTeam extends Team {
  private lastReport: string;
  constructor(id: string, private reports: string[]) {
    super(id, "UI Team");

    this.lastReport = reports[0];
  }

  private addReport(content: string) {
    this.reports.push(content);
    this.lastReport = content;
  }

  get recentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error("No report found.");
  }

  set recentReport(value: string) {
    if (!value) {
      throw new Error("You must set value!");
    }

    this.addReport(value);
  }

  printReports() {
    console.log(this.reports);
  }

  static createName(name: string) {
    return { name };
  }
}

const uiUxTeam = new UiTeam("uu1", []);
uiUxTeam.recentReport = "report-1";
// console.log(uiUxTeam.recentReport); // -> new report
uiUxTeam.recentReport = "report-2";
// uiUxTeam.printReports();

const crName = UiTeam.createName("name");
// console.log(crName);

// ---------------------------------------

/**
 * 36-abstract-classes
 */

type storageType = 64 | 128 | 256;

abstract class SmartPhone {
  nameSP: string;

  constructor(name: string) {
    this.nameSP = name;
  }

  abstract storage(): storageType;
}

class Mobile extends SmartPhone {
  constructor() {
    super("Mobile");
  }

  storage(): storageType {
    return 128;
  }
}
