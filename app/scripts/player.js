class Player extends Component {
  constructor (name) {
    var events = [
      { name: 'wake', from: 'inactive', to: 'active' },
      { name: 'sleep', from: 'active', to: 'inactive' }
    ]

    super(events);

    this.name  = name;
    this.state = 'inactive';
    this.subscribers = {
      'ready' : []
    }
    this.resetHand();
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

  place (cardIndex) {
    var card = this.cards.splice(cardIndex, 1)[0];

    this.placedCards.push(card);

    console.log(`Player ${this.name} placed a card!`);

    this.publish('ready');
  }

  toString () {
    return 'Player: ' + this.name +  ' - ' + this.placedCards.map(function(card) {
      return card.toString()
    })
  }

}
