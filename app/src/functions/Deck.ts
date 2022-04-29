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
    for (let a = 0; a < 13; a++)
      for (let b = 0; b < 4; b++)
        this.cards[b * 13 + a] = new Card(suits[b], a + 2);
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
    const cards = [];
    for (let i = 0; i < 5; i++) cards[i] = this.getTopCard();
    return cards;
  }
}

export default Deck;
