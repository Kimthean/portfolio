import { londrinaSolid } from "@/app/fonts";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className={londrinaSolid.className}>
      <nav className="max-container bg-white h-20 lg:h-24 relative flex items-center justify-between">
        <div className="text-4xl lg:text-6xl">TheanCodes</div>
        <div className="flex">
          <div className="pl-4">
            <Link href="https://github.com/Kimthean" target="_blank">
              <Image
                src="/assets/github.png"
                alt="github"
                width={0}
                height={0}
                sizes="100%"
                className="object-cover h-8 w-8"
              />
            </Link>
          </div>
          <div className="pl-4">
            <Link href="https://t.me/kea_kimthean" target="_blank">
              <Image
                src="/assets/telegram.png"
                alt="telegram"
                width={0}
                height={0}
                sizes="100%"
                className="object-cover h-8 w-8"
              />
            </Link>
          </div>
          <div className="pl-4">
            <Link
              href="https://www.linkedin.com/in/kea-kimthean-095431267/"
              target="_blank"
            >
              <Image
                src="/assets/linkedin.png"
                alt="linkedin"
                width={0}
                height={0}
                sizes="100%"
                className="object-cover h-9 w-9 pb-1"
              />
            </Link>
          </div>
        </div>
      </nav>
      <div className="w-full border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"></div>
    </div>
  );
}

export default Navbar;
