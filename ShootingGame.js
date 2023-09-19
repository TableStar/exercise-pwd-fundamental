class ShootingGame {
  constructor(_player1, _player2) {
    this.player1 = _player1;
    this.player2 = _player2;
  }
  getRandomItem = () => {
    let option = ["zhp","zpow", "pow", "hp"];
    return option[Math.floor(Math.random() * option.length)];
  };

  start = () => {
    let output = "";
    while (true) {
      output += `STANDBY PHASE--> \n ${this.player1.showStatus()}\n ${this.player2.showStatus()}\n`;
      // random item
      this.player1.useItem(this.getRandomItem());
      this.player2.useItem(this.getRandomItem());
      output += `BUFF PHASE -- > \n ${this.player1.showStatus()}\n ${this.player2.showStatus()}\n`;
      console.log(this.player1.showStatus());
      console.log(this.player2.showStatus());
      // hit
      this.player1.hit(this.player2.power);
      this.player2.hit(this.player1.power);
      output += `HIT PHASE -- > \n ${this.player1.showStatus()}\n ${this.player2.showStatus()}\n`;
      if (this.player1.health <= 0) {
        return (output += `${this.player2.name} WIN`);
      } else if (this.player2.health <= 0) {
        return (output += `${this.player1.name} WIN`);
      }
    }
  };
}

class Player {
  constructor(_name) {
    this.name = _name;
    this.health = 100;
    this.power = 10;
  }

  hit = (powers) => {
    this.health -= powers;
  };

  useItem = (item) => {
    if (item == "hp") {
      return (this.health += 10);
    }
    if (item == "zhp") {
      return this.health;
    }
    if (item == "pow") {
      return (this.power += 10);
    }
    if (item == "zpow") {
      return this.power;
    }
  };

  showStatus = () => {
    let res = "";
    res += `Player ${this.name} (Health = ${this.health} | Power= ${this.power})`;
    return res;
  };
}
let player1 = new Player("Dark");
let player2 = new Player("Carter");

//console.log(player1.hit(90)); -->alasan kenapa tadi health player1 start 10
console.log(player1.showStatus());
let shooting = new ShootingGame(player1, player2);
console.log(shooting.start());
