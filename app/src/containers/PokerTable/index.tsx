import * as React from "react";

import CombinationsTable from "../../components/CombinationsTable";
import Cards from "../Cards";

import * as styles from "./PokerTable.module.scss";

const PokerTable = () => {
  return (
    <div className={styles.pokerTable}>
      <CombinationsTable />
      <Cards />
    </div>
  );
};

export default PokerTable;
