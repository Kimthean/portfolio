import React from "react";
import IntroCard from "@/components/IntroCard";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <main className="h-screen  max-container">
      <div className="flex justify-between">
        <IntroCard />
        <Profile />
      </div>
      <div className="flex gap-8">
        <Skills />

        <Introduction />
      </div>
    </main>
  );
}
