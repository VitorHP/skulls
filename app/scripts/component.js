class Component {
  /* StateMachine Behavior */
  constructor(events) {
    this.declareEvents(events || [])
  }

  declareEvents(events) {
    events.forEach(function(event) {
      this[event.name] = function () {
        this.changeState(event);
      }
    }, this);
  }

  changeState (event) {
    var from = this.arrayfy(event.from);

    if (from.indexOf(this.state) !== -1) {
      this.state = event.to;
      console.log(`machine is ${this.state}`);
    }
  }

  arrayfy (stuff) {
    if (typeof(stuff) === 'string') {
      return new Array(stuff)
    } else {
      return stuff
    }
  }


  /* PubSub Behavior */

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
