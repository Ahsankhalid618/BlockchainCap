"use client"
import styles from './page.module.css';
import List from "./list/page";
import { NextUIProvider } from "@nextui-org/react";
import '@uniswap/widgets/fonts.css'


export default function Home() {
  return (
    <>

    <NextUIProvider>
        <section className={styles.main}>
          <h1>BlockchainCap Unleashed<br />From Tokens to Triumph</h1>
          <h3>Stay Ahead of the Financial Curve with crypto data and conversion platform</h3>
          <List />
        </section>
      </NextUIProvider>
      </>
  );
}
