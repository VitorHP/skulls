var Action = require('./action.js');

class BetAction extends Action {
  constructor () {
    super();
  }

  toString () {
    return 'Baixar uma carta'
  }

  perform () {
    this.input.subscribe('input.update', this)
  }
}

module.exports = BetAction;
