@PublishSubscribe
class Turn {
  constructor(player) {
    this.player  = player

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
    return `It's ${this.player.name}'s turn. \n${this.player.toString()}\n`;
  }

}
