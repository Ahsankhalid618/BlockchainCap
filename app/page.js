"use client"
import Image from 'next/image'
import styles from './page.module.css'
import List from "./list/List"
import {NextUIProvider} from "@nextui-org/react";

export default function Home() {
  return (
    <>
    <NextUIProvider>
      <section className={styles.main}>
        <h1 >Unlock the Potential of <br />Decentralized Finance</h1>
        <h3>Stay Ahead of the Financial Curve with Our Crypto Insights</h3>
      </section>
      <List/>
    </NextUIProvider>
    </>
  )
}
