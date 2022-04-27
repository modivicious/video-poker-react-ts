import * as React from "react";
import cx from "classnames";

import * as styles from "./Balance.module.scss";

type BalanceProps = {
  balance: number;
};

const Balance = ({ balance }: BalanceProps) => {
  return <div className={cx(styles.balanceDisplay, "display")}>{balance}</div>;
};

export default Balance;
