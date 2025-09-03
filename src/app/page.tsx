"use client"
import Achievements from "@/components/Landing/Achievements/Achievements";
import Hero from "@/components/Landing/Hero/Hero";
import Presentation from "@/components/Landing/Presentation/Presentation";
import News from "@/components/Landing/News/News";
import Proposals from "@/components/Landing/Proposals/Proposals";
import JoinTeam from "@/components/Landing/JoinTeam/JoinTeam";
import Gallery from "@/components/Landing/Gallery/Gallery";
import Contact from "@/components/Landing/Contact/Contact";


export default function Home() {
  return (
    <div className="font-sans grid items-center justify-items-center bg-gray-100">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">

        <Hero />
        <Presentation />
        <News />
        <Achievements />
        <Proposals />
        <JoinTeam />
        <Gallery />
        <Contact />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
