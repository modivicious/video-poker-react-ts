import * as React from "react";
import cx from "classnames";

import * as styles from "./DealButton.module.scss";

type DealButtonProps = {
  text: string;
};

const DealButton = ({ text }: DealButtonProps) => {
  return (
    <button className={cx(styles.dealButton, "button")} type="button">
      {text}
    </button>
  );
};

export default DealButton;
