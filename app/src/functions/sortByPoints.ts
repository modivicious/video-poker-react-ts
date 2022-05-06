import type Card from "./Card";

const sortByPoints = (cards: Card[]): Card[] => {
  cards.sort((a, b) => a.point - b.point);
  return cards;
};

export default sortByPoints;
