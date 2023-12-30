import { londrina } from "@/app/fonts";
import React from "react";

const skills = [
  {
    name: "NextJs",
  },
  {
    name: "ReactJs",
  },
  {
    name: "Typescript",
  },
  {
    name: "javascript",
  },
  {
    name: "Tailwind",
  },
  {
    name: "SCSS",
  },
  {
    name: "NodeJs",
  },
  {
    name: "PHP",
  },
  {
    name: "Java",
  },
  {
    name: "C++",
  },
];

function Skills() {
  return (
    <div className="w-2/4 h-72 border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-purple-300">
      <div className={londrina.className}>
        <h1 className="text-6xl p-6">What Keep Me Busy?</h1>
      </div>
      <div className="flex gap-4 px-6">
        {skills.map((skills, index) => (
          <div key={index} className="h-8">
            <h2 className="text-sm border-black border-2 px-2 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full w-auto  ">
              {skills.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
