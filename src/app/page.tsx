import React from "react";
import IntroCard from "@/components/IntroCard";
import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Introduction from "@/components/Introduction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="h-screen max-container">
      <div className="lg:flex md:flex justify-between pb-4">
        <IntroCard />
        <Profile />
      </div>
      <div className="lg:flex gap-8">
        <Skills />
        <Introduction />
      </div>
      <Footer />
    </main>
  );
}
