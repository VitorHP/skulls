
class Player {
  constructor (name) {
    this.name = name;
    this.resetHand()
    this.state = 'wait';
    this.subscribers = { 'ready' : [] }
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

  register (action, subscriber) {
    this.subscribers[action].push(subscriber);
  }

  unsubscribe (action, subscriber) {
    var subscriberIndex = this.subscribers[action].indexOf(subscriber);
    this.subscribers[action].splice(subscriberIndex, 1);
  }

  publish (action) {
    this.subscribers[action].forEach(function(subscriber) {
      switch (action) {
        case 'ready':
          subscriber.update(action);
      }
    });
  }

}
