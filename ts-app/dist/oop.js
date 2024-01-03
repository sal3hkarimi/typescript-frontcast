"use strict";
/**
 * 25-creating-class
 * 27-this-keyword
 * 28-private-and-public-access
 */
class Team {
    constructor(nameTeam) {
        this.members = [];
        this.name = nameTeam;
    }
    describe() {
        console.log(`Team: ${this.name}`);
    }
    addMember(member) {
        this.members.push(member);
    }
    memberInfo() {
        console.log(`members: ${this.members.length}`);
        console.log(this.members);
    }
}
const devTeam = new Team("Developer");
// devTeam.describe();
devTeam.addMember("Mohammad");
devTeam.addMember("Joe");
// devTeam.members[5] = "ali" // -> Error: Property 'members' is private and only accessible within class 'Team'.
devTeam.memberInfo();
const uiTeam = { name: "UI", describe: devTeam.describe };
// uiTeam.describe();
