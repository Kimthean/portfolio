import React from "react";
import Image from "next/image";
import { londrina } from "@/app/fonts";
import Link from "next/link";

export default function introCard() {
  return (
    <article className="lg:w-8/12 md:w-7/12 sm:w-full lg:h-72 sm:h-72 border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-[#A4B4FB]">
      <div className="px-6 py-5 text-left h-full ">
        <div className={londrina.className}>
          <h1 className="text-7xl md:text-6xl max-sm:text-5xl mb-4">
            Developer @
            <Link href="https://dreamslab.dev/" target="_blank">
              DreamsLab
            </Link>
          </h1>
        </div>
        <p className="text-xl max-sm:text-base max-md:text-base md:flex lg:pt-4">
          Made with
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="flex pl-1"
          >
            @NextJs
            <Image
              src="assets/next-js.svg"
              alt="nextlogo"
              width={0}
              height={0}
              className="w-9 h-9 max-sm:w-7 max-sm:h-7 max-sm:pb-1 px-1 pb-2"
            />
          </Link>
          And a little bit of Magic.
        </p>

        <div className="text-3xl max-sm:text-2xl pt-4">
          Located at <strong>Phnom Penh.</strong>
        </div>
      </div>
    </article>
  );
}
