import React from "react";
import { londrina } from "@/app/fonts";

function Introduction() {
  return (
    <div className="pt-12 w-full">
      <div className="h-72 border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-pink-400">
        <div className={londrina.className}>
          <h1 className="text-6xl p-6">About Me</h1>
        </div>
        <div className="px-6">
          <p className="text-xl">
            My name is Thean, I&apos;m a 20 years old developer from Cambodia. I
            study at <a href="https://www.uc.edu.kh/">University of Cambodia</a>{" "}
            as a 2nd Year IT student and I am very passionate about coding and
            learning about new and revolutionary technology. And i enjoy self-learning much more than class base learning. I&apos;m currently
            working at <a href="https://dreamslab.dev/">DreamsLab</a> as an
            Intern Web Developer. There i&apos;m working with ReactJs, NextJs, TailwindCSS, and others new technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
