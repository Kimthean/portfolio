import { londrina } from "@/app/fonts";
import React from "react";
import Link from "next/link";

const skills = [
  {
    name: "NextJs",
    link: "https://nextjs.org/",
  },
  {
    name: "ReactJs",
    link: "https://reactjs.org/",
  },
  {
    name: "Typescript",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "javascript",
    link: "https://www.javascript.com/",
  },
  {
    name: "Tailwind",
    link: "https://tailwindcss.com/",
  },
  {
    name: "SCSS",
    link: "https://sass-lang.com/",
  },
  {
    name: "NodeJs",
    link: "https://nodejs.org/en/",
  },
  {
    name: "PHP",
    link: "https://www.php.net/",
  },
  {
    name: "Java",
    link: "https://www.java.com/en/",
  },
  {
    name: "C++",
    link: "https://www.cplusplus.com/",
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
            <button className="text-base border-black border-2 px-2 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full w-auto">
              <Link href={skills.link} target="_blank">
                {skills.name}
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
