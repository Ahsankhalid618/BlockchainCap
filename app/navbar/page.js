import React from 'react'
import Link from 'next/link'
import Styles from "./navbar.module.css"


function Navbar() {
    

    return (
        <nav className={Styles.nav}>
            <ul className={Styles.list}>
               <Link href="/"><li className={Styles.item}>Home</li></Link> 
               <li className={Styles.item}>CoinListing</li>
                <li className={Styles.item}>Token Swap</li>
                <li className={Styles.item}>Crypto-Fiat </li>
                <li className={Styles.item}>Wallet</li>
            </ul>
           <Link href="/signup">
           <button className={Styles.btn}>Sign Up</button>
           </Link> 
        </nav>
    )
}

export default Navbar