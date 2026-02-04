"use client";

import Image from "next/image";

// Iconos
const UniversityIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-10 h-10">
    <path d="M32 4L4 20v4h56v-4L32 4zm0 8l16 8H16l16-8zM8 28v24h8V28H8zm14 0v24h8V28h-8zm14 0v24h8V28h-8zm14 0v24h8V28h-8zM4 56v4h56v-4H4z" />
  </svg>
);

const GraduationIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-10 h-10">
    <path d="M32 8L4 24l10 5.5v14L32 52l18-8.5v-14L54 27v15h4V24L32 8zm0 36l-14-7v-9.5l14 7 14-7V37l-14 7z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-10 h-10">
    <path d="M56 16H44V8c0-2.2-1.8-4-4-4H24c-2.2 0-4 1.8-4 4v8H8c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h48c2.2 0 4-1.8 4-4V20c0-2.2-1.8-4-4-4zM24 8h16v8H24V8zm32 48H8V32h48v24zm0-28H8v-8h48v8z" />
  </svg>
);

const formacion = [
  {
    Icon: UniversityIcon,
    titulo: "Universidad Nacional:",
    subtitulo: "Pregrado en Derecho",
  },
  {
    Icon: GraduationIcon,
    titulo: "Javeriana: Especialización",
    subtitulo: "Especialización y Maestría",
  },
  {
    Icon: BriefcaseIcon,
    titulo: "Más de 8 años en",
    subtitulo: "servicio público",
  },
];

export default function PresentationPage() {
  return (
    <div className="min-h-screen flex flex-col font-helvetica">
      {/* Hero Section con fondo azul */}
      <section className="relative w-full pt-52 lg:pt-56 pb-32">
        {/* Imagen de fondo de montañas */}
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
          {/* Foto circular */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image
              src="/images/MovilidadEficiente.jpg"
              alt="Daniel Bernal"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Nombre */}
          <h2 className="text-white text-xl sm:text-2xl font-light mb-2">
            Daniel Bernal
          </h2>

          {/* Título principal */}
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Abogado y Magíster en Planeación Urbana y Regional
          </h1>

          {/* Cita bíblica */}
          <div className="text-white/90">
            <p className="text-base sm:text-lg italic">
              &quot;Bendito serás en la ciudad en el campo.&quot;
            </p>
            <p className="text-sm text-white/70 mt-1">Deuteronomio 28:3</p>
          </div>
        </div>
      </section>

      {/* Sección Formación y Experiencia */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#114380] text-2xl sm:text-3xl font-bold text-center mb-12">
            Formación y Experiencia
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {formacion.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#e8f4fc] to-[#d0e8f5] rounded-full py-6 px-8 flex items-center gap-4 shadow-md"
              >
                <div className="text-[#114380] flex-shrink-0">
                  <item.Icon />
                </div>
                <div>
                  <p className="text-[#114380] font-bold text-sm sm:text-base">
                    {item.titulo}
                  </p>
                  <p className="text-[#114380] text-sm">{item.subtitulo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Nuestros Principios */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#114380] text-2xl sm:text-3xl font-bold text-center mb-10">
            Nuestros Principios
          </h2>

          {/* Cita destacada */}
          <div className="bg-[#114380] rounded-2xl p-8 mb-8">
            <p className="text-white text-xl sm:text-2xl lg:text-3xl font-bold text-center italic">
              &quot;El servicio público es una vocación, no una oportunidad.&quot;
            </p>
          </div>

          {/* Texto de principios */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              Que ejercer posiciones de liderazgo y cargos públicos no sirvan solo un capricho,
              problematizan de tarea esta quierantratos en tanto fue fonda destiona erai.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Creo firmemente en la transparencia, la honestidad y el compromiso genuino
              con el bienestar de todos los cundinamarqueses. Mi trabajo siempre estará
              orientado a resolver problemas reales y construir un futuro mejor para nuestra región.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Trayectoria */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#114380] text-2xl sm:text-3xl font-bold text-center mb-12">
            Mi Trayectoria
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#e8f4fc] to-[#d0e8f5] rounded-2xl p-8">
              <h3 className="text-[#114380] text-xl font-bold mb-4">
                Experiencia Académica
              </h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#f7ab13] font-bold">•</span>
                  Abogado de la Universidad Nacional de Colombia
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f7ab13] font-bold">•</span>
                  Magíster en Planeación Urbana y Regional
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f7ab13] font-bold">•</span>
                  Especialista en Gobierno y Gestión Pública - Universidad Javeriana
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#e8f4fc] to-[#d0e8f5] rounded-2xl p-8">
              <h3 className="text-[#114380] text-xl font-bold mb-4">
                Experiencia Profesional
              </h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#f7ab13] font-bold">•</span>
                  Principal referente de Ciudad Universitaria en Colombia
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f7ab13] font-bold">•</span>
                  Trabajo en servicio público y academia
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#f7ab13] font-bold">•</span>
                  Compromiso con el desarrollo de Funza y Cundinamarca
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
