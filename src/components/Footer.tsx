import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <div className="flex">
        Inspired by Neo Brutalism theme for
        <Link
          href="https://brutal.elian.codes/
          "
        >
          <div className="pl-1 text-sky-700 underline">Astro</div>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
