require('./lib/array.js');
require('./lib/string.js');

var Player = require('./player.js'),
    Game = require('./game.js');

var paul   = new Player('Paul');
var george = new Player('George');
var john   = new Player('John');
var ringo  = new Player('Ringo');

var game   = new Game([ paul, george, john, ringo ])

game.start();
