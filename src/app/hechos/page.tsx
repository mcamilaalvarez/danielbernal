import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hechos | Daniel Bernal - Por Cundinamarca",
  description:
    "Nuestro recorrido: una gestión con impacto. Conoce los logros y avances en educación, movilidad, inclusión y más en Cundinamarca.",
  icons: { icon: "/icon" },
  openGraph: {
    title: "Hechos | Daniel Bernal - Por Cundinamarca",
    description:
      "Nuestro recorrido: una gestión con impacto. Conoce los logros y avances en educación, movilidad, inclusión y más en Cundinamarca.",
  },
}

const pasos = [
  {
    anio: "2020",
    titulo: "Inicio del mandato",
    descripcion:
      "Asumimos el compromiso con Cundinamarca con un plan de gobierno enfocado en resultados concretos.",
  },
  {
    anio: "2021",
    titulo: "Educacion para todos",
    descripcion:
      "Apertura de la primera universidad regional, ampliando el acceso a la educacion superior.",
  },
  {
    anio: "2022",
    titulo: "Conectividad y movilidad",
    descripcion:
      "Inicio de la Via Perimetral que transformo el transporte de la region.",
  },
  {
    anio: "2023",
    titulo: "Inclusion y deporte",
    descripcion:
      "Programas de inclusion social y nuevos espacios deportivos para la juventud.",
  },
]

export default function HechosPage() {
  return (
    <section className="bg-gradient-to-br from-[#021446] via-[#114380] to-[#114380] py-25 lg:py-40 font-helvetica">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-helvetica font uppercase tracking-widest text-[#f7ab14]">
            Nuestro recorrido
          </p>
          <h2 className="font-serif text-4xl text-white md:text-5xl">
            Una gestion con impacto
          </h2>
        </div>
        <div className="relative">
          {/* Línea vertical central */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-[#E8A317]/50 hidden sm:block" />
          <div className="flex flex-col gap-12 sm:gap-16">
            {pasos.map((paso, i) => {
              const esPar = i % 2 === 0
              const cardContent = (
                <div className="max-w-md rounded-2xl bg-white/10 p-8 backdrop-blur-sm mx-auto sm:mx-0 border border-white/15">
                  <span className="font-helvetica text-3xl font-bold text-[#f7ab14]">
                    {paso.anio}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    {paso.titulo}
                  </h3>
                  <p className="mt-2 leading-relaxed text-white/70">
                    {paso.descripcion}
                  </p>
                </div>
              )
              return (
                <div
                  key={paso.anio}
                  className="relative flex flex-col gap-4 sm:flex-row sm:items-center min-h-[120px] sm:min-h-0"
                >
                  {/* Móvil: solo la card centrada */}
                  <div className="sm:hidden flex justify-center pl-8">
                    {cardContent}
                  </div>
                  {/* Desktop: izquierda (card si es par) */}
                  <div className="hidden sm:flex sm:w-1/2 sm:pr-8 sm:justify-end">
                    {esPar ? cardContent : null}
                  </div>
                  {/* Punto en la línea */}
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2 h-4 w-4 shrink-0 rounded-full border-4 border-[#E8A317] bg-[#1B3A5C] z-10" />
                  {/* Desktop: derecha (card si es impar) */}
                  <div className="hidden sm:flex sm:w-1/2 sm:pl-8 sm:justify-start">
                    {!esPar ? cardContent : null}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
