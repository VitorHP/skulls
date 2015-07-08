class Player extends Component {
  constructor (name) {
    super();
    this.name        = name;
    this.state       = 'wait';
    this.subscribers = { 'ready' : [] }

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

  wake () {
    console.log(`Player ${this.name} is active`);
    this.state = 'active';
  }

  sleep () {
    console.log(`Player ${this.name} is inactive`);
    this.state = 'wait';
  }

  place (cardIndex) {
    var card = this.cards.splice(cardIndex, 1)[0];

    this.placedCards.push(card);

    console.log(`Player ${this.name} placed a card!`);

    this.publish('ready');
  }

}
