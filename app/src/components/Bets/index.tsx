import * as React from "react";
import cx from "classnames";

import * as styles from "./Bets.module.scss";

type BetsProps = {
  currentBet: number;
};

const Bets = ({ currentBet }: BetsProps) => {
  return (
    <div className={styles.bets}>
      <button
        className={cx(styles.arrow, styles.prev)}
        type="button"
        aria-label="Previous bet"
      />
      <div className={cx(styles.betDisplay, "display")}>
        <span>Wager: {currentBet}</span>
      </div>
      <button
        className={cx(styles.arrow, styles.next)}
        type="button"
        aria-label="Next Bet"
      />
    </div>
  );
};

export default Bets;
