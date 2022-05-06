import * as React from "react";
import cx from "classnames";

import { tableData } from "../../data/data";

import * as styles from "./CombinationsTable.module.scss";

type CombinationsTableProps = {
  activeCol: number;
  winningCell: number;
};

const CombinationsTable = ({
  activeCol,
  winningCell,
}: CombinationsTableProps) => {
  return (
    <table className={styles.combinations}>
      <tbody>
        {tableData.map((data) => (
          <tr key={data.id}>
            <td className={styles.name}>{data.combination}</td>
            {data.coeffs.map((coeff, index) => (
              <td
                key={data.combination + coeff}
                className={cx({
                  [styles.activeCol]: index === activeCol,
                  [styles.winning]:
                    index === activeCol && data.id === winningCell,
                })}
              >
                {coeff}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default React.memo(CombinationsTable);
