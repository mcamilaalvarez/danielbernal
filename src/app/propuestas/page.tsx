import type { Metadata } from "next";
import Image from "next/image";
import ProposalSection from "@/components/Common/ProposalSection/ProposalSection";
import { GiWheat } from "react-icons/gi";
import { FaHeartbeat, FaGraduationCap, FaCar, FaShieldAlt, FaGavel } from "react-icons/fa";
import { ReactNode } from "react";
import { propuestasPorTema } from "@/data/propuestas";

export const metadata: Metadata = {
  title: "Mis propuestas | Daniel Bernal - Por Cundinamarca",
  description:
    "Por Cundinamarca Todo. Conoce mis propuestas: campo, salud, educación y cultura, seguridad, autonomía y buen gobierno, movilidad eficiente.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Mis propuestas | Daniel Bernal - Por Cundinamarca",
    description:
      "Por Cundinamarca Todo. Conoce mis propuestas como candidato a la Cámara por Cundinamarca.",
  },
};

// Iconos para cada tema
const iconosPorTema: Record<string, ReactNode> = {
  "POR EL CAMPO TODO": <GiWheat />,
  "POR LA SALUD TODO": <FaHeartbeat />,
  "EDUCACIÓN, DEPORTE Y CULTURA, TODO CON ENFOQUE TERRITORIAL": <FaGraduationCap />,
  "POR LA SEGURIDAD TODO": <FaShieldAlt />,
  "AUTONOMÍA Y BUEN GOBIERNO": <FaGavel />,
  "POR UNA MOVILIDAD EFICIENTE TODO": <FaCar />,
};

export default function ProposalsPage() {

  return (
    <div className="min-h-screen flex flex-col font-helvetica">
      <section className="relative w-full pt-52 lg:pt-56 pb-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/HeroBackground.png"
            alt="Paisaje de Cundinamarca"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] tracking-[-0.06em] leading-[0.9] font-helcompressed text-center mb-4">
                POR CUNDINAMARCA
              </h2>
              <span className="text-[100px] sm:text-[130px] md:text-[150px] lg:text-[170px] text-[#f7ab13] tracking-[-0.06em] font-black leading-[0.9] font-helcompressed text-center">
                TODO
              </span>
        </div>

        {/* Tarjeta blanca al final de la sección hero */}
        <div className="relative z-10 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[70%] bg-white rounded-t-3xl mx-auto mt-[20px]">
          <div className="px-6 sm:px-10 md:px-16 py-10 md:py-12 text-center">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 lg:text-[20px]">
              Cuando decimos «Por Cundinamarca Todo», no estamos escatimando: todo es{" "}
              <strong>TODO</strong>. Al hablar de ello, nos referimos a abrazar la diversidad de nuestro
              departamento: desde el campesino que cultiva la tierra con sus manos, hasta el
              joven que sueña y construye futuro en su territorio.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 lg:text-[20px]">
              Esto significa impulsar políticas que dignifiquen el trabajo rural, protejan el entorno
              y generen oportunidades para quienes viven aquí. Pensamos en los retos que
              enfrentan regiones agrícolas como Ubaté, Sumapaz o Almeidas; en la pujanza
              panelera de Gualivá; en lo que merecen territorios estratégicos para el país como el
              Guavio, Medina y el Oriente, y en los desafíos regionales de las Sabanas y Soacha.
              Asimismo, integramos el potencial turístico y económico de los municipios ribereños
              y del Tequendama, junto a la urgente necesidad de mejorar las vías que conectan
              al Rionegro.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium lg:text-[20px]">
              Acá te presento mis propuestas como candidato a la Cámara de Representantes por
              Cundinamarca.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de propuestas agrupadas por tema */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {propuestasPorTema.map((section, index) => (
            <ProposalSection
              key={index}
              id={section.id}
              title={section.title}
              icon={iconosPorTema[section.title]}
              proposals={section.proposals}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
