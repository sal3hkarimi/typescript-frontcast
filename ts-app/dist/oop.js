"use strict";
/**
 * 25-creating-class
 * 27-this-keyword
 */
class Team {
    constructor(nameTeam) {
        this.name = nameTeam;
    }
    describe() {
        console.log(`Team: ${this.name}`);
    }
}
const devTeam = new Team("Developer");
devTeam.describe();
const uiTeam = { name: "UI", describe: devTeam.describe };
uiTeam.describe();
