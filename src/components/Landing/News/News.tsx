"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface Noticia {
    titulo: string;
    descripcion: string;
    texto: string;
    fecha: string;
    urlImagen: string;
    altImagen: string;
}

export default function News() {
    const router = useRouter();
    const [mainNews, setMainNews] = useState<Noticia | null>(null);
    const [sideNews, setSideNews] = useState<Noticia[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('/api/news');
                const data: Noticia[] = await response.json();
                
                if (data && data.length > 0) {
                    console.log("data", data);
                    // Primera noticia como principal
                    setMainNews(data[0]);
                    // Siguientes 3 noticias como secundarias
                    setSideNews(data.slice(1, 4));
                }
            } catch (error) {
                console.error('Error fetching news:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <section className="flex flex-col items-center bg-white py-12 px-4 w-full">
            {/* Título */}
            <div className="flex flex-col  items-center text-center mb-10 ">
                <span className="lg:text-[70px] md:text-6xl font-bold text-[#0381c4]  font-helvetica tracking-[-0.06em] font-bold ">
                    Noticias destacadas
                </span>
                <p className="text-lg lg:text-[25px] md:text-xl text-gray-600 font-helvetica leading-[0.9] font-light" >
                    <span className="font-bold">Toda historia se cuenta con hechos recientes.</span> Aquí encontrarás los principales hitos de su gestión
                </p>
            </div>

            {/* Grid de noticias */}
            {loading ? (
                <div className="flex justify-center items-center h-[450px]">
                    <p className="text-gray-500">Cargando noticias...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl w-full">
                    {/* Noticia principal - Izquierda */}
                    {mainNews && (
                        <div className="relative h-[450px] overflow-hidden group cursor-pointer">
                            <Image
                                src={mainNews.urlImagen || "/images/proyect.jpg"}
                                alt={mainNews.altImagen || mainNews.titulo}
                                fill
                                className="object-cover transition-transform duration-300"
                            />
                            {/* Overlay gradiente */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#027fc1] via-[#027fc1]/20 to-transparent"></div>

                            {/* Contenido */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                                <span className="inline-block bg-white text-[#0d5c85] text-sm font-bold font-helvetica px-4 py-1 mb-4">
                                    {mainNews.fecha}
                                </span>
                                <h3 className="text-2xl md:text-[30px] font-bold mb-2">
                                    {mainNews.titulo}
                                </h3>
                                <p className="text-white/90 text-sm lg:text-[16px]">
                                    {mainNews.descripcion}
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col lg:h-[450px]">
                        {/* Noticias secundarias - Horizontal */}
                        <div className="grid grid-cols-3 divide-x divide-gray-500">
                            {sideNews.map((news, index) => (
                                <div key={index} className="flex flex-col cursor-pointer px-4 font-helvetica">
                                    {/* Imagen arriba */}
                                    <div className="relative w-full aspect-square overflow-hidden mb-3">
                                        <Image
                                            src={news.urlImagen || "/images/proyect.jpg"}
                                            alt={news.altImagen || "Noticia"}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    {/* Fecha */}
                                    <span className="text-[#324355] text-sm font-semibold mb-2 text-center">
                                        {news.fecha}
                                    </span>
                                    {/* Texto */}
                                    <p className="text-gray-600 text-sm text-center line-clamp-6 font-light">
                                        {news.texto}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {/* Botón abajo a la derecha */}
                        <div className="flex justify-end mt-auto">
                            <button
                                onClick={() => router.push('/news')}
                                className="bg-[#114380] text-white px-8 py-1 rounded-full hover:bg-[#0b4f72] transition-colors text-[22px] font-semibold"
                            >
                                Ver más noticias
                            </button>
                        </div>
                    </div>
                </div>
            )}


        </section>
    );
}
