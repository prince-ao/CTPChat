/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Orbitron, Roboto_Serif } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const orbitron = Orbitron({ subsets: ["latin"] });
export const robotoSerif = Roboto_Serif({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      console.log(localStorage.getItem("uuid"));
      if (localStorage.getItem("uuid") !== null) {
        router.replace("/home");
      }
    })();
  }, []);

  return (
    /* Div for whole body */
    <div className="flex flex-col items-stretch justify-between w-screen h-screen">
      {/* Div for navigation bar*/}
      <div className="flex flex-col items-stretch justify-between w-screen">
        <nav className="flex items-center justify-center h-[75px]">
          <div className="w-[80%] flex items-center justify-between">
            {/* a tags for self routing. Better efficiency than Link in this case. */}
            <a href="/" className="flex gap-6">
              <Image
                src="/ctp-logo-small.png"
                width={60}
                height={60}
                alt="Picture of the author"
                className="rounded-md"
              />

              <h1 className={orbitron.className}>
                <span className="text-7xl font-bold">Scholr</span>
              </h1>
            </a>

            <div className="flex gap-2">
              <Button asChild>
                <Link href="/login" prefetch={true}>
                  Login
                </Link>
              </Button>

              <Button variant="outline" asChild>
                <Link href="/signup" prefetch={true}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      </div>

      {/* Div for body/middle content */}
      <div className="justify-center items-center text-center align-middle w-screen h-auto mt-auto mb-auto">
        <h1 className={robotoSerif.className}>
          <span className="text-6xl text-black">Welcome to Scholr</span>
        </h1>
        <h2 className={robotoSerif.className}>
          <span className="text-lg">
            An Innovative Communications Platform for College Students
          </span>
        </h2>
      </div>

      {/* 
      Div for footer. 
      'mt-auto mb-auto fixed bottom-0' to make footer always be at the bottom. 
      Need to make all children divs be that way as well. 
      */}
      <div className="w-screen mt-auto mb-auto fixed bottom-0 text-center bg-neutral-300">
        <div className="flex content-center justify-center space-x-3 underline decoration-solid">
          <Link href="/about" prefetch={true}>
            About
          </Link>
          <Link href="/privacypolicy" prefetch={true}>
            Privacy Policy
          </Link>
          <Link href="/termsofservice" prefetch={true}>
            Terms of Service
          </Link>
        </div>

        <div className="content-center">
          <small>
            <Link
              href="https://github.com/prince-ao/CTPChat/blob/52a941732ef22bf62bd9e59133a8ccd9264608ee/LICENSE"
              prefetch={true}
            >
              &copy; MIT License
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
