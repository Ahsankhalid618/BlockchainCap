"use client";
import { darkTheme, lightTheme, Theme, SwapWidget } from "@uniswap/widgets";
import styles from "./cryptoFiat.module.css";
import "@uniswap/widgets/fonts.css";

const myLightTheme = {
  ...lightTheme,
  accent: "#FF007A",
  primary: "#000000",
  secondary: "#565A69",
  borderRadius: 0,
};

const myDarkTheme = {
  ...darkTheme,
  borderRadius: 0,
  primary: "#FFF",
  secondary: "#FFF",
  interactive: "#003fbc",
  container: "#041122",
  module: "#013f55",
  accent: "#e49802",
};

let darkMode = true;

const CryptoFiat = () => {
  const tokenList = "https://ipfs.io/ipns/tokens.uniswap.org";
  return (
    <>
      <div className={styles.main}>
        <h1>
          Etherium Layer II
          <br />
          Crypto Tokens - Fiat Currency
        </h1>
        <div className="Uniswap">
          <SwapWidget
            theme={darkMode ? myDarkTheme : myLightTheme}
            tokenList={tokenList}
            data-testid="swap-widget"
          />
          <crypto-converter-widget
            shadow
            symbol
            live
            background-color="#041122"
            border-radius="0.21rem"
            fiat="united-states-dollar"
            crypto="bitcoin"
            amount="1"
            font-family="inherit"
            decimal-places="2"
            data-testid="crypto-converter-widget"
          ></crypto-converter-widget>
          <script
            async
            src="https://cdn.jsdelivr.net/gh/dejurin/crypto-converter-widget@1.5.2/dist/latest.min.js"
          ></script>
        </div>
      </div>
    </>
  );
};

export default CryptoFiat;
