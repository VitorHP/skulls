@StateMachine
@PublishSubscribe
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
      'round.start'   : [],
      'round.end'     : [],
      'round.updated' : []
    }

    this.state   = 'initial';
    this.players = players;
    this.turns   = [];
  }

  onEnterPreparing () {
    this.turns.push(new Turn(this.players[0], this.availableActions()));
    this.turns[this.turns.length - 1].subscribe('turn.end', this);
    this.turns[this.turns.length - 1].subscribe('turn.updated', this);
    this.turns[this.turns.length - 1].start();
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

  update (event, publisher) {
    switch (event) {
      case 'turn.updated':
        this.publish('round.updated');
        break;
      case 'turn.end':
        this.publish('round.end');
        break;
    }
  }

  toString () {
    return `Round started!\n${this.players.length} player(s)\n${this.turns.last().toString()}`
  }
}


