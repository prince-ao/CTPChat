/*
'use client'
import * as React from "react";
import { useRouter } from 'next/navigation';
*/
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Lilita_One, Noto_Sans_Display, Paytone_One, 
  } from "next/font/google";

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
  //const router = useRouter();

  return (
    <div className="flex flex-col items-stretch justify-between w-[100vw] h-[100vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-200 via-sky-100 to-neutral-50">
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
            {/*
            Changing default value of Shadcn Tab in child directory page.tsx file via Shadcn buttons proved too difficult.
            Either have the user click one button that goes to login page
            Or have two buttons that goes to seperate pages, a sign up page and a login page.
            */
           
            /*
            <Button type="button" onClick={() => {
              router.push('/login?value=sign-up');
            }}>
              Sign Up
            </Button>

            <Button type="button" onClick={() => {
              router.push('/login?value=login');
              }}>
              Login
            </Button>
            */}

            <Button type="button" asChild>
              <Link href="/login" prefetch={true}>Sign Up / Login</Link>
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
          <Link href="/about" prefetch={true}>About</Link>
          <Link href="/privacypolicy" prefetch={true}>Privacy Policy</Link>
          <Link href="/termsofservice" prefetch={true}>Terms of Service</Link>
        </div>

        <div className="content-center">
          {/*Link to our license.md once we have created our license*/}
          <small><Link href="https://opensource.org/license/mit/" prefetch={false}>&copy; MIT License</Link></small>
        </div>
      </div>
    </div>
  );
}
