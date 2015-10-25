
class Hand {
  _flipCards (cards, isFlipped) {
    return cards.map(function(card){
      card.flipped = isFlipped
      return card
    })
  }

  showCards (cards) {
    return this._flipCards(cards, true)
  }

  hideCards (cards) {
    return _flipCards(cards, false)
  }

  findCard (cards, cardId) {
    return cards.filter(function(card){
      return card.id == cardId
    })
  }

  showCard (cards, cardId) {
    return showCards(findCard(cards, cardId))
  }

  hideCard (cards, cardId) {
    return hideCards(findCard(cards, cardId))
  }

}

module.exports = Hand
