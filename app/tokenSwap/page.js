import React from "react";
import Widget, { myDarkTheme, myLightTheme } from "./Widget"; // Import the client component
import styles from "./tokenSwap.module.css";

const tokenListUrl = "https://ipfs.io/ipns/tokens.uniswap.org";

const TokenSwap = () => {
  // Consider fetching theme preference from user or session storage

  let darkMode = true;
  const currentTheme = darkMode ? myDarkTheme : myLightTheme;
  return (
    <>
      <div className={styles.main}>
        <h1>
          Etherium Layer I<br />
          UniSwap Protocol Token Swapping
        </h1>
        <div className="Uniswap">
          <Widget theme={currentTheme} tokenListUrl={tokenListUrl} />
        </div>
      </div>
    </>
  );
};

export default TokenSwap;
