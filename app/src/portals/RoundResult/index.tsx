import * as React from "react";
import { createPortal } from "react-dom";
import cx from "classnames";
import { CSSTransition } from "react-transition-group";

import * as styles from "./RoundResult.module.scss";

type RoundResultProps = {
  shouldShow: boolean;
  resultAmount: number;
};

const RoundResult = ({ shouldShow, resultAmount }: RoundResultProps) => {
  return createPortal(
    <CSSTransition
      in={shouldShow}
      timeout={250}
      classNames="modal"
      unmountOnExit
    >
      <div className={cx(styles.result, "modal")}>
        <p className={styles.text}>
          {resultAmount >= 0 ? "payout:" : "you lose:"}
        </p>
        <span>${Math.abs(resultAmount)}</span>
      </div>
    </CSSTransition>,
    document.body
  );
};

export default RoundResult;
