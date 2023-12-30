import { londrinaSolid } from "@/app/fonts";
import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div className={londrinaSolid.className}>
      <nav className="max-container bg-white h-24 relative flex items-center justify-between">
        <div className="text-[50px]">TheanWeb</div>
        <div className="flex">
          <div className="ml-4 text-2xl">Home</div>
          <div className="pl-4">
            <Image
              src="/assets/github.png"
              alt="ksad"
              width={0}
              height={0}
              sizes="100%"
              className="object-cover h-8 w-8"
            />
          </div>
          <div className="pl-4">
            <Image
              src="/assets/linkedin.png"
              alt="ksad"
              width={0}
              height={0}
              sizes="100%"
              className="object-cover h-9 w-9"
            />
          </div>
        </div>
      </nav>
      <div className="w-full border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"></div>
    </div>
  );
}

export default Navbar;
