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

export default function TermsOfService() {
  return (
    <div className="flex flex-col items-stretch justify-between w-[100vw] h-[100vh]">
      <nav className="flex items-center justify-center h-[75px]">
        <div className="w-[80%] flex items-center justify-between">

          {
          /*
          To redirect app/termsofservice.tsx to app/page.tsx. 
          User may click just as in about, termsofservice, and privacypolicy pages 
          */
          }
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

      <div className="w-full h-auto whitespace-normal break-words">
        <h1>Website Terms and Conditions of Use</h1>

        <h2>1. Terms</h2>

        <p>
            By accessing this Website, accessible from www.ctpchat.com,
            you are agreeing to be bound by these Website Terms and Conditions of Use
            and agree that you are responsible for the agreement with any applicable local laws.
            If you disagree with any of these terms, you are prohibited from accessing this site.
            The materials contained in this Website are protected by copyright and trade mark law.
        </p>

        <h2>2. Use License</h2>

        <p>
            Permission is granted to temporarily download one copy of the materials on CTPChat's Website for personal, 
            non-commercial transitory viewing only. 
            This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>

        <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose or for any public display;</li>
            <li>attempt to reverse engineer any software contained on CTPChat's Website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
        </ul>

        <p>
            This will let CTPChat to terminate upon violations of any of these restrictions. 
            Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials 
            in your possession whether it is printed or electronic format. 
            These Terms of Service has been created with the help of the 
            <Button variant="link"><Link href="https://www.termsofservicegenerator.net">Terms Of Service Generator</Link></Button>.
        </p>

        <h2>3. Disclaimer</h2>

        <p>
            All the materials on CTPChat's Website are provided "as is". 
            CTPChat makes no warranties, may it be expressed or implied, therefore negates all other warranties. 
            Furthermore, CTPChat does not make any representations concerning the accuracy or reliability of the use of the materials 
            on its Website or otherwise relating to such materials or any sites linked to this Website.
        </p>

        <h2>4. Limitations</h2>

        <p>
            CTPChat or its suppliers will not be hold accountable for any damages that will arise with the use or 
            inability to use the materials on CTPChat's Website, even if CTPChat or 
            an authorize representative of this Website has been notified, orally or written, 
            of the possibility of such damage. 
            Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, 
            these limitations may not apply to you.
        </p>

        <h2>5. Revisions and Errata</h2>

        <p>
            The materials appearing on CTPChat's Website may include technical, typographical, or photographic errors. 
            CTPChat will not promise that any of the materials in this Website are accurate, complete, or current. 
            CTPChat may change the materials contained on its Website at any time without notice. 
            CTPChat does not make any commitment to update the materials.
        </p>

        <h2>6. Links</h2>

        <p>
            CTPChat has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked 
            site. The presence of any link does not imply endorsement by CTPChat of the site. 
            The use of any linked website is at the user's own risk.
        </p>

        <h2>7. Site Terms of Use Modifications</h2>

        <p>
            CTPChat may revise these Terms of Use for its Website at any time without prior notice. 
            By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
        </p>

        <h2>8. Your Privacy</h2>

        <p>
            Please read our Privacy Policy.
        </p>

        <h2>9. Governing Law</h2>

        <p>
            Any claim related to CTPChat's Website shall be 
            governed by the laws of us without regards to its conflict of law provisions.
        </p>
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
