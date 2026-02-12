import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

export function HeroUnete() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/danielComunidad.jpg"
          alt="Daniel Bernal con la comunidad"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B3A5C]/85 via-[#1B3A5C]/55 to-[#1B3A5C]/85" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-32 text-center lg:px-12">
        <span className="-mt-30 mb-30 inline-block rounded-full border border-[#E8A317]/40 bg-[#E8A317]/10 px-5 py-2 text-sm font-bold uppercase tracking-widest text-[#E8A317]">
          Se parte del cambio
        </span>
        <h1 className="font-serif text-5xl leading-tight text-white md:text-6xl lg:text-7xl">
          <span className="text-balance">
            Cundinamarca la construimos{" "}
            <span className="text-[#E8A317]">juntos</span>
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
          Necesitamos personas comprometidas que crean en una region con
          oportunidades para todos. Tu voz, tu energia y tus ideas son
          fundamentales para seguir transformando vidas.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#formulario"
            className="inline-flex items-center gap-2 rounded-full bg-[#E8A317] px-10 py-4 text-lg font-bold text-[#1B3A5C] transition-transform hover:scale-105"
          >
            Quiero unirme
          </a>
         
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <a href="#por-que" aria-label="Saber mas">
          <FaChevronDown className="h-8 w-8 text-white/60" />
        </a>
      </div>
    </section>
  )
}
