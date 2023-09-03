import React from "react";
import styles from "./list.module.css";

function List() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.trow}>
              <td className={styles.tdata}>#</td>
              <td className={styles.tdata}>Name</td>
              <td className={styles.tdata}>Symbol</td>
              <td className={styles.tdata}>Price</td>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr className={styles.trow}>
              <td className={styles.tdata}>01</td>
              <td className={styles.tdata}>Bitcoin</td>
              <td className={styles.tdata}>BTC</td>
              <td className={styles.tdata}>26540</td>
            </tr>
            <tr className={styles.trow}>
              <td className={styles.tdata}>01</td>
              <td className={styles.tdata}>Bitcoin</td>
              <td className={styles.tdata}>BTC</td>
              <td className={styles.tdata}>26540</td>
            </tr>
            <tr className={styles.trow}>
              <td className={styles.tdata}>01</td>
              <td className={styles.tdata}>Bitcoin</td>
              <td className={styles.tdata}>BTC</td>
              <td className={styles.tdata}>26540</td>
            </tr>
            <tr className={styles.trow}>
              <td className={styles.tdata}>01</td>
              <td className={styles.tdata}>Bitcoin</td>
              <td className={styles.tdata}>BTC</td>
              <td className={styles.tdata}>26540</td>
            </tr>
            <tr className={styles.trow}>
              <td className={styles.tdata}>01</td>
              <td className={styles.tdata}>Bitcoin</td>
              <td className={styles.tdata}>BTC</td>
              <td className={styles.tdata}>26540</td>
            </tr>
            <tr className={styles.trow}>
              <td className={styles.tdata}>01</td>
              <td className={styles.tdata}>Bitcoin</td>
              <td className={styles.tdata}>BTC</td>
              <td className={styles.tdata}>26540</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
