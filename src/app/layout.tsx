import type { Metadata } from "next";
import Script from "next/script";
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
  description:
    "Daniel Bernal, candidato a la Cámara por Cundinamarca. Abogado de la Universidad Nacional, magister en Planeación Urbana y Regional, especialista en Gobierno, Gestión Pública y Opinión Política de la Pontificia Universidad Javeriana.",
  icons: {
    icon: "/icon?v=2", // Next.js sirve src/app/icon.svg en /icon
  },
  openGraph: {
    title: "Daniel Bernal - Candidato a la Cámara",
    description:
      "Daniel Bernal, candidato a la Cámara por Cundinamarca. Abogado de la Universidad Nacional, magister en Planeación Urbana y Regional, especialista en Gobierno, Gestión Pública y Opinión Política de la Pontificia Universidad Javeriana.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={` ${helvetica.variable} ${helcompressed.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FKQ3SC00RN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FKQ3SC00RN');
          `}
        </Script>
        <AppBar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
