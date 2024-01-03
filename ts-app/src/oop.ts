/**
 * 25-creating-class
 */

class Team {
  name: string;
  constructor(nameTeam: string) {
    this.name = nameTeam;
  }
}

const devTeam = new Team("Developer");
console.log(devTeam);
