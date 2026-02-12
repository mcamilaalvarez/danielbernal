import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Noticias | Daniel Bernal - Por Cundinamarca",
  description:
    "Últimas noticias y actividades de Daniel Bernal, candidato a la Cámara por Cundinamarca. Información sobre eventos, propuestas y el equipo.",
  icons: { icon: "/icon" },
  openGraph: {
    title: "Noticias | Daniel Bernal - Por Cundinamarca",
    description:
      "Últimas noticias y actividades de Daniel Bernal, candidato a la Cámara por Cundinamarca.",
  },
}

export default function NoticiasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
