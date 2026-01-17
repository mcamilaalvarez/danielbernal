"use client"
import Image from "next/image";

const visionImages = [
    {
        id: 1,
        src: "/images/EducacionSuperior.png",
        alt: "Acceso a educación superior ",
        title: "educación superior "
    },
    {
        id: 2,
        src: "/images/CampoProductivo.jpg",
        alt: "Un campo productivo y competitivo",
        title: "Un campo productivo y competitivo"
    },
    {
        id: 3,
        src: "/images/MovilidadEficiente.jpg",
        alt: "Movilidad eficiente y sostenible",
        title: "Movilidad eficiente "
    },
    {
        id: 4,
        src: "/images/DignidadParaTodos.png",
        alt: "Inclusión social con dignidad para todos",
        title: "con dignidad para todos."
    },
];

export default function Gallery() {
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
                    <div className="grid grid-cols-5 gap-4 lg:col-span-3">
                        {/* Imagen 1 - Arriba izquierda (un poco más ancha) */}
                        <div className="relative rounded-xl overflow-hidden aspect-[4/3] col-span-2">
                            <Image
                                src={visionImages[0].src}
                                alt={visionImages[0].alt}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                                <h3 className="text-white text-sm md:text-[20px] lg:text-[20px] font-light text-center font-helvetica leading-[0.8]">
                                    Acceso a <br></br><span className="font-bold text-[26px]">{visionImages[0].title}</span> descentralizada
                                </h3>
                            </div>
                        </div>

                        <div className="relative rounded-xl overflow-hidden col-span-3">
                            <Image
                                src={visionImages[1].src}
                                alt={visionImages[1].alt}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                                <h3 className="text-white  md:text-[24px] lg:text-[26px] font-bold text-center leading-[0.8]">
                                    {visionImages[1].title}
                                </h3>
                            </div>
                        </div>

                        <div className="relative rounded-xl overflow-hidden col-span-3">
                            <Image
                                src={visionImages[2].src}
                                alt={visionImages[2].alt}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                                <h3 className="text-white text-sm md:text-base lg:text-[20px] font-light text-center leading-[0.8]">
                                   <span className="font-bold text-[26px]"> {visionImages[2].title}</span> <br></br> y sostenible
                                </h3>
                            </div>
                        </div>

                        {/* Imagen 4 - Abajo derecha (un poco más ancha) */}
                        <div className="relative rounded-xl overflow-hidden aspect-square col-span-2">
                            <Image
                                src={visionImages[3].src}
                                alt={visionImages[3].alt}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                                <h3 className="text-white text-sm md:text-base lg:text-[20px] font-light text-center leading-[1]">
                                Inclusión social <br></br><span className="font-bold text-[26px]"> {visionImages[3].title}</span>
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
