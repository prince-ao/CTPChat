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
            <h1 className={"font-lilita-one text-5xl"}>
              <span className="text-blue-600">CTP</span>Chat
            </h1>
          </div>

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

      <div className=" justify-center items-center text-center align-middle">
        <h1 className="text-7xl font-bold mb-4">
          Welcome to <span className="text-blue-600">CTP</span>Chat!
        </h1>
        <h2 className="text-xl">
          Exclusive Open Source Career Tech Prep Communications Platform
        </h2>
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
          {/*Link to our license.md once we have created our license*/}
          <small>
            <Link href="https://opensource.org/license/mit/" prefetch={false}>
              &copy; MIT License
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
