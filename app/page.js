import Image from 'next/image'
import styles from './page.module.css'
import List from "./list/List"

export default function Home() {
  return (
    <>
      <section className={styles.main}>
        <h1>Unlock the Potential of <br />Decentralized Finance</h1>
        <h3>Stay Ahead of the Financial Curve with Our Crypto Insights</h3>
      </section>
      <List/>
    </>
  )
}
