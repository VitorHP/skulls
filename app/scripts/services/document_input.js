var PublishSubscribe = require('../mixins/publish_subscribe.js');

@PublishSubscribe
class DocumentInput {
  constructor () {
    this.input    = document.getElementById('input');
    this.submit   = document.getElementById('submit');

    this.subscribers = {
      'update' : []
    }
  }

  read () {
    var value = this.input.value
    return value
  }

  onClick () {
    this.publish('update')
    this.clear();
  }

  clear () {
    this.input.value = '';
  }

  observe () {
    this.submit.addEventListener('click', this.onClick.bind(this));
  }
}

module.exports = DocumentInput;
