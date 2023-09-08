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
    "key": "1",
    "name": "Alice Johnson",
    "role": "Marketing Director",
    "status": "Active"
  },
  {
    "key": "2",
    "name": "John Smith",
    "role": "Sales Manager",
    "status": "Paused"
  },
  {
    "key": "3",
    "name": "Eva Martinez",
    "role": "HR Coordinator",
    "status": "Active"
  },
  {
    "key": "4",
    "name": "Michael Brown",
    "role": "Financial Analyst",
    "status": "Vacation"
  },
  {
    "key": "5",
    "name": "Sophia Lee",
    "role": "Product Manager",
    "status": "Active"
  },
  {
    "key": "6",
    "name": "David Wilson",
    "role": "Software Engineer",
    "status": "Paused"
  },
  {
    "key": "7",
    "name": "Olivia Garcia",
    "role": "Customer Support",
    "status": "Active"
  },
  {
    "key": "8",
    "name": "William Anderson",
    "role": "Design Lead",
    "status": "Vacation"
  },
  {
    "key": "9",
    "name": "Sophie Taylor",
    "role": "Quality Assurance",
    "status": "Active"
  },
  {
    "key": "10",
    "name": "James Clark",
    "role": "Project Manager",
    "status": "Paused"
  },
  {
    "key": "11",
    "name": "Liam Harris",
    "role": "Content Writer",
    "status": "Active"
  },
  {
    "key": "12",
    "name": "Emma Martinez",
    "role": "UI/UX Designer",
    "status": "Vacation"
  },
  {
    "key": "13",
    "name": "Ava Davis",
    "role": "Data Analyst",
    "status": "Active"
  },
  {
    "key": "14",
    "name": "Noah Lewis",
    "role": "System Administrator",
    "status": "Paused"
  },
  {
    "key": "15",
    "name": "Mia White",
    "role": "Legal Counsel",
    "status": "Active"
  },
  {
    "key": "16",
    "name": "Benjamin Turner",
    "role": "Marketing Specialist",
    "status": "Vacation"
  },
  {
    "key": "17",
    "name": "Amelia Parker",
    "role": "Business Development",
    "status": "Active"
  },
  {
    "key": "18",
    "name": "Henry Brooks",
    "role": "IT Support",
    "status": "Paused"
  },
  {
    "key": "19",
    "name": "Elizabeth Scott",
    "role": "Product Owner",
    "status": "Active"
  },
  {
    "key": "20",
    "name": "Daniel Adams",
    "role": "Finance Manager",
    "status": "Vacation"
  }
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
          
          aria-label="Example table with dynamic content"
          // className={styles.table}
        >
          <TableHeader columns={columns} >
            {(column) => (
              <TableColumn key={column.key}>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody  items={rows}>
            {(item) => (
              <TableRow  key={item.key}>
                {(columnKey) => (
                  <TableCell >
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
