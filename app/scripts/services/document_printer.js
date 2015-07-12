class DocumentPrinter {
  constructor () {
    this.textarea = document.getElementById('text');
  }

  print (text) {
    this.textarea.value += '\n' + text;
  }
}
