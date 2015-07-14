const StateMachine = mixin({
  /*
   * Receives an array of events in the form
   *
   * [
   *  { name: 'eventName', from: 'previousState', to: 'nextState' },
   * ]
   *
   * Declares a method on the target class for every event passed. 
   * With the example array given above, the target class would
   * gain an eventName() method which changes its state from
   * 'previousState' to 'nextState'
   */
  events(eventList) {
    eventList.forEach(function(event) {
      this[event.name] = function () {
        this.changeState(event);
      }
    }, this);
  },

  /*
   * Changes state of the machine calling hooks if they are defined;
   * With the example array given above, if the target class had a
   * onEnterNextState() method, it would be called once the eventName()
   * method was called
   */
  changeState (event) {
    var from = this.arrayfy(event.from);

    if (from.indexOf(this.state) !== -1) {
      this.state = event.to;
      this.callHook('onEnter' + this.state.capitalize());
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

