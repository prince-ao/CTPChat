import Link from "next/link";

export default function TermsOfService() {

    return(
        <div className="flex flex-col items-center justify-between w-[100vw] h-[100vh] bg-slate-300">

            <div className="w-[100vw]">
                <h1 className="text-center text-3xl">Terms of Service</h1>

                <br/>

                <p className="indent-[5vw]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <p className="indent-[5vw]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                
                <p className="indent-[5vw]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
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