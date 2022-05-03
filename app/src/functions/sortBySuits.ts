import type Card from "./Card";

const sortBySuits = (cards: Card[]) => {
  cards.sort((a, b) => a.suit.localeCompare(b.suit));
  return cards;
};

export default sortBySuits;
