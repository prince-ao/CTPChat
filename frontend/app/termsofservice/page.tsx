import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Orbitron, Roboto_Serif } from "next/font/google";

export const orbitron = Orbitron({ subsets: ['latin'] });
export const robotoSerif = Roboto_Serif({ subsets: ['latin'] });

export default function TermsOfService() {
  return (
    <div className="flex flex-col items-stretch justify-between w-[100vw] h-[100vh] bg-slate-300 overflow-x-hidden">
      <nav className="flex items-center justify-center h-[75px] bg-slate-950 hover:bg-slate-900 shadow-2xl">
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
                src="/Scholr_Logo.png"
                width={60}
                height={60}
                alt="Scholr Logo"
                className="rounded-md"
              />

              <h1 className={orbitron.className}>
                <span className="text-7xl text-[#20C20E] font-bold">Scholr</span>
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

      <div className="w-full h-auto px-5 whitespace-normal break-words">
        <h1 className="text-xl font-semibold">Website Terms and Conditions of Use</h1>

        <h2 className="text-lg font-semibold">1. Terms</h2>

        <p>
            By accessing this Website, accessible from www.scholr.com,
            you are agreeing to be bound by these Website Terms and Conditions of Use
            and agree that you are responsible for the agreement with any applicable local laws.
            If you disagree with any of these terms, you are prohibited from accessing this site.
            The materials contained in this Website are protected by copyright and trade mark law.
        </p>

        <h2 className="text-lg font-semibold">2. Use License</h2>

        <p>
            Permission is granted to temporarily download one copy of the materials on Scholr's Website for personal, 
            non-commercial transitory viewing only. 
            This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>

        <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose or for any public display;</li>
            <li>attempt to reverse engineer any software contained on Scholr's Website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
        </ul>

        <p>
            This will let Scholr to terminate upon violations of any of these restrictions. 
            Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials 
            in your possession whether it is printed or electronic format. 
            These Terms of Service has been created with the help of the 
            <Button variant="link" className="h-0 m-0 px-1 py-0"><Link href="https://www.termsofservicegenerator.net">Terms Of Service Generator</Link></Button>.
        </p>

        <h2 className="text-lg font-semibold">3. Disclaimer</h2>

        <p>
            All the materials on Scholr's Website are provided "as is". 
            Scholr makes no warranties, may it be expressed or implied, therefore negates all other warranties. 
            Furthermore, Scholr does not make any representations concerning the accuracy or reliability of the use of the materials 
            on its Website or otherwise relating to such materials or any sites linked to this Website.
        </p>

        <h2 className="text-lg font-semibold">4. Limitations</h2>

        <p>
            Scholr or its suppliers will not be hold accountable for any damages that will arise with the use or 
            inability to use the materials on Scholr's Website, even if Scholr or 
            an authorize representative of this Website has been notified, orally or written, 
            of the possibility of such damage. 
            Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, 
            these limitations may not apply to you.
        </p>

        <h2 className="text-lg font-semibold">5. Revisions and Errata</h2>

        <p>
            The materials appearing on Scholr's Website may include technical, typographical, or photographic errors. 
            Scholr will not promise that any of the materials in this Website are accurate, complete, or current. 
            Scholr may change the materials contained on its Website at any time without notice. 
            Scholr does not make any commitment to update the materials.
        </p>

        <h2 className="text-lg font-semibold">6. Links</h2>

        <p>
            Scholr has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked 
            site. The presence of any link does not imply endorsement by Scholr of the site. 
            The use of any linked website is at the user's own risk.
        </p>

        <h2 className="text-lg font-semibold">7. Site Terms of Use Modifications</h2>

        <p>
            Scholr may revise these Terms of Use for its Website at any time without prior notice. 
            By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
        </p>

        <h2 className="text-lg font-semibold">8. Your Privacy</h2>

        <p>
            Please read our Privacy Policy.
        </p>

        <h2 className="text-lg font-semibold">9. Governing Law</h2>

        <p>
            Any claim related to Scholr's Website shall be 
            governed by the laws of us without regards to its conflict of law provisions.
        </p>

        <h2 className="text-lg font-semibold">10. Arbitration</h2>

        <p>
        Any dispute, controversy, or claim arising out of or relating to this Agreement
        or the breach, termination, enforcement, interpretation, or validity thereof,
        including the determination of the scope or applicability of this agreement to arbitrate, 
        shall be determined by arbitration in New York City before one arbitrator. 
        The arbitration shall be administered by JAMS pursuant to its Comprehensive Arbitration Rules and Procedures. 
        Prior to initiating arbitration, the parties shall first attempt to resolve the dispute through good faith negotiations.
        Judgment on the Award may be entered in any court having jurisdiction. 
        This clause shall not preclude parties from seeking provisional remedies 
        in aid of arbitration from a court of appropriate jurisdiction.
        </p>

      </div>

      <div className="w-[100vw] mt-3 text-center bg-neutral-400 shadow-2xl">
        <div className="flex content-center justify-center space-x-3 underline decoration-solid">
          <Link href="/about" prefetch={true} className="text-[#0000EE] hover:text-[0404FF] visited:text-[#551A8B]">
            About
          </Link>
          <Link href="/privacypolicy" prefetch={true} className="text-[#0000EE] hover:text-[0404FF] visited:text-[#551A8B]">
            Privacy Policy
          </Link>
          <Link href="/termsofservice" prefetch={true} className="text-[#0000EE] hover:text-[0404FF] visited:text-[#551A8B]">
            Terms of Service
          </Link>
        </div>

        <div className="content-center">
          {/*Linked to our GitHub license.md from MIT license page*/}
          <small>
            <Link href="https://github.com/prince-ao/Scholr/blob/52a941732ef22bf62bd9e59133a8ccd9264608ee/LICENSE" prefetch={true}>
              &copy; MIT License
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
