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
devTeam.describe();
devTeam.addMember("Mohammad");
devTeam.addMember("Joe");
// devTeam.members[5] = "ali" // -> Error: Property 'members' is private and only accessible within class 'Team'.
// devTeam.memberInfo();
const uiTeam = { name: "UI", describe: devTeam.describe };
// uiTeam.describe();
