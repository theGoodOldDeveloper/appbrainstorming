import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers"; //INFO: Import the Providers component
import Header from "@/components/header"; //INFO: Import the Providers component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App Brainstorming",
  description: "Generated by theGoodOldDeveloper",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto px-4 max-w-6xl">
          <Header />
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
/* //INFO: Wrap the children with the Providers component */
