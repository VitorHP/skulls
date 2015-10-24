var StateMachine = require('./mixins/state_machine.js'),
    PublishSubscribe = require('./mixins/publish_subscribe.js'),
    Turn = require('./turn.js');

window.ChallengeAction = require('./actions/challenge_action.js');
window.RaiseAction = require('./actions/raise_action.js');
window.FoldAction = require('./actions/fold_action.js');
window.BetAction = require('./actions/bet_action.js');

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
    this.players.first().setActions(this.availableActions());
    this.turns.push(new Turn(this.players.first()));

    this.turns.last()
      .subscribe('turn.end', this)
      .subscribe('turn.updated', this)
      .start();
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
    }, this);
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

module.exports = Round;
