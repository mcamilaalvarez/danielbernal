import Image from "next/image"
import { FaUsers, FaLightbulb, FaMapPin, FaHandshake } from "react-icons/fa"

const razones = [
  {
    icon: FaUsers,
    titulo: "Comunidad",
    descripcion:
    " Construimos relaciones genuinas en cada municipio, vereda y provincia. Escuchamos, conversamos y trabajamos hombro a hombro con la gente, porque el cambio verdadero nace del territorio.",  },
  {
        icon: FaLightbulb,
    titulo: "Ideas que transforman",
    descripcion:
    "No nos quedamos en discursos. Impulsamos propuestas claras, viables y con impacto en la vida de las personas: el campo, la salud, la educación, la movilidad y la seguridad son compromisos reales, no promesas.",  },
  {
    icon: FaMapPin,
    titulo: "Presencia en todo el territorio",
    descripcion:
    "Estamos donde están los ciudadanos. Recorremos Cundinamarca completa, entendiendo sus diferencias, sus necesidades y su potencial. Cada provincia cuenta, cada voz importa.",  },
  {
    icon: FaHandshake,
    titulo: "Compromiso social",
    descripcion:
      "Defendemos la dignidad de los campesinos, los jóvenes, los adultos mayores, las personas con discapacidad y sus cuidadores. Creemos en una política que sirva, que acompañe y que resuelva.",
  },
]

export function PorQueSection() {
  return (
    <section id="por-que" className=" py-20 lg:py-12 font-helvetica">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="lg:w-1/2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/trabajoComunidad.jpg"
                alt="Voluntarios trabajando en la comunidad"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-[#1B3A5C]/10" />
            </div>
          </div>
          <div className="lg:w-3/4 bg-white/30 rounded-3xl p-10 lg:ml-10">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#E8A317]">
              Por que unirte
            </p>
            <h2 className="font-helvetica text-4xl text-[#1B3A5C] md:text-5xl">
              <span className="text-balance">
                Mas que un equipo, una{" "}
                <span className="text-[#E8A317]">familia</span>
              </span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#1B3A5C]/90">
              Aquí no sumamos nombres, sumamos voluntades. Creemos en la política como una herramienta real de transformación social, hecha con carácter, con hechos y con Dios por delante. Este es un espacio para crecer, proponer y actuar con propósito.

            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {razones.map((razon) => (
                <div key={razon.titulo} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8A317]/15">
                    <razon.icon className="h-6 w-6 text-[#E8A317]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B3A5C]">
                      {razon.titulo}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#1B3A5C]/90">
                      {razon.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
