import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lilita_One, Noto_Sans_Display, Paytone_One } from "next/font/google";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function About() {
  return (
    <div className="flex flex-col items-stretch justify-between w-[100vw] h-[100vh]">
      <nav className="flex items-center justify-center h-[75px]">
        <div className="w-[80%] flex items-center justify-between">

        {/*To redirect app/about.tsx to app/page.tsx. User may click just as in about, termsofservice, and privacypolicy pages */}
          <Link href="/" prefetch={true}> 
            <div className="flex items-center gap-6">
              <Image
                src="/ctp-logo-small.png"
                width={60}
                height={60}
                alt="Picture of the author"
                className="rounded-md"
              />
              <h1 className={"font-lilita-one text-5xl"}>
                <span className="text-blue-600">CTP</span>Chat
              </h1>
            </div>
          </Link>

          <div className="flex gap-2">
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </nav>

      <div>
        <h1 className="text-center text-4xl font-bold">
            About
        </h1>

        <h2 className="text-center text-lg font-semibold py-3">
            Why build CTPChat?
        </h2>

        <p className="pl-1 indent-10">
            City University of New York (CUNY) Career Tech Prep (CTP) offers a space to learn about technology
            whether it be Web Development or Data Science. It is composed of fellows, instructors, career coaches,
            and so many more people. However, members of CUNY CTP have to rely on two communications applications, 
            Slack and Discord, to communicate with each other. Slack has paywalls and limits that may hinder workflow. 
            Discord does not have streamlined User Interface (UI) designed specifically for educational/professional work. 
            CUNY CTP members having Slack and Discord accounts to communicate with each other may get cumbersome, confusing, 
            and/or tiresome especially when switching between the two communication softwares.
        </p>

        <br/>

        <p className="pl-1 indent-10">
            Herein lies CTPChat as an exclusive CUNY CTP communications web application designed to centralize communication
            between CUNY CTP members.
            CTPChat will be geared specifically towards the educational and communicative needs of CUNY CTP.
        </p>

        <h2 className="text-center text-lg font-semibold">
            Who are the developers of CTPChat?
        </h2>

        <h3 className="text-base font-medium pt-2.5 pr-1 pb-1 pl-1.5">
            Wei Jian Zhen: Front-End Developer
        </h3>

        <Button variant="link">
            <Link href="https://github.com/WeiJian123-tech">
                Wei Jian Zhen's GitHub Profile
            </Link>
        </Button>

        <h3 className="text-base font-medium pt-2.5 pr-1 pb-1 pl-1.5">
            Prince Addo: Back-End Developer
        </h3>

        <Button variant="link">
            <Link href="https://github.com/prince-ao">
                Prince Addo's GitHub Profile
            </Link>
        </Button>

        <h2 className="text-center text-lg font-semibold py-3">
            GitHub Repository
        </h2>

        <Button variant="link">
            <Link href="https://github.com/prince-ao/CTPChat.git">
                github.com/prince-ao/CTPChat.git
            </Link>
        </Button>

      </div>

      <div className="w-[100vw] text-center bg-neutral-300">
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
          {/*Linked to our GitHub license.md from MIT license page*/}
          <small>
            <Link href="https://github.com/prince-ao/CTPChat/blob/52a941732ef22bf62bd9e59133a8ccd9264608ee/LICENSE" prefetch={false}>
              &copy; MIT License
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
