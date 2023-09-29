import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lilita_One } from "next/font/google";

const lilita_one = Lilita_One({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
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
            <a href="/login">
              <Button>Log in</Button>
            </a>
            <a href="/signup">
              <Button>Sign up</Button>
            </a>
          </div>
        </div>
      </nav>

      <div className="w-[100vw] h-[100vh] text-center">
        <h1 className="text-7xl font-bold">Welcome to CTPChat!</h1>
        <h2>Exclusive Open Source Career Tech Prep Communications Platform</h2>
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
