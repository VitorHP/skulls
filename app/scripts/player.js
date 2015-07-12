@StateMachine
@PublishSubscribe
class Player {
  constructor (name) {
    this.events([
      { name: 'wake', from: 'inactive', to: 'active' },
      { name: 'sleep', from: 'active', to: 'inactive' }
    ])

    this.name        = name;
    this.state       = 'inactive';
    this.actions     = []
    this.subscribers = {
      'player.updated' : [],
      'player.done'    : []
    }
    this.cards = [
      new Card('skull'),
      new Card('rose'),
      new Card('rose'),
      new Card('rose'),
    ]
    this.placedCards = [];
  }

  onEnterActive () {
    this.publish('player.updated');
  }

  toString () {
    return 'Player: ' + this.name +  ' - ' + this.cards.map(function(card) {
      return card.toString()
    })
  }

}
