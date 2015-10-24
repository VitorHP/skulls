var mixin = require('../lib/mixin.js');
/*
 * For proper behavior of this mixin, is expected that the target
 * class declare an object containing the events that it publishes
 * as a key for an empty array that will be filled once subscribers
 * start registering for those events.
 *
 * Ex:
 *
 * @PublishSubscribe
 * class Car {
 *  constructor () {
 *    this.subscribers = {
 *      'car.move' : [],
 *      'car.stop' : []
 *      }
 *    }
 *  }
 * }
 */
const PublishSubscribe = mixin({
  subscribe (action, subscriber) {
    this.subscribers[action].push(subscriber);
    return this
  },

  unsubscribe (action, subscriber) {
    var subscriberIndex = this.subscribers[action].indexOf(subscriber);
    this.subscribers[action].splice(subscriberIndex, 1);
    return this
  },

  publish (event) {
    this.subscribers[event].forEach(function(subscriber) {
      subscriber.update(event, this);
    }, this)
    return this
  }
});

module.exports = PublishSubscribe;
