import type { Metadata } from "next";
import { Open_Sans } from "next/font/google"; 
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppBar from "@/components/AppBar/AppBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
  display: 'swap', 
  variable: '--font-open-sans'
})

export const metadata: Metadata = {
  title: "Daniel Bernal",
  description: "Una página web de Daniel Bernal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppBar/>
        {children}
      </body>
    </html>
  );
}
