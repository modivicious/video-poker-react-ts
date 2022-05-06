import * as React from "react";
import cx from "classnames";

import getPoint from "../../functions/getPoint";
import type Card from "../../functions/Card";

import svgSuits from "../../../images/icons/*.svg";

import * as styles from "./CardComponent.module.scss";

type CardProps = {
  card: Card;
  isRoundFinished: boolean;
};

const CardComponent = ({
  card = { suit: "", point: 0, id: Date.now() },
  isRoundFinished,
}: CardProps) => {
  const point = getPoint(card.point);
  const suitColor =
    card.suit === "diamonds" || card.suit === "hearts" ? "red" : "black";
  return (
    <div className={cx(styles.card, { [styles.flip]: true })}>
      <div className={cx(styles.side, styles.front)}>
        <div className={styles.info}>
          <span className={cx(styles.point, styles[suitColor])}>{point}</span>
          <img
            className={cx(styles.suit, styles.small)}
            src={svgSuits[card.suit]}
            alt=""
          />
        </div>
        <img className={styles.suit} src={svgSuits[card.suit]} alt="" />
        <div className={cx(styles.info, styles.turned)}>
          <span className={cx(styles.point, styles[suitColor])}>{point}</span>
          <img
            className={cx(styles.suit, styles.small)}
            src={svgSuits[card.suit]}
            alt=""
          />
        </div>
      </div>
      <div className={cx(styles.side, styles.back)} />
    </div>
  );
};

export default CardComponent;