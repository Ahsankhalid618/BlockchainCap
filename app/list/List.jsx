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
    name: "Tony stark",
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

function List() {
 
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Table
          removeWrapper
          borderCollapse
          aria-label="Example table with dynamic content"
          className={styles.table}
        >
          <TableHeader columns={columns} className={styles.thead}>
            {(column) => (
              <TableColumn className={styles.tclm} key={column.key}>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody className={styles.tbody} items={rows}>
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
      </div>
    </div>
  );
}

export default List;
