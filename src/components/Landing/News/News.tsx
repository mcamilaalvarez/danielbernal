"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const newsData = [
    {
        id: 1,
        image: "/images/proyect.jpg",
        title: "Inauguración del Nuevo Centro Comunitario",
        description: "Celebramos la apertura del centro que beneficiará a más de 500 familias en la región.",
        date: "15 de Marzo, 2024"
    },
    {
        id: 2,
        image: "/images/proyect.jpg",
        title: "Programa de Educación Rural",
        description: "Lanzamos iniciativa para mejorar el acceso a la educación en zonas rurales.",
        date: "10 de Marzo, 2024"
    },
    {
        id: 3,
        image: "/images/proyect.jpg",
        title: "Proyecto de Infraestructura Vial",
        description: "Iniciamos la construcción de nuevas carreteras para conectar comunidades.",
        date: "5 de Agosto, 2025"
    }
];

export default function News() {
    const router = useRouter();

    return (
        <section className="flex flex-col items-center bg-gray-100 py-8">
            <div className="flex flex-col gap-6 items-center text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">Noticias Destacadas</h2>
                <p className="text-2xl text-gray-600 max-w-4xl">
                    Toda historia se cuenta con hechos recientes. Aquí encontrarás mis reflexiones y el trabajo que
                    realizamos junto a la comunidad.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
                {newsData.map((news) => (
                    <div key={news.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                        {/* Imagen */}
                        <div className="relative h-48">
                            <Image
                                src={news.image}
                                alt={news.title}
                                fill
                                className="object-cover"
                            />
                        </div>                        
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                                {news.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                                {news.description}
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-sm text-gray-500">{news.date}</span>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12">
                <button 
                    onClick={() => router.push('/news')} 
                    className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors text-xl font-semibold"
                >
                    Ver todas las noticias
                </button>
            </div>
        </section>
    );
}
