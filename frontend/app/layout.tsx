import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

//Name and url were the only values from type Author in the internal Typescript file.
type Author = {
  name: string,
  url: string 
}

export const metadata: Metadata = {
  title: "CTPChat",
  description: "An Open Source CTP Communication Platform Project",
  authors: [{ name: 'Prince Addo', }, { name: 'Wei Jian Zhen', }], //Requires type Author
  keywords: "CTPChat, CTP, Career Tech Prep, CUNY, cuny, communication, platform, message, messaging, service",
  icons: "/ctp-logo.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
