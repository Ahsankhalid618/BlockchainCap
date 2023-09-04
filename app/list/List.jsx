import React from "react";
import styles from "./list.module.css";

const data = [
  {
    no: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: 26540,
  },
];

function List() {
  const repeatedData = Array(17).fill(data[0]);
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
            {repeatedData.map((item, index) => (
              <tr key={index} className={styles.trow}>
                <td className={styles.tdata}>{item.no}</td>
                <td className={styles.tdata}>{item.name}</td>
                <td className={styles.tdata}>{item.symbol}</td>
                <td className={styles.tdata}>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
