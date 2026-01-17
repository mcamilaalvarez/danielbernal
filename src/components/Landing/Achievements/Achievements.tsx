"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Achievements() {
  const router = useRouter();

  return (
    <div className="relative w-full overflow-hidden">
      {/* Contenedor que permite que la imagen sobresalga por arriba */}
      <section className="relative w-full bg-[#f2a515] font-helvetica leading-[0.9] mt-24">
        <div className="relative z-10 max-w-6xl mx-auto md:px-10  lg:py-10 flex flex-col lg:flex-row gap-10 lg:gap-14 items-start ">
          {/* Texto */}
          <div className="flex flex flex-col gap-4 text-[#0f3c76]  w-[50%]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[0.9]">
              Por Cundinamarca: <span className=" font-bold text-[#0a3361]">hechos</span>
            </h2>
            <p className="text-base md:text-lg text-[#0f3c76] leading-[0.9]">
              Mi experiencia en el servicio público se mide en resultados que
              mejoran vidas. Estos son algunos
            </p>

            <div className="flex flex-col gap-2 text-base md:text-lg  text-[#0f3c76]">
              <p className="leading-[0.9]">
                <span className="font-bold leading-[0.9]">Educación:</span> primera universidad
                regional de Cundinamarca.
              </p>
              <p className="leading-[0.9]">
                <span className="font-bold leading-[0.9]">Movilidad:</span> la Vía Perimetral,
                conectando a un millón de personas.
              </p>
              <p className="leading-[0.9]">
                <span className="font-bold leading-[0.9]">Inclusión:</span> 2.000 adultos mayores
                y personas con discapacidad conocieron el mar.
              </p>
              <p className="leading-[0.9]">
                <span className="font-bold leading-[0.9]">Deporte y desarrollo:</span> centro de
                innovación y nuevos espacios para la juventud.
              </p>
            </div>

            <div className="mt-4">
              <button
                onClick={() => router.push("/achievements")}
                className="inline-flex items-center gap-1 bg-[#0d5c85] hover:bg-[#0b4f72] text-white px-6 md:px-7 lg:px-8 py-3 rounded-full text-base md:text-lg font-normal transition-colors duration-200 shadow-none"
              >
                <span className="font-bold">Conoce</span>
                <span className="font-light">más hechos</span>
              </button>
            </div>
          </div>

          {/* Imagen - Posición absoluta para que sobresalga por arriba */}
          <div className="absolute right-0 lg:right-0 left-60 bottom-[-120px]  pointer-events-none flex items-end">
            <Image
              src="/images/DanielBernalHechos.png"
              alt="Daniel Bernal"
              width={1700}
              height={1700}
              priority
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
