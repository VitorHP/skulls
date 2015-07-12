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
    this.rounds.last().subscribe('round.updated', this)
    this.rounds.last().subscribe('round.end', this)
    this.rounds.last().start()
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
