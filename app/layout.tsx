import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {GlobalContextProvider} from "@/app/context/globalContext"

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Unisky",
  description: "Weather Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
