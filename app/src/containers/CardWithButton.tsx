import * as React from "react";
import { useState } from "react";

import Card from "../components/Card";
import PressButton from "../components/PressButton";

type CardWithButtonProps = {
  card: {
    suit: string;
    point: number;
  };
  isRoundFinished: boolean;
  onHold: ({}) => void;
};

const CardWithButton = ({
  card,
  isRoundFinished,
  onHold,
}: CardWithButtonProps) => {
  const [isHold, setIsHold] = useState(false);

  const onButtonClick = (): void => {
    setIsHold(!isHold);
    onHold(card);
  };

  return (
    <div className="cardWithButton">
      <Card card={card} isRoundFinished={isRoundFinished} />
      <PressButton text="Hold" onClick={onButtonClick} isActive={isHold} />
    </div>
  );
};

export default CardWithButton;
