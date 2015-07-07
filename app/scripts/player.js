
class Player {
  constructor (name) {
    this.name = name;
    this.resetHand()
  }

  resetHand () {
    this.cards = [
      new Card('skull'),
      new Card('rose'),
      new Card('rose'),
      new Card('rose'),
    ]
  }

  challenge (cards) {

  }

  bet () {

  }

}
