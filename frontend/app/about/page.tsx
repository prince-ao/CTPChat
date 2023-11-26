import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Orbitron, Roboto_Serif } from "next/font/google";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const orbitron = Orbitron({ subsets: ['latin'] });
export const robotoSerif = Roboto_Serif({ subsets: ['latin'] });

export default function About() {
  return (
    <div className="flex flex-col items-stretch justify-between w-screen "> {/* h-screen to make header and footer follow scroll */}
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

              <h1 className={orbitron.className}>
                <span className="text-7xl font-bold">Scholr</span>
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

      <div className="w-full h-auto">
        <h1 className="text-center text-4xl font-bold">
            About
        </h1>

        <h2 className="text-center text-lg font-semibold py-3">
            What is Scholr?
        </h2>

        <p className="px-5 indent-10 whitespace-normal break-words">
            Scholr is an innovative communication platform designed specifically for students. 
            It facilitates seamless interaction among classmates, club members, and various student groups. 
            On Scholr, students can collaborate on assignments, discuss projects, prepare for exams, and share educational resources. 
            Beyond academics, it offers a space for students to engage in club activities and have fun. 
            This platform is an all-encompassing hub for student communication, collaboration, and community, 
            enhancing the overall educational experience.
        </p>

        <h2 className="text-center text-lg font-semibold py-3">
            Why build Scholr?
        </h2>

        <p className="px-5 indent-10 whitespace-normal break-words">
            City University of New York (CUNY) colleges offer spaces to learn and grow. 
            It is composed of students, professors, staff, principals, and so many more people. 
            When students learn about particular topics from their classes 
            they may want to connect with their classmates to review topics that were discussed in class,
            ask each other questions, find common people to become friends with, and etc.
            However, there are many communication applications that students have to message people 
            from Meta (Facebook), Twitter, Instagram, Discord, SnapChat, WhatsApp, and many more.
            None of them are specifically designed for college students in mind!
        </p>

        <br/>

        <p className="px-5 indent-10 whitespace-normal break-words">
            Herein lies Scholr as an exclusive college student communications web application designed to centralize 
            connections between all college students who may be using one to multiple messaging apps.
            <br/>
            <br/>
            For Connecting, For Learning, For College Students
            <br/>
            Add your classmates, chat with them, share notes, and more!
            <br/>
            Be a Scholar today!
        </p>

        <h2 className="text-center text-lg font-semibold">
            Who are the developers of Scholr?
        </h2>

        <div className="flex flex-row justify-evenly align-middle">

          {/* Wei Jian Zhen's Card */}
          <Card className="w-96 h-auto relative m-5 border border-red-500 bg-slate-200 text-center">
            <CardHeader>
              <CardTitle>Wei Jian Zhen</CardTitle>
              <CardDescription>Front-End Developer</CardDescription>
            </CardHeader>
            <CardContent>

              <Link href="https://github.com/WeiJian123-tech" prefetch={true}>
                <Image
                  src="https://avatars.githubusercontent.com/u/55195954?v=4"
                  alt="Wei Jian Zhen's GitHub Profile Picture"
                  width={50}
                  height={50}
                  layout="responsive"
                  objectFit="contain"
                  className="text-center"
                />
              </Link>

            </CardContent>
            <CardFooter className="flex justify-center">

              <Button variant="link" className="px-0">
                <Link href="https://github.com/WeiJian123-tech" prefetch={true}>
                    Wei Jian Zhen's GitHub Profile
                </Link>
              </Button>

            </CardFooter>
          </Card>

          {/* Prince Addo's Card */}

          <Card className="w-96 h-auto relative m-5 border border-red-500 bg-slate-200 text-center">
            <CardHeader>
              <CardTitle>Prince Addo</CardTitle>
              <CardDescription>Back-End Developer</CardDescription>
            </CardHeader>
            <CardContent>

              <Link href="https://github.com/prince-ao" prefetch={true}>
                <Image
                  src="https://avatars.githubusercontent.com/u/80477926?v=4"
                  alt="Prince Addo's GitHub Profile Picture"
                  width={50}
                  height={50}
                  layout="responsive"
                  objectFit="contain"
                  className="text-center"
                />
              </Link>

            </CardContent>
            <CardFooter className="flex justify-center">

              <Button variant="link">
                <Link href="https://github.com/prince-ao">
                    Prince Addo's GitHub Profile
                </Link>
              </Button>

            </CardFooter>
          </Card>

        </div>

        <h2 className="text-center text-lg font-semibold py-3">
            GitHub Repository
        </h2>

        <div className="flex justify-center">
          <Button variant="link">
              <Link href="https://github.com/prince-ao/Scholr.git">
                github.com/prince-ao/CTPChat.git
              </Link>
          </Button>
        </div>

      </div>

      <div className="w-screen text-center bg-neutral-300">
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
            <Link href="https://github.com/prince-ao/CTPChat/blob/f66a7d93c013f16b08b34cc1af321e59dcdcba0f/LICENSE" prefetch={true}>
              &copy; MIT License
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
