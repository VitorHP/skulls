
class Card extends Component {
  constructor (name) {
    var events = [
      { name: 'show', from: 'hidden', to: 'open' },
      { name: 'hide', from: 'open', to: 'hidden' },
    ]

    super(events);

    this.name  = name;
    this.state = 'hidden';
  }

  toString () {
    return {
      'open' : '[' + this.name + ']',
      'hidden'   : '[x]'
    }[this.state]
  }
}
