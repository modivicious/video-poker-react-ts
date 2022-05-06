import * as React from "react";
import cx from "classnames";

import Portal from "../../HOC/Portal";

import * as styles from "./GameIsOver.module.scss";

type GameIsOverProps = {
  shouldShow: boolean;
  onClick: () => void;
};

const GameIsOver = ({ shouldShow, onClick }: GameIsOverProps) => (
  <Portal trigger={shouldShow}>
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
  </Portal>
);

export default GameIsOver;
