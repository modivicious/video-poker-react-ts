import * as React from "react";
import { useState, useEffect } from "react";

import CardComponent from "../components/CardComponent";
import type Card from "../functions/Card";
import PressButton from "../components/PressButton";

type CardWithButtonProps = {
  card: Card;
  isRoundFinished: boolean;
  onHold: (arg0: Card) => void;
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

  useEffect(() => {
    if (!isRoundFinished) setIsHold(false);
  }, [isRoundFinished]);

  return (
    <div className="cardWithButton">
      <CardComponent card={card} isRoundFinished={isRoundFinished} />
      <PressButton
        text="Hold"
        onClick={onButtonClick}
        isActive={isHold}
        isDisabled={isRoundFinished}
      />
    </div>
  );
};

export default CardWithButton;
