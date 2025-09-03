"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

const galleryImages = [
    {
        id: 1,
        src: "/images/achievements.jpg",
        alt: "Daniel Bernal en evento público",
        title: "Compromiso con la comunidad"
    },
    {
        id: 2,
        src: "/images/achievements2.jpg",
        alt: "Reunión con líderes locales",
        title: "Trabajando por Cundinamarca"
    },
    {
        id: 3,
        src: "/images/proyect.jpg",
        alt: "Inauguración de obra pública",
        title: "Resultados que transforman"
    },
    {
        id: 4,
        src: "/images/achievements.jpg",
        alt: "Encuentro con jóvenes",
        title: "Futuro para las nuevas generaciones"
    },
    {
        id: 5,
        src: "/images/achievements2.jpg",
        alt: "Visita a proyecto agrícola",
        title: "Desarrollo del campo"
    }
];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    return (
        <section className="flex flex-col items-center bg-gray-100 py-16 px-4 w-full">
            <div className="max-w-6xl w-full">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    Las imágenes cuentan mejor lo que vivimos. 
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Recorre en fotos y videos este camino compartido por
                    Cundinamarca.
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                    {/* Main Image */}
                    <div className="relative h-96 md:h-[500px] lg:h-[600px]">
                        <Image
                            src={galleryImages[currentIndex].src}
                            alt={galleryImages[currentIndex].alt}
                            fill
                            className="object-cover transition-all duration-500 ease-in-out"
                            priority
                        />
                        
                        {/* Image Overlay with Title */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
                            <h3 className="text-white text-2xl md:text-3xl font-bold">
                                {galleryImages[currentIndex].title}
                            </h3>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                        aria-label="Imagen anterior"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                        aria-label="Siguiente imagen"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Auto-play Toggle */}
                    <button
                        onClick={toggleAutoPlay}
                        className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
                        aria-label={isAutoPlaying ? "Pausar" : "Reproducir"}
                    >
                        {isAutoPlaying ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        )}
                    </button>

                    {/* Image Counter */}
                    <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {currentIndex + 1} / {galleryImages.length}
                    </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex justify-center mt-8 space-x-3">
                    {galleryImages.map((image, index) => (
                        <button
                            key={image.id}
                            onClick={() => goToSlide(index)}
                            className={`relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all duration-200 ${
                                index === currentIndex 
                                    ? 'ring-4 ring-blue-500 scale-110' 
                                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                            }`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                            className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${((currentIndex + 1) / galleryImages.length) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
