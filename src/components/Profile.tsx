import React from "react";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="w-3/12 h-96 border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-purple-400">
      <Image
        src="/assets/profile.jpg"
        alt="profile"
        width={0}
        height={0}
        className="w-full h-full rounded-md"
        sizes="100%"
      />
    </div>
  );
}
