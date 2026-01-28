import type { Metadata } from "next";
import "./globals.css";
import AppBar from "@/components/AppBar/AppBar";
import Footer from "@/components/Common/Footer/Footer";
import localFont from "next/font/local";

const helvetica = localFont({
  src: [
    {
      path: "./fonts/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueBlack.otf", // Esta es la "gorda" para el TODO
      weight: "900",
      style: "normal",
    },
   
  ],
  variable: "--font-helvetica",
});
const helcompressed= localFont({
  src: [{ path: "./fonts/HelveticaInseratLTPro.otf", weight: "900" , style: "normal"}],
  variable: "--font-helvetica-compressed",
});

export const metadata: Metadata = {
  title: "Daniel Bernal",
  description: "Candidato a la cámara Daniel Bernal",
  icons: {
    icon: "/icon?v=2", // Next.js sirve src/app/icon.svg en /icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${helvetica.variable} ${helcompressed.variable} antialiased`}
      >
        <AppBar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
