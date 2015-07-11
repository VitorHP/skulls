class Game {
  constructor (players) {
    this.printer = new DocumentPrinter();
    this.players = players;
    this.rounds  = [];
  }

  start () {
    this.printer.print('Game started!');

    this.startRound();
  }

  startRound () {
    this.toString()

    this.rounds.push(new Round(this.players))
  }

  update () {
    this.startTurn();
  }

  toString () {
    this.printer.print(this.players.map(function(player) {
      return player.toString()
    }).join('\n'))
  }

  // rotatePlayers () {
  //   this.players.push(this.players.shift());
  // }

  // startTurn (options = { rotatePlayers: true }) {
  //   this.toString()

  //   if (options.rotatePlayers)
  //     this.rotatePlayers();

  //   this.turns.push(new Turn(this.players[0]))
  //   this.turns[this.turns.length - 1].subscribe('end-turn', this);
  // }

}
