@StateMachine
class Round {
  constructor(players){
    this.events([
      { name: 'start'     , from: 'initial'     , to: 'preparing' },
      { name: 'bet'       , from: 'preparing'   , to: 'betting' },
      { name: 'challenge' , from: 'betting'     , to: 'challenging' },
      { name: 'reveal'    , from: 'challenging' , to: 'revealing' },
      { name: 'end'       , from: 'revealing'   , to: 'finished' }
    ]);

    this.subscribers = {
      'start' : []
    }

    this.state   = 'initial';
    this.players = players;
  }

  onEnterPreparing () {
    this.turns = new Turn(this.players[0], this.availableActions())
  }

  availableActions () {
    var actionsPerState = {
      'preparing'   : ['bet'],
      'betting'     : ['bet', 'challenge'],
      'challenging' : ['raise', 'fold'],
      'revealing'   : ['show'],
      'finished'    : [],
    }

    return actionsPerState[this.state].map(function(actionName) {
      return new window[actionName.capitalize() + 'Action']()
    });
  }

  toString () {
    return `Round started!\n${this.players.length} player(s)`
  }
}


