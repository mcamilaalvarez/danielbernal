"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Hero() {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Solo actualizar si estamos en la zona visible del hero (optimización)
      if (window.scrollY < window.innerHeight * 1.5) {
        setScrollY(window.scrollY);
      }
    };

    // Añadir listener con passive para mejor rendimiento
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Background Image - Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          transform: `translateY(${scrollY * 0.6}px) scale(1.3)`, // Efecto más pronunciado
        }}
      >
        <Image
          src="/images/HeroBackground.png"
          alt="Paisaje de Cundinamarca"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Portrait Image - Parallax Effect - se mueve en dirección opuesta para más contraste */}
      <div 
        className="absolute right-0 left-0 top-[360px] sm:top-[310px] md:top-[200px] md:left-auto w-full md:w-1/2 lg:w-2/5 z-5 md:z-10 flex items-start justify-center md:justify-center lg:justify-end pr-0 md:pr-8 lg:pr-16 pointer-events-none h-[350px] sm:h-[400px] md:h-auto md:bottom-0 will-change-transform"
        style={{
          transform: `translateY(${scrollY * -0.1}px)`, // Movimiento opuesto para más contraste
        }}
      >
        <div className="relative w-[60%] sm:w-[50%] md:w-full max-w-2xl lg:max-w-4xl xl:max-w-5xl h-full flex items-center justify-center">
          <Image
            src="/images/HeroImgDB.png"
            alt="Daniel Bernal"
            width={600}
            height={800}
            className="object-contain w-full h-full"
            priority
            style={{ objectPosition: 'center bottom' }}
          />
        </div>
      </div>

      {/* Background Section with Blue Gradient and Landscape */}
      <div className="relative w-full flex-1 min-h-[60vh] md:min-h-[70vh] z-10">

        {/* Content Container */}
        <div className="relative z-20 container mx-auto px-4 md:px-8 lg:px-16 h-full flex items-center pt-24 sm:pt-32 md:pt-40 lg:pt-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full py-8 md:py-16">
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-4 md:gap-8 text-white ">
              <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] tracking-[-0.06em] leading-[0.9] font-helcompressed text-center">
                POR CUNDINAMARCA
              </h1>
              <span className="text-[100px] sm:text-[130px] md:text-[150px] lg:text-[170px] text-[#f7ab13] tracking-[-0.06em] font-black leading-[0.9] font-helcompressed text-center">
                TODO
              </span>
              <div className="flex flex-col gap-2 mt-2 md:mt-4 sm: mb-2">
                <p className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[25px] italic font-helvetica text-center font-semi-bold">
                  &quot;Bendito serás en la ciudad y bendito en el campo.&quot;
                </p>
                <p className="text-gray-200 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-helvetica font-light text-center italic leading-[0.9]">
                  Deuteronomio 28:3
                </p>
              </div>
            </div>

           
          </div>
        </div>
      </div>

      {/* Bottom White Information Box */}
      <div className="relative z-15 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] bg-white rounded-t-3xl mt-[120px] sm:mt-[80px] md:-mt-12 mx-auto">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-6 md:py-12 lg:pb-2 mx-auto text-center">
          {/* Name */}
          <div className="mb-4 md:mb-8 mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold flex items-center justify-center gap-1 md:gap-4">
              <span className="flex items-center">
                <svg 
                  viewBox="40 32 42 53" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-6 h-10 sm:w-8 sm:h-12 md:w-16 md:h-20 lg:w-20 lg:h-24 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path fill="#f7ab14" d="M38.54,71.78l4.83-39.13h20.42s20.48,1.17,18.48,25.95c-2.94,26.07-22.83,26.54-31.01,26.78l1.18-11.89s14.48,2.06,15.89-15.48c1.41-16.24-13.18-13.12-13.18-13.12l-3.35,26.83-13.24.06Z"/>
                  <path fill="#e53439" d="M51.19,73.01l-1.59,12.36h-6.64c-3.11,0-5.52-2.71-5.17-5.79l.75-6.56h12.65Z"/>
                </svg>
                <span className="text-[#114380] text-[40px] sm:text-[60px] md:text-[90px] lg:text-[115px] font-helcompressed tracking-[-0.06em] leading-[0.9] ml-[-2px] md:ml-[-4px] mt-[8px] md:mt-[20px]">ANIEL</span>
              </span>
              <span className="text-[#114380] text-[40px] sm:text-[60px] md:text-[90px] lg:text-[115px] font-helcompressed tracking-[-0.06em] leading-[0.9] ml-[8px] md:ml-[20px] mt-[8px] md:mt-[20px]">BERNAL</span>
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
          <div className="flex justify-center pb-4 md:pb-0">
            <button
              onClick={() => router.push("/presentacion")}
              className="inline-flex items-center gap-1 bg-[#0d5c85] h-auto hover:bg-[#1a7aa8] hover:shadow-lg active:scale-95 active:bg-[#0a4d6d] text-white px-4 sm:px-6 py-2 rounded-full text-base md:text-lg font-normal transition-all duration-200 transform cursor-pointer"
            >
              <span className="font-bold text-[18px] sm:text-[22px] md:text-[28px]">Ver más </span>
              <span className="font-light text-[18px] sm:text-[22px] md:text-[28px]"> sobre Daniel</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
