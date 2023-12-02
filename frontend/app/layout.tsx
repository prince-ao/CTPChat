import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Scholr",
  description: "An Open Source Communication Platform For Students",
  authors: [{ name: "Prince Addo" }, { name: "Wei Jian Zhen" }], //Requires type Author
  keywords: "Scholr, communication, platform, message, messaging, service",
  // icons: "/ctp-logo.ico",
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
