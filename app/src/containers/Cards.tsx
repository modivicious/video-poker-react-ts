import * as React from "react";

import CardWithButton from "./CardWithButton";
import type Card from "../functions/Card";

type CardsProps = {
  cards: Card[];
  isRoundFinished: boolean;
  onHold: (arg0: Card) => void;
};

const Cards = ({ cards, isRoundFinished, onHold }: CardsProps) => {
  return (
    <div className="cards">
      {(cards.length ? cards : [...Array(5)]).map((item, index) => (
        <CardWithButton
          key={item?.id || index - 1000}
          card={item}
          isRoundFinished={isRoundFinished}
          onHold={onHold}
        />
      ))}
    </div>
  );
};

export default Cards;
