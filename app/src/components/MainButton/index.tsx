import * as React from "react";
import cx from "classnames";

import * as styles from "./MainButton.module.scss";

type MainButtonProps = {
  text: string;
  onClick: () => void;
};

const MainButton = ({ text, onClick }: MainButtonProps) => {
  return (
    <button
      className={cx(styles.mainButton, "button")}
      onClick={() => onClick()}
      type="button"
    >
      {text}
    </button>
  );
};

export default MainButton;
