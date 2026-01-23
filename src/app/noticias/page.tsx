"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Noticia {
  titulo: string;
  descripcion: string;
  texto: string;
  fecha: string;
  urlImagen: string;
  altImagen: string;
}

export default function NewsPage() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/news");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Noticia[] = await response.json();
        setNoticias(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-[#0a2d5a] via-[#114380] to-[#1a5a9e] pt-40 px-4 sm:px-8 font-helvetica">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white text-2xl">Cargando noticias...</p>
        </div>
      </section>
    );
  }

  if (noticias.length === 0) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-[#0a2d5a] via-[#114380] to-[#1a5a9e] pt-40 px-4 sm:px-8 font-helvetica">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white text-2xl">No hay noticias disponibles.</p>
        </div>
      </section>
    );
  }

  // Primera noticia como destacada
  const noticiaDestacada = noticias[0];
  // Resto de noticias
  const otrasNoticias = noticias.slice(1);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#021446] via-[#114380] to-[#04348c] pt-40 pb-16 px-4 sm:px-8 font-helvetica">
      <div className="max-w-6xl mx-auto">
        {/* Título de la sección */}
        <div className="border-l-4 border-[#f7ab13] pl-4 mb-10">
          <h1 className="text-white text-3xl sm:text-4xl font-bold uppercase mb-2">
            Noticias
          </h1>
          <p className="text-white/70 text-lg">Lo que debes saber hoy</p>
        </div>

        {/* Noticia destacada */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Imagen */}
            <div className="relative h-64 lg:h-auto lg:min-h-[400px]">
              <Image
                src={noticiaDestacada.urlImagen || "/images/proyect.jpg"}
                alt={noticiaDestacada.altImagen || noticiaDestacada.titulo}
                fill
                className="object-cover"
              />
            </div>
            {/* Contenido */}
            <div className="p-6 lg:p-10 flex flex-col justify-center">
              <span className="bg-[#f7ab13] text-[#114380] px-4 py-1 text-sm font-bold rounded-full w-fit mb-4">
                {noticiaDestacada.fecha}
              </span>
              <h2 className="text-[#114380] text-2xl lg:text-3xl font-bold mb-4">
                {noticiaDestacada.titulo}
              </h2>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
                {noticiaDestacada.descripcion}
              </p>
              <p className="text-gray-500 text-base leading-relaxed whitespace-pre-line">
                {noticiaDestacada.texto}
              </p>
            </div>
          </div>
        </article>

        {/* Grid de otras noticias */}
        {otrasNoticias.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {otrasNoticias.map((noticia, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Imagen */}
                <div className="relative h-150">
                  <Image
                    src={noticia.urlImagen || "/images/proyect.jpg"}
                    alt={noticia.altImagen || noticia.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Contenido */}
                <div className="p-5">
                  <span className="text-[#f7ab13] text-sm font-semibold">
                    {noticia.fecha}
                  </span>
                  <h3 className="text-[#114380] text-lg font-bold mt-2 mb-2">
                    {noticia.titulo}
                  </h3>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
                    {noticia.descripcion}
                  </p>
                  <p className="text-gray-600 text-base leading-snug whitespace-pre-line ">
                    {noticia.texto}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
