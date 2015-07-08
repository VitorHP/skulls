class Game {
  constructor (players) {
    this.players = players;
    this.turns   = [];
  }

  start () {
    console.log('Game started!');

    this.startTurn({ rotatePlayers: false });
  }

  startTurn (options = { rotatePlayers: true }) {
    if (options.rotatePlayers)
      this.rotatePlayers();

    this.turns.push(new Turn(this.players[0]))
    this.turns[this.turns.length - 1].subscribe('end-turn', this);
  }

  rotatePlayers () {
    this.players.push(this.players.shift());
  }

  update () {
    this.startTurn();
  }
}
