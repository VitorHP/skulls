class DocumentPrinter {
  constructor () {
    this.textarea = document.getElementById('text');
  }

  print (text) {
    this.textarea.val += '\n' + text;
  }
}
