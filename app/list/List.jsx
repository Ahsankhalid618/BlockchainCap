"use client";
import React from "react";
import styles from "./list.module.css";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "role",
    label: "ROLE",
  },
  {
    key: "status",
    label: "STATUS",
  },
];
// const data = [
//   {
//     no: 1,
//     name: "Bitcoin",
//     symbol: "BTC",
//     price: 26540,
//   },
// ];

function List() {
  // const repeatedData = Array(17).fill(data[0]);
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Table borderCollapse="collapse"
          removeWrapper
          aria-label="Example table with dynamic content"
          className={styles.table}
        >
          <TableHeader  columns={columns} className="border-white-1">
            {(column) => (
              <TableColumn className={styles.trow} key={column.key}>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody  className={styles.tbody} items={rows}>
            {(item) => (
              <TableRow className={styles.trow} key={item.key}>
                {(columnKey) => (
                  <TableCell className={styles.tdata}>
                    {getKeyValue(item, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
        {/* <table className={styles.table}>
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
        </table> */}
      </div>
    </div>
  );
}

export default List;
