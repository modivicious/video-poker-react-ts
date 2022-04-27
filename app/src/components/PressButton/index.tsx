import * as React from "react";
import cx from "classnames";

import * as styles from "./PressButton.module.scss";

type PressButtonProps = {
  text: string;
};

const PressButton = ({ text }: PressButtonProps) => {
  return (
    <button className={cx(styles.pressButton, "button")} type="button">
      <span> {text} </span>
    </button>
  );
};

export default PressButton;
