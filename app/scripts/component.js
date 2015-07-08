class Component {
  subscribe (action, subscriber) {
    this.subscribers[action].push(subscriber);
  }

  unsubscribe (action, subscriber) {
    var subscriberIndex = this.subscribers[action].indexOf(subscriber);
    this.subscribers[action].splice(subscriberIndex, 1);
  }

  publish (action) {
    this.subscribers[action].forEach(function(subscriber) {
      subscriber.update();
    })
  }

}
