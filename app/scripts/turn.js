@PublishSubscribe
class Turn {
  constructor(player, availableActions) {
    this.player = player
    this.player.wake();
    this.actions = availableActions

    this.subscribers = { 'turn.end' : [] }
    this.describeActions();
  }

  describeActions () {
    this.actions.map(function(action) {
      return action.describe();
    }).join('\n');
  }

  update (event) {
    if (event == 'player.done') {
      this.player.sleep();
      this.publish('turn.end');
    }
  }

}
