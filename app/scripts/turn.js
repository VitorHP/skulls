class Turn {
  constructor(player) {
    this.player = player
    this.player.register('ready', this);
    this.player.wake();

    this.subscribers = { 'end-turn' : [] }
  }

  update () {
    console.log(`${this.player.name} turn ended`);
    this.player.sleep();
    this.publish('end-turn');
    this.player.unsubscribe('ready', this);
  }

  register (action, subscriber) {
    this.subscribers[action].push(subscriber);
  }

  publish (action) {
    this.subscribers[action].forEach(function(subscriber) {
      subscriber.update();
    })
  }
}
