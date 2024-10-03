"use client";
import React from "react";
import Link from "next/link";
import Styles from "./navbar.module.css";
import { signOut, useSession } from "next-auth/react";
import { Avatar } from "@nextui-org/react";
import Image from "next/image";

function Navbar() {
  const { data: session } = useSession();
  const gravatarUrl = (email) => {
    const hash = email.trim().toLowerCase();
    return `https://www.gravatar.com/avatar/${hash}?s=38&d=identicon`;
  };
  return (
    <nav className={Styles.nav}>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="N"
          width="38"
          height="38"
          className="w-12 cursor-pointer ml-12"
        />
      </Link>
      <ul className={Styles.list}>
        <Link href="/">
          <li className={Styles.item}>Home</li>
        </Link>
        <Link href="/list">
          <li className={Styles.item}>Marketplace</li>
        </Link>
        <Link href="/tokenSwap">
          <li className={Styles.item}>UniSwap</li>
        </Link>
        <Link href="/cryptoFiat">
          <li className={Styles.item}>TokenConverter </li>
        </Link>

        <Link href="https://my-project-ruby-iota.vercel.app/">
          <li className={Styles.item}>LLM Assistant </li>
        </Link>
        {/* <Link href="/explore">
        <li className={Styles.item}>NFT </li>
        </Link> */}
      </ul>
      <div className="flex gap-12">
        {!session ? (
          <>
            <Link href="/signup">
              <button className={Styles.btn}>Sign Up</button>
            </Link>
            <Link href="/login">
              <button className={Styles.btn}>Login</button>
            </Link>
          </>
        ) : (
          <>
            <Avatar
              isBordered
              showFallback
              color="success"
              src={gravatarUrl(session.user?.email)}
              className="cursor-pointer"
            />
            {/* <p className='text-main cursor-pointer'>
                {session.user?.email}
            </p> */}

            <li>
              <button
                onClick={() => {
                  signOut();
                }}
                className="font-sans font-normal text-base text-white cursor-pointer bg-[#ff0000] border-none rounded-md px-5 py-2"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
