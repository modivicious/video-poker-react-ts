import * as React from "react";

import Card from "../../components/Card";
import HoldButton from "../../components/PressButton";

import * as styles from "./CardWithButton.module.scss";

const CardWithButton = () => {
  return (
    <div className={styles.cardBox}>
      <Card />
      <HoldButton text="Hold" />
    </div>
  );
};

export default CardWithButton;
