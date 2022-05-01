import * as React from "react";
import { createPortal } from "react-dom";
import cx from "classnames";

import * as styles from "./GameIsOver.module.scss";

type GameIsOverProps = {
  isOpen: boolean;
  onClick: () => void;
};

const GameIsOver = ({ isOpen, onClick }: GameIsOverProps) => {
  if (!isOpen) return null;
  return createPortal(
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
    </div>,
    document.body
  );
};

export default GameIsOver;
