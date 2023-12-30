import Image from "next/image";
import { londrina } from "./fonts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between max-container">
      <div className="w-8/12 h-auto border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-amber-200">
        <article className="w-full h-full">
          <figure className="w-full h-1/2 border-black border-b-2"></figure>
          <div className="px-6 py-5 text-left h-full">
            <div className={londrina.className}>
              <h1 className="text-5xl mb-4">
                Web Developer @
                <Link href="https://dreamslab.dev/" target="_blank">
                  DreamsLab
                </Link>
              </h1>
            </div>
            <p className="text-xl mb-4 line-clamp-4">
              Made by{" "}
              <Link href="https://nextjs.org/" target="_blank">
                @NextJs{" "}
              </Link>
            </p>
            <strong>Read More</strong>
          </div>
        </article>
      </div>
    </main>
  );
}
