var Hand = require('../app/scripts/hand.js');

var cards = [
  {
    id: 1,
    flipped: false
  }
]

describe("A suite", function() {
  var hand;

  beforeEach(function(){ hand = new Hand() })

  it("contains spec with an expectation", function() {
    expect(hand.showCards(cards)).toEqual([{ id: 1, flipped: true }]);
  });
});
