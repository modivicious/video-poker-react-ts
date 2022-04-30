import Card from "./Card";
import randomBetween from "./randomBetween";

class Deck {
  cards: Card[];
  constructor() {
    this.cards = [];
    this.create();
  }
  create(): void {
    const suits = ["diamonds", "clubs", "hearts", "spades"];
    for (let point = 0; point < 13; point++)
      for (let suit = 0; suit < 4; suit++)
        this.cards[suit * 13 + point] = new Card(
          suits[suit],
          point + 2,
          suit * 13 + point
        );
  }
  shuffle(): void {
    for (let i = 0; i < 52; i++) {
      const rand = randomBetween(0, 51);
      [this.cards[i], this.cards[rand]] = [this.cards[rand], this.cards[i]];
    }
  }
  getTopCard(): Card {
    return this.cards.pop();
  }
  distribution(): Card[] {
    let cards = [];
    for (let i = 0; i < 5; i++) cards[i] = this.getTopCard();
    return cards;
  }
}

export default Deck;
