import type { Metadata } from "next"
import { HeroUnete } from "@/components/UnetePage/hero-unete"
import { PorQueSection } from "@/components/UnetePage/por-que-section"
import { FormSection } from "@/components/UnetePage/form-section"
export const metadata: Metadata = {
  title: "Únete al equipo | Daniel Bernal - Por Cundinamarca",
  description:
    "Se parte del equipo que está transformando Cundinamarca. Únete como voluntario, líder comunitario o colaborador.",
  icons: { icon: "/icon" },
  openGraph: {
    title: "Únete al equipo | Daniel Bernal - Por Cundinamarca",
    description:
      "Se parte del equipo que está transformando Cundinamarca. Únete como voluntario, líder comunitario o colaborador.",
  },
}

export default function UnetePage() {
  return (
    <div className="font-helvetica">
      <HeroUnete />
      <div className="bg-gradient-to-br from-[#021446] via-[#114380] to-[#114380] ">
        <PorQueSection />
        <FormSection />
      </div>
    </div>
  )
}
