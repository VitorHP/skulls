class Game {
  constructor (players) {
    this.players = players;
  }

  start () {
    console.log('Game started!');
    this.startTurn();
  }

  startTurn () {
    this.players[0].activate
    console.log(`Hey! It's ${this.players[0].name}'s turn`);

    this.rotatePlayers();
  }

  rotatePlayers () {
    this.players.push(this.players.shift());
  }
}
