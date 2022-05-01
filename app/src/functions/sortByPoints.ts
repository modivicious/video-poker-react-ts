const sortByPoints = (cards) => {
  cards.sort((a, b) => a.point - b.point);
  return cards;
};

export default sortByPoints;
