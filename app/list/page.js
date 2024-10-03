"use client";
import React, { useState, useEffect } from "react";
import styles from "./list.module.css";
import Image from "next/image";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from "@nextui-org/react";
import { useInfiniteScroll } from "@nextui-org/use-infinite-scroll";
import { useAsyncList } from "@react-stately/data";
import { TickerTape } from "react-ts-tradingview-widgets";
import dynamic from "next/dynamic";
const SymbolOverviewNoSSR = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.SymbolOverview),
  {
    ssr: false,
  }
);

function List() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState([]);

  const fetchTokenMetrics = async (cursor) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${cursor}&sparkline=false&locale=en`
      );
      const data = await response.json();

      setHasMore(data.length > 0);

      return {
        items: data || [],
        cursor: cursor + 1,
      };
    } catch (err) {
      console.error(err);
      return {
        items: [],
        cursor: null,
      };
    } finally {
      setIsLoading(false);
    }
  };

  const list = useAsyncList({
    initialData: [],
    load: async ({ cursor }) => {
      return await fetchTokenMetrics(cursor);
    },
  });

  const [loaderRef, scrollerRef] = useInfiniteScroll({
    hasMore,
    onLoadMore: list.loadMore,
  });

  useEffect(() => {
    setItems(list.items);
  }, [list.items]);

  useEffect(() => {
    list.reload();
  }, []);
  const fear = "https://alternative.me/crypto/fear-and-greed-index.png";

  return (
    <div className={styles.main}>
      <h1>
        Today's Cryptocurrency Prices
        <br />
        Top Trending Tokens
      </h1>

      <TickerTape colorTheme="dark" isTransparent="true"></TickerTape>

      {/* <Image src={fear} alt="Latest Crypto Fear & Greed Index" width={300} height={300} /> */}
      {/* <iframe src="https://bit2me.com/widget/crypto-carousel/v1" style={{display: 'block', width: '100%', height: '40px'}} frameborder="0"></iframe> */}

      <Table
        isHeaderSticky
        hideScrollBar
        aria-label="Cryptocurrency Table"
        baseRef={scrollerRef}
        bottomContent={
          hasMore ? (
            <div className="flex w-modern justify-center">
              <Spinner ref={loaderRef} color="white" />
            </div>
          ) : null
        }
        classNames={{
          base: "max-h-[800px] w-modern dark text-dark-primary bg-dark-primary rounded-lg",
          table:
            "min-h-[400px] w-modern dark bg-dark-primary text-white rounded-lg",
        }}
      >
        <TableHeader className="fixed top-0 left-0 right-0 flex justify-center dark:bg-dark-primary">
          <TableColumn className="text-center" key="market_cap_rank">
            ID
          </TableColumn>
          <TableColumn className="text-center" key="name">
            Name
          </TableColumn>
          <TableColumn key="image">Image</TableColumn>
          <TableColumn className="text-center" key="symbol">
            Symbol
          </TableColumn>
          <TableColumn className="text-center" key="current_price">
            Price (USD)
          </TableColumn>
          <TableColumn className="text-center" key="high_24h">
            High 24hr
          </TableColumn>
          <TableColumn className="text-center" key="low_24h">
            Low 24hr
          </TableColumn>
        </TableHeader>
        <TableBody
          isLoading={isLoading}
          items={items}
          loadingContent={<Spinner color="white" />}
          className="text-center flex justify-start"
        >
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell
                  className={
                    columnKey === "high_24h"
                      ? "text-green-500"
                      : columnKey === "low_24h"
                      ? "text-red-500"
                      : null
                  }
                >
                  {columnKey === "image" ? (
                    <Image
                      src={item[columnKey]}
                      width={30}
                      height={30}
                      alt={item.name}
                    />
                  ) : columnKey === "current_price" ||
                    columnKey === "high_24h" ||
                    columnKey === "low_24h" ? (
                    `${item[columnKey]}$`
                  ) : (
                    item[columnKey]
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default List;
