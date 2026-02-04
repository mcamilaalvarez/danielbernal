"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const visionImages = [
    {
        id: 1,
        src: "/images/EducacionSuperior.png",
        alt: "Acceso a educación superior ",
        title: "educación superior ",
        href: "/propuestas#educacion"
    },
    {
        id: 2,
        src: "/images/CampoProductivo.jpg",
        alt: "Un campo productivo y competitivo",
        title: "Un campo productivo y competitivo",
        href: "/propuestas#campo"
    },
    {
        id: 3,
        src: "/images/MovilidadEficiente.jpg",
        alt: "Movilidad eficiente y sostenible",
        title: "Movilidad eficiente ",
        href: "/propuestas#movilidad"
    },
    {
        id: 4,
        src: "/images/DignidadParaTodos.png",
        alt: "Inclusión social con dignidad para todos",
        title: "con dignidad para todos.",
        href: "/propuestas#salud"
    },
];

export default function Gallery() {
    const router = useRouter();
    
    return (
        <section className="flex flex-col items-center bg-white py-16 px-4 md:px-8 lg:px-16 w-full">
            <div className="max-w-7xl w-full ">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-8 items-start w-[90%] mx-auto">
                    {/* Left Section - Text */}
                    <div className="flex flex-col lg:col-span-2">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#114380] mb-6 tracking-[-0.06em]">
                            Visión y propuestas
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-helvetica font-light">
                            Cundinamarca necesita un futuro con oportunidades.{" "}
                            <span className="font-bold font-helvetica">Mi visión se centra en cuatro ejes</span>
                        </p>
                    </div>

                    {/* Right Section - Image Grid con proporciones ajustadas */}
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 lg:col-span-3">
                        {/* Imagen 1 - Arriba izquierda (un poco más ancha) */}
                        <div 
                            onClick={() => router.push(visionImages[0].href)}
                            className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[4/3] col-span-1 sm:col-span-2 cursor-pointer group"
                        >
                            <Image
                                src={visionImages[0].src}
                                alt={visionImages[0].alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                                <h3 className="text-white text-[18px] sm:text-[20px] lg:text-[20px] font-light text-center font-helvetica leading-[0.8] group-hover:text-[#f7ab13] transition-colors duration-300">
                                    Acceso a <br></br><span className="font-bold text-[22px] sm:text-[26px]">{visionImages[0].title}</span> descentralizada
                                </h3>
                            </div>
                        </div>

                        <div 
                            onClick={() => router.push(visionImages[1].href)}
                            className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-auto col-span-1 sm:col-span-3 cursor-pointer group"
                        >
                            <Image
                                src={visionImages[1].src}
                                alt={visionImages[1].alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                                <h3 className="text-white text-[20px] sm:text-[24px] lg:text-[26px] font-bold text-center leading-[0.8] group-hover:text-[#f7ab13] transition-colors duration-300">
                                    {visionImages[1].title}
                                </h3>
                            </div>
                        </div>

                        <div 
                            onClick={() => router.push(visionImages[2].href)}
                            className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-auto col-span-1 sm:col-span-3 cursor-pointer group"
                        >
                            <Image
                                src={visionImages[2].src}
                                alt={visionImages[2].alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                                <h3 className="text-white text-[18px] sm:text-base lg:text-[20px] font-light text-center leading-[0.8] group-hover:text-[#f7ab13] transition-colors duration-300">
                                   <span className="font-bold text-[22px] sm:text-[26px]"> {visionImages[2].title}</span> <br></br> y sostenible
                                </h3>
                            </div>
                        </div>

                        {/* Imagen 4 - Abajo derecha (un poco más ancha) */}
                        <div 
                            onClick={() => router.push(visionImages[3].href)}
                            className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-square col-span-1 sm:col-span-2 cursor-pointer group"
                        >
                            <Image
                                src={visionImages[3].src}
                                alt={visionImages[3].alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                                <h3 className="text-white text-[18px] sm:text-base lg:text-[20px] font-light text-center leading-[1] group-hover:text-[#f7ab13] transition-colors duration-300">
                                Inclusión social <br></br><span className="font-bold text-[22px] sm:text-[26px]"> {visionImages[3].title}</span>
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
