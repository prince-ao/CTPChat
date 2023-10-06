'use client';
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button";
import {
  Lilita_One, Noto_Sans_Display, Paytone_One, 
  } from "next/font/google";
import { LogIn } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const lilita_one = Lilita_One({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

const paytone_one = Paytone_One({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

const noto_sans_display = Noto_Sans_Display({
  style: "normal",
  weight: "600",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-stretch justify-between w-[100vw] h-[100vh]">
      <nav className="flex items-center justify-center h-[75px]">
        <div className="w-[80%] flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Image
              src="/ctp-logo-small.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="rounded-md"
            />
            <h1 className={lilita_one.className + " text-5xl"}>
              <span className="text-blue-600">CTP</span>Chat
            </h1>
          </div>

          <div className="flex gap-2">
          <Button type="button" onClick={() => {
            router.push('/login');
          }}>
            Sign Up
          </Button>

          <Button type="button" onClick={() => {
            router.push('/login');
            }}>
            Login
          </Button>

          </div>
        </div>
      </nav>

      {/* w-[100vw] h-[100vh] to align this div to the top instead of center of the page.*/}
      <div className=" justify-center items-center text-center align-middle">
        <h1 className={paytone_one.className + " text-7xl "}>
          Welcome to <span className="text-blue-600">CTP</span>Chat!
          </h1>
        <h2 className={noto_sans_display.className + " text-base "}>
          Exclusive Open Source Career Tech Prep Communications Platform
          </h2>
      </div>

      <div className="w-[100vw] text-center bg-neutral-300">
        <div className="flex content-center justify-center space-x-3 underline decoration-solid">
          <Link href="/about">About</Link>
          <Link href="/privacyPolicy">Privacy Policy</Link>
          <Link href="/termsOfService">Terms of Service</Link>
        </div>

        <div className="content-center">
          <small>&copy; MIT License</small>
        </div>
      </div>
    </div>
  );
}

/*
export default function Home() {
  return (
    <main className=" bg-blue-500">

      <Button><Link href="/login" className="align-self-center">Sign Up/Login</Link></Button>

    </main>
  )
}
*/
