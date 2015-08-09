class BetAction extends Action {
  constructor () {
    super();
  }

  toString () {
    return 'Baixar uma carta'
  }

  perform () {
    this.input.subscribe('input.update', this)
  }
}
