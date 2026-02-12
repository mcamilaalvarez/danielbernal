import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quién soy | Daniel Bernal - Por Cundinamarca",
  description:
    "Daniel Bernal: abogado de la Universidad Nacional, magister en Planeación Urbana y Regional, especialista en Gobierno y Gestión Pública. Más de 8 años en servicio público.",
  icons: { icon: "/icon" },
  openGraph: {
    title: "Quién soy | Daniel Bernal - Por Cundinamarca",
    description:
      "Daniel Bernal: abogado, magister en Planeación Urbana y Regional, especialista en Gobierno y Gestión Pública. Candidato a la Cámara por Cundinamarca.",
  },
}

export default function PresentacionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
