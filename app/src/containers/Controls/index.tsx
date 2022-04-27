import * as React from "react";

import Balance from "../../components/Balance";
import Bets from "../../components/Bets";
import DealButton from "../../components/DealButton";

import * as styles from "./Controls.module.scss";

const Controls = () => {
  return (
    <div className={styles.controls}>
      <Balance balance={50000} />
      <Bets currentBet={10000}/>
      <DealButton text="Deal"/>
    </div>
  );
};

export default Controls;
