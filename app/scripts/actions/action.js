var DocumentPrinter = require('../services/document_printer.js'),
    DocumentInput = require('../services/document_input.js');

class Action {
  constructor () {
    this.input = new DocumentInput();
    this.printer = new DocumentPrinter();
  }
}

module.exports = Action;
