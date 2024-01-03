/**
 * 25-creating-class
 * 27-this-keyword
 */

class Team {
  name: string;
  constructor(nameTeam: string) {
    this.name = nameTeam;
  }

  describe(this: Team) {
    console.log(`Team: ${this.name}`);
  }
}

const devTeam = new Team("Developer");
devTeam.describe();

const uiTeam = { name: "UI", describe: devTeam.describe };
uiTeam.describe();
