import React from "react";
import { londrina } from "@/app/fonts";

function Introduction() {
  return (
    <div className="pt-4 w-full md:w-2/4 lg:w-2/4 pb-20">
      <div className="h-auto lg:h-80 border-black border-2 max-sm:pb-4 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-[#0effa8]">
        <div className={londrina.className}>
          <h1 className="text-4xl lg:text-6xl md:text-6xl p-6">About Me</h1>
        </div>
        <div className="px-6">
          <p className="md:text-xl lg:text-2xl text-lg">
            My name is Thean, and I&apos;m a 20-year-old developer from Cambodia
            with a relentless passion for coding and emerging technologies.
            Currently a 2nd-year IT student at the University of Cambodia,
            I&apos;m particularly energized by self-learning and exploring new
            tools. My hands-on experience includes ReactJS, NextJS, NestJS, and
            I&apos;m always eager to delve into the latest web development
            advancements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
