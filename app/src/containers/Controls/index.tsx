import * as React from "react";

import Balance from "../../components/Balance";
import Bets from "../../components/Bets";
import DealButton from "../../components/DealButton";

import * as styles from "./Controls.module.scss";

type ControlsProps = {
  currentBet: number;
  onPlus: () => void;
  onMinus: () => void;
};

const Controls = ({ currentBet, onPlus, onMinus }: ControlsProps) => {
  return (
    <div className={styles.controls}>
      <Balance balance={50000} />
      <Bets currentBet={currentBet} onPlus={onPlus} onMinus={onMinus} />
      <DealButton text="Deal" />
    </div>
  );
};

export default Controls;
