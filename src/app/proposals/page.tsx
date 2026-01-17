"use client";

import Image from "next/image";

// Iconos SVG personalizados
const GraduationCapIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-16 h-16 sm:w-20 sm:h-20">
    <path d="M32 8L4 24l10 5.5v14L32 52l18-8.5v-14L54 27v15h4V24L32 8zm0 36l-14-7v-9.5l14 7 14-7V37l-14 7z" />
    <rect x="52" y="42" width="4" height="8" rx="2" />
  </svg>
);

const TractorIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-16 h-16 sm:w-20 sm:h-20">
    <circle cx="16" cy="48" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
    <circle cx="16" cy="48" r="4" />
    <circle cx="48" cy="48" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M10 38h20v-8H18l-8 8z" />
    <path d="M30 30h18v18h-6v-12H30z" />
    <rect x="48" y="24" width="8" height="6" rx="1" />
    <circle cx="56" cy="18" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M56 14v-4M52 18h-4" strokeWidth="2" stroke="currentColor" />
  </svg>
);

const TrainIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-16 h-16 sm:w-20 sm:h-20">
    <rect x="16" y="12" width="32" height="36" rx="4" />
    <rect x="20" y="16" width="24" height="12" rx="2" fill="white" />
    <circle cx="24" cy="40" r="3" fill="white" />
    <circle cx="40" cy="40" r="3" fill="white" />
    <rect x="12" y="48" width="40" height="4" />
    <path d="M20 52l-4 8M44 52l4 8" strokeWidth="3" stroke="currentColor" />
    <rect x="28" y="6" width="8" height="6" rx="1" />
  </svg>
);

const HandshakeIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-16 h-16 sm:w-20 sm:h-20">
    <path d="M8 20h8l6 6 10-6h8v20l-8 8-10-4-10 4-4-4V20z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <path d="M56 20h-8l-6 6-10-6h-8v20l8 8 10-4 10 4 4-4V20z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <path d="M24 32l8 8 8-8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const proposalsGet = [
  {
    Icon: GraduationCapIcon,
    title: "EDUCACIÓN SUPERIOR DESCENTRALIZADA",
    description:
      "Llevar la universidad a tus provincias para que ningún joven deba abandonar su municipio para estudiar.",
  },
  {
    Icon: TractorIcon,
    title: "CAMPO PRODUCTIVO Y COMPETITIVO",
    description:
      "Inversión en tecnología agrícola y vías terciarias para que el campesino sea verdadero dueño de progreso.",
  },
  {
    Icon: TrainIcon,
    title: "MOVILIDAD EFICIENTE Y SOSTENIBLE",
    description:
      "Integración regional con Regiotram y transporte digno que conecta a Cundinamarca con el país.",
  },
  {
    Icon: HandshakeIcon,
    title: "INCLUSIÓN CON DIGNIDAD",
    description:
      "Programas reales para adultos mayores y personas con discapacidad. Más que ayuda, es justicia social.",
  },
];

// Mapeo de iconos por nombre
const iconMap: { [key: string]: React.FC } = {
  educacion: GraduationCapIcon,
  campo: TractorIcon,
  movilidad: TrainIcon,
  inclusion: HandshakeIcon,
  // Fallback por defecto
  default: GraduationCapIcon,
};

interface Propuesta {
  titulo: string;
  descripcion: string;
  icono: string;
}

export default function ProposalsPage() {
  const [proposals, setProposals] = useState<Propuesta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const response = await fetch('/api/proposals');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Propuesta[] = await response.json();
        setProposals(data);
      } catch (error) {
        console.error("Error fetching proposals:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProposals();
  }, []);

  // Función para obtener el icono correspondiente
  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName?.toLowerCase()] || iconMap.default;
    return <IconComponent />;
  };

  if (loading) {
    return (
      <div className="relative min-h-screen flex flex-col font-helvetica">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/HeroBackground.png"
            alt="Paisaje de Cundinamarca"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <p className="text-white text-2xl">Cargando propuestas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col font-helvetica">
       <div className="absolute inset-0 z-0">
        <Image
          src="/images/HeroBackground.png"
          alt="Paisaje de Cundinamarca"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Sección principal */}
      <section className="relative z-10  flex-1 lg:pt-[200px] sm:pt-40 pb-16 px-4 sm:px-8">
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-4 drop-shadow-lg">
            Propuestas para
            <br />
            transformar Cundinamarca
          </h1>
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-light drop-shadow">
            Un proyecto colectivo basado en hechos, no promesas.
          </p>
        </div>

        {/* Grid de propuestas */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {proposalsGet.map((proposal, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icono */}
              <div className="mb-6 text-[#0a4570]">
                <proposal.Icon />
              </div>

              {/* Título de la propuesta */}
              <h3 className="text-[#0a4570] text-lg sm:text-xl font-bold tracking-wide mb-4">
                {proposal.title}
              </h3>

              {/* Descripción */}
              <p className="text-[#4a6070] text-sm sm:text-base font-light leading-relaxed">
                {proposal.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
