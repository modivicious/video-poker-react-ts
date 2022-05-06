import * as React from "react";
import { useEffect } from "react";
import cx from "classnames";

import getPoint from "../../functions/getPoint";
import getSuitColor from "../../functions/getSuitColor";
import type Card from "../../functions/Card";

import svgSuits from "../../../images/icons/*.svg";

import * as styles from "./CardComponent.module.scss";

type CardProps = {
  card: Card;
};

const CardComponent = ({
  card = { suit: "", point: 0, id: Date.now() },
}: CardProps) => {
  const point = getPoint(card.point);
  const suitColor = getSuitColor(card.suit);

  const [shouldFlip, setShouldFlip] = React.useState(false);

  useEffect(() => {
    card.suit === "" ? setShouldFlip(false) : setShouldFlip(true);
  }, [card]);

  return (
    <div className={cx(styles.card, { [styles.flip]: shouldFlip })}>
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

export default React.memo(CardComponent);
