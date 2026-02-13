"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Achievements() {
  const router = useRouter();

  return (
    <div className="relative w-full overflow-hidden">
      {/* Contenedor que permite que la imagen sobresalga por arriba */}
      <section className="relative w-full bg-[#f2a515] font-helvetica leading-[0.9] mt-12 lg:mt-24 ">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-10  lg:py-10 flex flex-col lg:flex-row gap-6 lg:gap-14 items-center lg:items-start sm:py-0  ">
          {/* Texto */}
          <div className="flex flex-col gap-4 text-[#0f3c76] w-full lg:w-[50%] text-center mt-8 lg:text-left lg:mt-0 lg:px-0 px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[0.9]">
              Por Cundinamarca: <span className="font-bold text-[#0a3361]">hechos</span>
            </h2>
            <p className="text-[20px] sm:text-[20px] md:text-lg text-[#0f3c76] leading-[1.2]">
              Mi experiencia en el servicio público se mide en resultados que
              mejoran vidas. Estos son algunos
            </p>

            <div className="flex flex-col gap-2 text-[18px] sm:text-[20px] md:text-lg text-[#0f3c76]">
              <p className="leading-[1.2] ">
                <span className="font-bold">Educación:</span> primera universidad
                regional de Cundinamarca.
              </p>
              <p className="leading-[1.2]">
                <span className="font-bold">Movilidad:</span> la Vía Perimetral,
                conectando a un millón de personas.
              </p>
              <p className="leading-[1.2]">
                <span className="font-bold">Inclusión:</span> 2.000 adultos mayores
                y personas con discapacidad conocieron el mar.
              </p>
              <p className="leading-[1.2]">
                <span className="font-bold">Deporte y desarrollo:</span> centro de
                innovación y nuevos espacios para la juventud.
              </p>
            </div>

            <div className="mt-4 flex justify-center lg:justify-start">
              <button
                onClick={() => router.push("/hechos")}
                className="inline-flex items-center gap-1 bg-[#0d5c85] 
                hover:bg-[#0b4f72] text-white px-6 md:px-7 lg:px-8 py-3 rounded-full
                 text-[20px] sm:text-[20px] md:text-lg font-normal transition-all duration-200 active:scale-95 active:bg-[#0a4d6d] transform cursor-pointer"
              >
                <span className="font-bold">Conoce</span>
                <span className="font-light">más hechos</span>
              </button>
            </div>
          </div>

          {/* Imagen - Visible en mobile, absoluta en desktop */}
         
            <Image
              src="/images/DanielBernalHechos.png"
              alt="Daniel Bernal"
              width={1700}
              height={1700}
              priority
              className=" object-contain object-bottom
             w-[180%] max-w-none -ml-[40%]
             sm:w-[120%] sm:-ml-[10%]       
             lg:w-auto lg:ml-0 lg:max-w-full 
             lg:absolute lg:right-0 lg:left-60
             lg:bottom-[-190px]
             lg:items-end pointer-events-none"
            />
          
        </div>
      </section>
    </div>
  );
}
