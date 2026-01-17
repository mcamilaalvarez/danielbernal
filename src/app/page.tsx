"use client"
import Achievements from "@/components/Landing/Achievements/Achievements";
import Hero from "@/components/Landing/Hero/Hero";
import News from "@/components/Landing/News/News";
import JoinTeam from "@/components/Landing/JoinTeam/JoinTeam";
import Gallery from "@/components/Landing/Gallery/Gallery";
import Contact from "@/components/Landing/Contact/Contact";


export default function Home() {
  return (
    <div className="font-sans grid items-center justify-items-center bg-white w-full">
      <main className="flex flex-col row-start-2 items-center w-full">

        <Hero />
        <Gallery />
        <Achievements />
        <JoinTeam />
        <News />        
        <Contact />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
