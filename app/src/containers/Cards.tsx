import * as React from "react";

import CardWithButton from "./CardWithButton";

type CardsProps = {
  cards: {
    suit: string;
    point: number;
  }[];
  isRoundFinished: boolean;
  onHold: ({}) => void;
};

const Cards = ({ cards, isRoundFinished, onHold }: CardsProps) => {
  return (
    <div className="cards">
      {(cards.length ? cards : [...Array(5)]).map((item) => (
        <CardWithButton
          card={item}
          isRoundFinished={isRoundFinished}
          onHold={onHold}
        />
      ))}
    </div>
  );
};

export default Cards;
