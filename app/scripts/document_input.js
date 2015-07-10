class DocumentInput () {
  constructor () {
    this.input    = document.getElementById('input');
  }

  read () {
    var value = this.input.value
    return value
  }
}
