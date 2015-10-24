var StateMachine = require('./mixins/state_machine.js');

@StateMachine
class Card {
  constructor (name) {
    this.events([
      { name: 'show', from: 'hidden', to: 'open' },
      { name: 'hide', from: 'open', to: 'hidden' },
    ])

    this.name  = name;
    this.state = 'hidden';
  }

  toString () {
    return {
      'open' : '[' + this.name + ']',
      'hidden'   : '[x]'
    }[this.state]
  }
}

module.exports = Card;
