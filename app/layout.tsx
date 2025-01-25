import type { Metadata } from "next";
import {Urbanist}  from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { ThemeProvider } from "@/components/theme-provider";

const urbanist = Urbanist({ subsets:["latin"]});


export const metadata: Metadata = {

  title: "DarkMaxGG",
  description: "Portafolio Personal",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
