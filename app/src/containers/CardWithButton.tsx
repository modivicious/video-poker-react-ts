import * as React from "react";

import Card from "../components/Card";
import PressButton from "../components/PressButton";

type CardWithButtonProps = {
  card: {
    suit: string;
    point: number;
  };
  isRoundFinished: boolean;
};

const CardWithButton = ({ card, isRoundFinished }: CardWithButtonProps) => {
  return (
    <div className="cardWithButton">
      <Card card={card} isRoundFinished={isRoundFinished} />
      <PressButton text="Hold" />
    </div>
  );
};

export default CardWithButton;
