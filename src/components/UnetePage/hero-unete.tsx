import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

export function HeroUnete() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/danielComunidad.jpg"
          alt="Daniel Bernal con la comunidad"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B3A5C]/85 via-[#1B3A5C]/55 to-[#1B3A5C]/85" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-screen min-h-[100dvh] max-w-7xl flex-col px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center pt-30 sm:pt-42">
          <span className="inline-block rounded-full border border-[#E8A317]/40 bg-[#E8A317]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#E8A317] sm:px-5 sm:text-sm">
            Se parte del cambio
          </span>
        </div>
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center text-center pb-14 sm:pb-16">
      <h1 className="font-helcompressed text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[80px]">
          <span className="text-balance">
            Cundinamarca la construimos{" "}
            <span className="text-[#E8A317]">juntos</span>
          </span>
        </h1>
        <p className="mx-auto mt-2 mb-2 max-w-xl text-base leading-relaxed text-white/80  sm:max-w-2xl sm:text-lg">
          Necesitamos personas comprometidas que crean en una region con
          oportunidades para todos. Tu voz, tu energia y tus ideas son
          fundamentales para seguir transformando vidas.
        </p>
          <a
            href="#formulario"
            className="inline-flex items-center justify-center rounded-full bg-[#E8A317] px-6 py-2 font-bold text-[#1B3A5C] transition-transform hover:scale-105  sm:text-lg"
          >
            Quiero unirme
          </a>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce sm:bottom-8">
        <a href="#por-que" aria-label="Saber mas">
          <FaChevronDown className="h-6 w-6 text-white/60 sm:h-8 sm:w-8" />
        </a>
      </div>
    </section>
  )
}
