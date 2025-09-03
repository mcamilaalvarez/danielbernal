"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/Common/Button/Button";
import ImageTextCard from "@/components/Common/ImageTextCard/ImageTextCard";
import ContainerImgTxtCard from "@/components/Common/ImageTextCard/ContainerImgTxtCard";
const achievementsData = [
    {
        id: 1,
        image: "/images/achievements.jpg",
        title: "Educación: ",
        description: "Primera universidad regional de Cundinamarca"
    },
    {
        id: 2,
        image: "/images/achievements.jpg",
        title: "Movilidad:",
        description: "La Vía Perimetral, conectando a un millón de personas."
    },
    {
        id: 3,
        image: "/images/achievements.jpg",
        title: "Inclusión:",
        description: "2.000 adultos mayores y personas con discapacidad conocieron el mar."
    },
    {
        id: 4,
        image: "/images/achievements.jpg",
        title: "Deporte y desarrollo:",
        description: "Centro de innovación y nuevos espacios para la juventud."
    }
];

export default function Achievements() {
    const router = useRouter();
    return (
        <section className="flex flex-col  bg-white py-8 w-full px-9">
            <div className="flex flex-col gap-6">
                <h2 className="text-4xl font-bold text-gray-800">Por Cundinamarca: hechos</h2>

                <p className="text-2xl text-gray-600 ">Mi experiencia en el servicio público se mide en resultados que mejoran vidas. Estos son algunos
                    de los logros que marcan la diferencia: </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-8 ">
                <ContainerImgTxtCard>
                    <Image src="/images/achievements2.jpg" alt="Daniel Bernal Montealegre" width={600} height={800} className="rounded-xl mx-auto md:mx-0" />
                    <h3 className="text-2xl font-bold text-gray-800 mt-4 w-3/4 mx-auto md:mx-0"> {achievementsData[0].title} </h3>
                    <p className="text-xl text-gray-600 mt-2 mx-auto md:mx-0"> {achievementsData[0].description} </p>
                <Button onClick={() => router.push('/achievements')} className="mx-auto md:mx-0">Conoce más hechos</Button>
                </ContainerImgTxtCard>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-items-center">
                    <ContainerImgTxtCard>
                        <ImageTextCard image="/images/achievements.jpg" title={achievementsData[1].title} description={achievementsData[1].description}
                         width={250} height={350} alt="Daniel Bernal Montealegre" />
                    </ContainerImgTxtCard>
                    <ContainerImgTxtCard>
                        <ImageTextCard image="/images/achievements.jpg" title={achievementsData[2].title} description={achievementsData[2].description}
                         width={250} height={300} alt="Daniel Bernal Montealegre" />
                    </ContainerImgTxtCard>
                    <ContainerImgTxtCard>
                        <ImageTextCard image="/images/achievements.jpg" title={achievementsData[3].title} description={achievementsData[3].description}
                         width={250} height={350} alt="Daniel Bernal Montealegre" />
                    </ContainerImgTxtCard>
                    <ContainerImgTxtCard>
                        <ImageTextCard image="/images/achievements2.jpg" title={achievementsData[1].title} description={achievementsData[1].description}
                         width={250} height={300} alt="Daniel Bernal Montealegre" />
                    </ContainerImgTxtCard>
                </div>
            </div>

        </section>
    );
}
