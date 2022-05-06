import * as React from "react";
import { useState } from "react";
import cx from "classnames";

import setDelay from "../../functions/setDelay";

import * as styles from "./MainButton.module.scss";

type MainButtonProps = {
  text: string;
  onClick: () => void;
};

const MainButton = ({ text, onClick }: MainButtonProps) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const onHandleClick = async (): Promise<void> => {
    onClick();
    setIsDisabled(true);
    await setDelay(1700);
    setIsDisabled(false);
  };

  return (
    <button
      className={cx(styles.mainButton, "button")}
      onClick={onHandleClick}
      disabled={isDisabled}
      type="button"
    >
      {text}
    </button>
  );
};

export default MainButton;
