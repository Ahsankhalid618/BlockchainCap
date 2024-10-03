'use client'
import React, { useState, useEffect } from "react";
import { SwapWidget } from "@uniswap/widgets";
import { darkTheme, lightTheme, Theme } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css"; 

const myLightTheme= {
  ...lightTheme,
  accent: "#FF007A",
  primary: "#000000",
  secondary: "#565A69",
};

const myDarkTheme = {
  ...darkTheme,
  container: "#041122da",
  accent: "#0bbaff",
  primary: "#FFFFFF",
  secondary: "#888D9B",
  module: "#092034",
};

function Widget({ tokenListUrl }) {
  
  const [tokenList, setTokenList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(tokenListUrl);
      const data = await response.json();
      setTokenList(data);
    };

    fetchData(); // Fetch data on component mount
  }, [tokenListUrl]); // Re-fetch if tokenListUrl changes

  return <SwapWidget theme={myDarkTheme} tokenList={tokenList} />;
}

export default Widget;
