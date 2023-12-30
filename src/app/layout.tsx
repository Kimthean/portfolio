import type { Metadata } from "next";
import "./globals.css";
import { londrina, londrinaSolid } from "./fonts";
import Navbar from "@/components/Navbar";
import styles from "./RootLayout.module.css";

export const metadata: Metadata = {
  title: "Thean's Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className={londrinaSolid.className}>
        <Navbar />
        <div
          className={`${styles.bgImage}`}
          style={{
            backgroundImage: `url('assets/background.jpg')`,
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
