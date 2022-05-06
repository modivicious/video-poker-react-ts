import * as React from "react";
import { createPortal } from "react-dom";
import cx from "classnames";
import { CSSTransition } from "react-transition-group";

import * as styles from "./GameIsOver.module.scss";

type GameIsOverProps = {
  shouldShow: boolean;
  onClick: () => void;
};

const GameIsOver = ({ shouldShow, onClick }: GameIsOverProps) => {
  return createPortal(
    <CSSTransition
      in={shouldShow}
      timeout={250}
      classNames="modal"
      unmountOnExit
    >
      <div className={cx(styles.overModal, "modal")}>
        <div className={styles.box}>
          <p className={styles.text}>It's over. Want to restart?</p>
          <button
            className={styles.restart}
            onClick={() => onClick()}
            type="button"
          >
            Restart
          </button>
        </div>
      </div>
    </CSSTransition>,
    document.body
  );
};

export default GameIsOver;
