const sortBySuits = (cards) => {
  cards.sort((a, b) => a.suit.localeCompare(b.suit));
  return cards;
};

export default sortBySuits;
