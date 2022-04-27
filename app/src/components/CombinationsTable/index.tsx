import * as React from "react";

import * as styles from "./CombinationsTable.module.scss";

const CombinationsTable = () => {
  return (
    <table className={styles.combinations}>
      <tbody>
        <tr>
          <td className={styles.name}>Royal Flush</td>
          <td>250</td>
          <td>500</td>
          <td>750</td>
          <td>1000</td>
          <td>4000</td>
        </tr>
        <tr>
          <td className={styles.name}>Straight Flush</td>
          <td>50</td>
          <td>100</td>
          <td>150</td>
          <td>200</td>
          <td>250</td>
        </tr>
        <tr>
          <td className={styles.name}>Four of a kind</td>
          <td>25</td>
          <td>50</td>
          <td>75</td>
          <td>100</td>
          <td>125</td>
        </tr>
        <tr>
          <td className={styles.name}>Full house</td>
          <td>9</td>
          <td>18</td>
          <td>27</td>
          <td>36</td>
          <td>45</td>
        </tr>
        <tr>
          <td className={styles.name}>Flush</td>
          <td>6</td>
          <td>12</td>
          <td>18</td>
          <td>24</td>
          <td>30</td>
        </tr>
        <tr>
          <td className={styles.name}>Straight</td>
          <td>4</td>
          <td>8</td>
          <td>12</td>
          <td>16</td>
          <td>20</td>
        </tr>
        <tr>
          <td className={styles.name}>Three of a kind</td>
          <td>3</td>
          <td>6</td>
          <td>9</td>
          <td>12</td>
          <td>15</td>
        </tr>
        <tr>
          <td className={styles.name}>Two pairs</td>
          <td>2</td>
          <td>4</td>
          <td>6</td>
          <td>8</td>
          <td>10</td>
        </tr>
        <tr>
          <td className={styles.name}>Jacks or better</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CombinationsTable;
