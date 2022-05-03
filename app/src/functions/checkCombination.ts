import sortByPoints from "./sortByPoints";
import sortBySuits from "./sortBySuits";
import getCountOfDuplicates from "./getCountOfDuplicates";
import type Card from "./Card";

const checkCombination = (cards: Card[]): { name: string; id: number } => {
  cards = sortByPoints(cards);
  cards = sortBySuits(cards);

  let k = 0;
  let combination = { name: "nothing", id: 0 };

  // flush and royal flush check:
  while (k < 4 && cards[k].suit === cards[k + 1].suit) k++;
  if (k === 4) {
    combination.name = "flush";
    combination.id = 5;
    if (cards[4].point === 14 && cards[0].point === 10) {
      combination.name = "royal flush";
      combination.id = 9;
      return combination;
    }
  }

  // straight check:
  cards = sortByPoints(cards);
  k = 0;
  while (k < 4 && cards[k].point === cards[k + 1].point - 1) k++;
  if (k === 4) {
    if (combination.name === "flush") {
      combination.name = "straight flush";
      combination.id = 8;
      return combination;
    } else {
      combination.name = "straight";
      combination.id = 4;
      return combination;
    }
  }

  const countOfDuplicatesValues = Object.values(getCountOfDuplicates(cards));

  if (countOfDuplicatesValues.includes(4)) {
    combination.name = "four of a kind";
    combination.id = 7;
    return combination;
  }
  if (countOfDuplicatesValues.includes(3)) {
    if (countOfDuplicatesValues.includes(2)) {
      combination.name = "full house";
      combination.id = 6;
      return combination;
    } else {
      combination.name = "three of a kind";
      combination.id = 3;
      return combination;
    } // there is no situation when flush or straight exist with three, so we can return three value before the next check
  }
  if (combination.name === "flush" || combination.name === "straight")
    return combination;

  const valuesEqualToTwo = countOfDuplicatesValues.filter((item) => item === 2);
  if (valuesEqualToTwo.length === 2) {
    combination.name = "two pairs";
    combination.id = 2;
    return combination;
  }
  for (let i = 4; i > 0; i--) {
    if (cards[i].point === cards[i - 1].point && cards[i].point > 10) {
      combination.name = "jacks or better";
      combination.id = 1;
      return combination;
    }
  }

  return combination;
};

export default checkCombination;
