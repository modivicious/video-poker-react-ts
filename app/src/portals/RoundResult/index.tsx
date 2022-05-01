import * as React from "react";
import { createPortal } from "react-dom";
import cx from "classnames";

import * as styles from "./RoundResult.module.scss";

type RoundResultProps = {
  result: number;
  isOpen: boolean;
};

const RoundResult = ({ result, isOpen }: RoundResultProps) => {
  if (!isOpen) return null;
  return createPortal(
    <div className={cx(styles.result, "modal")}>
      <p className={styles.text}>{result > 0 ? "payout:" : "you lose"}</p>
      <span>123</span>
    </div>,
    document.body
  );
};

export default RoundResult;
