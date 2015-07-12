const StateMachine = mixin({
  events(eventList) {
    eventList.forEach(function(event) {
      this[event.name] = function () {
        this.changeState(event);
      }
    }, this);
  },

  changeState (event) {
    var from = this.arrayfy(event.from);

    if (from.indexOf(this.state) !== -1) {
      this.state = event.to;
      this.callHook('onEnter' + this.state.capitalize());
      console.log(`machine is ${this.state}`);
    }
  },

  callHook (hookName) {
    if (this[hookName] !== undefined) {
      this[hookName]();
    }
  },

  arrayfy (stuff) {
    if (typeof(stuff) === 'string') {
      return new Array(stuff)
    } else {
      return stuff
    }
  }
});

