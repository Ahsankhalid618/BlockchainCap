"use client"
import styles from './page.module.css';
import List from "./list/page";
import { NextUIProvider } from "@nextui-org/react";
import '@uniswap/widgets/fonts.css'
import { Timeline } from "react-ts-tradingview-widgets";


export default function Home() {
  return (
    <>

    <NextUIProvider>
      <section className={styles.main}>

          <h1>BlockchainCap Unleashed<br/>From Tokens to Triumph</h1>
          <h3>Stay Ahead of the Financial Curve with crypto data and conversion platform</h3>

          {/* <List /> */}

          <div className='mt-40 w-full flex flex-col items-center'>
          <Timeline colorTheme="dark" feedMode="market" DisplayMode="regular" isTransparent="true" market="crypto" height={600} width="80%"></Timeline>
          </div>
          
        </section>
      </NextUIProvider>
      </>
  );
}
