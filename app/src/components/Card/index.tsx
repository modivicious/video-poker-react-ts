import * as React from "react";
import cx from "classnames";

import * as styles from "./Card.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={cx(styles.side, styles.front)}>
        <div className={styles.info}>
          <span className={styles.point}></span>
          <img
            className={cx(styles.suit, styles.small)}
            src="../../images/content/1x1.webp"
            alt=""
          />
        </div>
        <img className={styles.suit} src="images/content/1x1.webp" alt="" />
        <div className={cx(styles.info, styles.turned)}>
          <span className={styles.point}></span>
          <img
            className={cx(styles.suit, styles.small)}
            src="../../images/content/1x1.webp"
            alt=""
          />
        </div>
      </div>
      <div className={cx(styles.side, styles.back)} />
    </div>
  );
};

export default Card;
