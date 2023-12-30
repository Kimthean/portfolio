import React from "react";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="max-sm:pt-4 max-sm:w-8/12 sm:w-8/12 lg:w-3/12 md:w-4/12 h-auto">
      <div className="border-black lg:w-8/12 lg:h-9/12 border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-purple-400">
        <Image
          src="/assets/profile1.jpg"
          alt="profile"
          width={0}
          height={0}
          className="w-full  h-full  rounded-md "
          sizes="100%"
          quality={100}
        />
      </div>
    </div>
  );
}
