import * as React from "react";
import { createPortal } from "react-dom";
import cx from "classnames";

import * as styles from "./RoundResult.module.scss";

type RoundResultProps = {
  resultAmount: number;
  isOpen: boolean;
};

const RoundResult = ({ resultAmount, isOpen }: RoundResultProps) => {
  if (!isOpen) return null;
  return createPortal(
    <div className={cx(styles.result, "modal")}>
      <p className={styles.text}>
        {resultAmount >= 0 ? "payout:" : "you lose:"}
      </p>
      <span>${Math.abs(resultAmount)}</span>
    </div>,
    document.body
  );
};

export default RoundResult;
