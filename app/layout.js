import './globals.css';
// import { AuthProvider } from 'next-auth'
import { Inter } from 'next/font/google';
import Navbar from './navbar/page';
import Footer from "./footer/page";
import { getServerSession } from "next-auth";
import SessionProvider from "@/lib/SessionProvider";
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
      <SessionProvider session={session}>
        <Navbar />
        {children}
        <Footer />
        </SessionProvider>
        </body>
    </html>
  )
}
