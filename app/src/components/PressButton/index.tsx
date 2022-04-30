import * as React from "react";
import cx from "classnames";

import * as styles from "./PressButton.module.scss";

type PressButtonProps = {
  text: string;
  onClick?: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
};

const PressButton = ({
  text,
  onClick = () => {},
  isActive = false,
  isDisabled = false,
}: PressButtonProps) => {
  return (
    <button
      className={cx(
        styles.pressButton,
        { [styles.active]: isActive },
        "button"
      )}
      onClick={() => onClick()}
      disabled={isDisabled}
      type="button"
    >
      <span> {text} </span>
    </button>
  );
};

export default PressButton;
