// pages/TokenSwap.js
"use client";
import {darkTheme, lightTheme, Theme, SwapWidget } from '@uniswap/widgets';
import styles from "./tokenSwap.module.css"
import '@uniswap/widgets/fonts.css';

const myLightTheme = {
    ...lightTheme, // Extend the lightTheme
    accent: '#FF007A',
    primary: '#000000',
    secondary: '#565A69',
  }
  
  const myDarkTheme = {
    ...darkTheme, // Extend the darkTheme
    container: '#041122da',
    accent: '#0bbaff',
    primary: '#FFFFFF',
    secondary: '#888D9B',
    module: '#092034',
  }
  let darkMode = true

const TokenSwap = () => {
  return (
    <>
    <div className={styles.main}>
<div className="Uniswap">
      <SwapWidget theme={darkMode ? myDarkTheme : myLightTheme} />
    </div>
    </div>
    
    </>
  );
};

export default TokenSwap;
