"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="relative w-full min-h-screen flex flex-col">
      {/* Background Image - Cubre toda la sección */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/HeroBackground.png"
          alt="Paisaje de Cundinamarca"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Portrait Image - Se extiende desde la primera sección hasta detrás del cuadro blanco */}
      <div className="absolute right-0 top-[200px] bottom-0 w-full md:w-1/2 lg:w-2/5 z-10 flex items-start justify-end md:justify-center lg:justify-end pr-4 md:pr-8 lg:pr-16 pointer-events-none">
        <div className="relative w-full max-w-2xl lg:max-w-4xl xl:max-w-5xl h-full flex items-center">
          <Image
            src="/images/HeroImgDB.png"
            alt="Daniel Bernal"
            width={600}
            height={800}
            className="object-contain w-full h-auto"
            priority
            style={{ objectPosition: 'center', maxHeight: '100%' }}
          />
        </div>
      </div>

      {/* Background Section with Blue Gradient and Landscape */}
      <div className="relative w-full flex-1 min-h-[60vh] md:min-h-[70vh] z-10">

        {/* Content Container */}
        <div className="relative z-20 container mx-auto px-4 md:px-8 lg:px-16 h-full flex items-center pt-40 lg:pt-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full py-12 md:py-16">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-6 md:gap-8 text-white ">
              <h2 className="text-[70px] tracking-[-0.06em] leading-[0.9] font-helcompressed text-center">
                POR CUNDINAMARCA
              </h2>
              <span className="text-[170px] text-[#f7ab13] tracking-[-0.06em] font-black leading-[0.9] font-helcompressed text-center">
                TODO
              </span>
              <div className="flex flex-col gap-2 mt-4">
                <p className="text-[25px] italic  font-helvetica text-center font-semi-bold">
                  &quot;Bendito serás en la ciudad y bendito en el campo.&quot;
                </p>
                <p className="text-gray-200 text-[20px] font-helvetica font-light text-center italic leading-[0.9]">
                  Deuteronomio 28:3
                </p>
              </div>
            </div>

           
          </div>
        </div>
      </div>

      {/* Bottom White Information Box */}
      <div className="relative z-15 w-[80%] bg-white rounded-t-3xl -mt-12 mx-auto">
        <div className="container mx-auto px-8 md:px-8 lg:px-16  md:py-12 lg:pb-2 mx-auto text-center">
          {/* Name */}
          <div className="mb-6 md:mb-8 mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold flex items-center justify-center gap-2 md:gap-4">
              <span className="flex items-center">
                <svg 
                  viewBox="40 32 42 53" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-8 h-12 md:w-16 md:h-20 lg:w-20 lg:h-24 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path fill="#f7ab14" d="M38.54,71.78l4.83-39.13h20.42s20.48,1.17,18.48,25.95c-2.94,26.07-22.83,26.54-31.01,26.78l1.18-11.89s14.48,2.06,15.89-15.48c1.41-16.24-13.18-13.12-13.18-13.12l-3.35,26.83-13.24.06Z"/>
                  <path fill="#e53439" d="M51.19,73.01l-1.59,12.36h-6.64c-3.11,0-5.52-2.71-5.17-5.79l.75-6.56h12.65Z"/>
                </svg>
                <span className="text-[#114380] text-[115px] font-helcompressed  tracking-[-0.06em] leading-[0.9] ml-[-4px] mt-[20px]">ANIEL</span>
              </span>
              <span className="text-[#114380] text-[115px] font-helcompressed  tracking-[-0.06em] leading-[0.9] ml-[20px] mt-[20px]">BERNAL</span>
            </h2>
          </div>

          {/* Biography */}
          <div className="flex flex-col gap-4 md:gap-6 mb-8 md:mb-10 text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-5xl mx-auto text-center ">
            <p className="font-helvetica font-light">
              Abogado de la Universidad Nacional, magister en Planeación Urbana
              y Regional, especialista en Gobierno, Gestión Pública y Opinión
              Política de la Pontificia Universidad Javeriana. Ha trabajado
              desde el servicio público y la academia para resolver problemas y
              abrir caminos de desarrollo en Funza, su ciudad natal y, ahora, en
              Cundinamarca.
            </p>
            <p className="font-helvetica font-light">
              Daniel Bernal ha sido el principal referente de Ciudad
              Universitaria en Colombia, entendiendo las dinámicas urbanas, de
              movilidad y sociales, entorno a una prestación efectiva de los
              servicios educativos.
            </p>
          </div>

          {/* Call to Action Button */}
          <div className="flex justify-center">
            <button
              onClick={() => router.push("/presentation")}
              className="inline-flex items-center gap-1 bg-[#0d5c85] h-[50px] hover:bg-[#0b4f72] text-white px-6 py-2 rounded-full text-base md:text-lg font-normal transition-colors duration-200 shadow-none"
            >
              <span className="font-bold text-[28px]">Ver más </span>
              <span className="font-light text-[28px]"> sobre Daniel</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
