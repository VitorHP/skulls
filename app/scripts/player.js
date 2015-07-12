@StateMachine
@PublishSubscribe
class Player {
  constructor (name) {
    var events = [
      { name: 'wake', from: 'inactive', to: 'active' },
      { name: 'sleep', from: 'active', to: 'inactive' }
    ]

    this.name  = name;
    this.state = 'inactive';
    this.subscribers = {
      'ready' : []
    }
    this.resetHand();
    this.actions = []
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

    this.publish('player.done');
  }

  toString () {
    return 'Player: ' + this.name +  ' - ' + this.placedCards.map(function(card) {
      return card.toString()
    })
  }

}
