import * as React from "react";
import cx from "classnames";

import * as styles from "./Bets.module.scss";

type BetsProps = {
  currentBet: number;
  onPlus: () => void;
  onMinus: () => void;
};

const Bets = ({ currentBet, onPlus, onMinus }: BetsProps) => {
  return (
    <div className={styles.bets}>
      <button
        className={cx(styles.arrow, styles.prev)}
        onClick={() => onMinus()}
        type="button"
        aria-label="Previous bet"
      />
      <div className={cx(styles.betDisplay, "display")}>
        <span>Wager: ${currentBet}</span>
      </div>
      <button
        className={cx(styles.arrow, styles.next)}
        onClick={() => onPlus()}
        type="button"
        aria-label="Next Bet"
      />
    </div>
  );
};

export default Bets;
