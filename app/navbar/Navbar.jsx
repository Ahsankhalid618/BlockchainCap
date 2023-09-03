import React from 'react'
import Styles from "./navbar.module.css"
function Navbar() {
    return (
        <nav className={Styles.nav}>
            <ul className={Styles.list}>
                <li className={Styles.item}>Home</li>
                <li className={Styles.item}>Market</li>
                <li className={Styles.item}>Future</li>
                <li className={Styles.item}>Data</li>
            </ul>
        </nav>
    )
}

export default Navbar