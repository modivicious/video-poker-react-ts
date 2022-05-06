const getSuitColor = (suit: string): string =>
  suit === "diamonds" || suit === "hearts" ? "red" : "black";

export default getSuitColor;
