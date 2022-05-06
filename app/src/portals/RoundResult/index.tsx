import * as React from "react";
import cx from "classnames";

import Portal from "../../HOC/Portal";

import * as styles from "./RoundResult.module.scss";

type RoundResultProps = {
  shouldShow: boolean;
  resultAmount: number;
};

const RoundResult = ({ shouldShow, resultAmount }: RoundResultProps) => (
  <Portal trigger={shouldShow}>
    <div className={cx(styles.result, "modal")}>
      <p className={styles.text}>
        {resultAmount >= 0 ? "payout:" : "you lose:"}
      </p>
      <span>${Math.abs(resultAmount)}</span>
    </div>
  </Portal>
);

export default RoundResult;
