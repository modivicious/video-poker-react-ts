import * as React from "react";

import CardWithButton from "./CardWithButton";

type CardsProps = {
  cards: {
    suit: string;
    point: number;
  }[];
  isRoundFinished: boolean;
};

const Cards = ({ cards, isRoundFinished }: CardsProps) => {
  return (
    <div className="cards">
      {(cards.length ? cards : [...Array(5)]).map((item) => (
        <CardWithButton card={item} isRoundFinished={isRoundFinished} />
      ))}
    </div>
  );
};

export default Cards;
