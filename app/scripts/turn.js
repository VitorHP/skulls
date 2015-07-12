@PublishSubscribe
class Turn {
  constructor(player, availableActions) {
    this.player  = player
    this.actions = availableActions

    this.subscribers = { 
      'turn.end'     : [],
      'turn.updated' : [] 
    }
  }

  start () {
    this.player
      .subscribe('player.done', this)
      .subscribe('player.updated', this)
      .wake();
  }

  describeActions () {
    return this.actions.map(function(action, index) {
      return `\n${index + 1} - ${action.toString()}`;
    }).join('\n');
  }

  update (event, publisher) {
    switch (event) {
      case 'player.done':
        this.player.sleep();
        this.publish('turn.end');
        break;
      case 'player.updated':
        this.publish('turn.updated');
        break;
    }
  }

  toString() {
    return `It's ${this.player.name}'s turn. \n${this.player.toString()}\n\nAções disponíveis\n${this.describeActions()}`;
  }

}
