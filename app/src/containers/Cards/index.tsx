import * as React from "react";

import CardWithButton from "../CardWithButton";

import * as styles from "./Cards.module.scss";

const Cards = () => {
  return (
    <div className={styles.cards}>
      <CardWithButton />
      <CardWithButton />
      <CardWithButton />
      <CardWithButton />
      <CardWithButton />
    </div>
  );
};

export default Cards;
