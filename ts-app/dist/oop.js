"use strict";
/**
 * 25-creating-class
 * 27-this-keyword
 * 28-private-and-public-access
 * 29-shorthand-initialization
 * 30-readonly-properties
 */
class Team {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.members = [];
        this.id = id;
        this.name = name;
    }
    describe() {
        console.log(`Team: ${this.id}-${this.name}`);
    }
    addMember(member) {
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
    constructor(id, admins) {
        super("d1", "Develop Team");
        this.admins = admins;
    }
    addMember(name) {
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
 */
class UiTeam extends Team {
    constructor(id, reports) {
        super(id, "UI Team");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addReport(content) {
        this.reports.push(content);
        this.lastReport = content;
    }
    get recentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set recentReport(value) {
        if (!value) {
            throw new Error("You must set value!");
        }
        this.addReport(value);
    }
    printReports() {
        console.log(this.reports);
    }
}
const uiUxTeam = new UiTeam("uu1", []);
uiUxTeam.recentReport = "report-1";
console.log(uiUxTeam.recentReport); // -> new report
uiUxTeam.recentReport = "report-2";
uiUxTeam.printReports();
