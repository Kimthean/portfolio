import type { Metadata } from "next";
import "./globals.css";
import { londrina, londrinaSolid } from "./fonts";
import Navbar from "@/components/Navbar";
import styles from "./RootLayout.module.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thean.codes"),
  title: "Thean's Portfolio",
  description: "My personal portfolio website",
  openGraph: {
    images: [
      {
        url: "/assets/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Porfolio",
      },
    ],
  },
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
          className={`${styles.bgImage} `}
          style={{
            backgroundImage: `url('assets/background.jpg')`,
            height: "95vh",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
