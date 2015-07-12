class Game {
  constructor (players) {
    this.printer = new DocumentPrinter();
    this.players = players;
    this.rounds  = [];
  }

  start () {
    this.startRound();
  }

  startRound () {
    this.rounds.push(new Round(this.players))
    this.rounds[this.rounds.length - 1].subscribe('round.updated', this)
    this.rounds[this.rounds.length - 1].subscribe('round.end', this)
    this.rounds[this.rounds.length - 1].start()
  }

  update (event) {
    switch (event) {
      case 'round.updated':
        this.printer.print(this.toString());
        break;
      case 'round.end':
        this.startTurn();
        break;
    }
  }

  toString () {
    return this.rounds[this.rounds.length - 1].toString()
  }

}
