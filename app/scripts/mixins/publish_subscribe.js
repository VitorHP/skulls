const PublishSubscribe = mixin({
  subscribe (action, subscriber) {
    this.subscribers[action].push(subscriber);
  },

  unsubscribe (action, subscriber) {
    var subscriberIndex = this.subscribers[action].indexOf(subscriber);
    this.subscribers[action].splice(subscriberIndex, 1);
  },

  publish (event) {
    this.subscribers[event].forEach(function(subscriber) {
      subscriber.update(event, this);
    }, this)
  }
});
