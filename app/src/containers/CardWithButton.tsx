import * as React from "react";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    if (!isRoundFinished) setIsHold(false);
  }, [isRoundFinished]);

  return (
    <div className="cardWithButton">
      <Card card={card} isRoundFinished={isRoundFinished} />
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
