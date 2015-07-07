
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
    this.placedCards = [];
  }

  challenge (numberOfCards) {

  }

  place (cardIndex) {
    var card = this.cards.splice(cardIndex, 1)[0];

    this.placedCards.push(card);

    console.log(`Player ${this.name} placed a ${card.name}!`);
  }

}
