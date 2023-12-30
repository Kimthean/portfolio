import type { Metadata } from "next";
import "./globals.css";
import { londrina, londrinaSolid } from "./fonts";
import Navbar from "@/components/Navbar";

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
      <body className={londrinaSolid.className}>
        <Navbar />
        <div
          className="bg-cover bg-center overflow-hidden"
          style={{
            height: "90vh",
            backgroundImage: `url('assets/background.jpg')`,
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
