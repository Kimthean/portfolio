import { londrina } from "@/app/fonts";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const skills = [
  {
    name: "NextJs",
    link: "https://nextjs.org/",
    logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
  },
  {
    name: "ReactJs",
    link: "https://reactjs.org/",
    logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  {
    name: "Typescript",
    link: "https://www.typescriptlang.org/",
    logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  {
    name: "Javascript",
    link: "https://www.javascript.com/",
    logo: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
  },
  {
    name: "Prisma",
    link: "https://www.prisma.io/",
    logo: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg",
  },
  {
    name: "Tailwind",
    link: "https://tailwindcss.com/",
    logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
  },
  {
    name: "SCSS",
    link: "https://sass-lang.com/",
    logo: "https://cdn.worldvectorlogo.com/logos/sass-1.svg",
  },
  {
    name: "Firebase (Cloud Function,...)",
    link: "https://firebase.google.com/",
    logo: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
  },
  {
    name: "ExpressJS",
    link: "https://nodejs.org/en/",
    logo: "https://cdn.worldvectorlogo.com/logos/nodejs-1.svg",
  },
  {
    name: "PHP",
    link: "https://www.php.net/",
    logo: "https://cdn.worldvectorlogo.com/logos/php-1.svg",
  },
  {
    name: "Java",
    link: "https://www.java.com/en/",
    logo: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
  },
  {
    name: "C++",
    link: "https://www.cplusplus.com/",
    logo: "https://cdn.worldvectorlogo.com/logos/c.svg",
  },
  {
    name: "GoLang",
    link: "https://golang.org/",
    logo: "https://cdn.worldvectorlogo.com/logos/go-6.svg",
  },
];

function Skills() {
  return (
    <div className="w-full md:w-3/4 lg:w-2/4 lg:h-72 pb-6 border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-purple-300">
      <div className={londrina.className}>
        <h1 className="text-4xl lg:text-6xl md:text-4xl p-6">
          What Keep Me Busy?
        </h1>
      </div>

      <div className="flex flex-wrap gap-4 px-6">
        {skills.map((skills, index) => (
          <div key={index} className="h-10">
            <button className="text-base border-black border-2 px-2 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full w-full">
              <Link
                href={skills.link}
                target="_blank"
                className="flex items-center"
              >
                {skills.name}
                <Image
                  src={skills.logo}
                  alt={skills.name}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="object-cover h-5 w-auto px-2"
                />
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
