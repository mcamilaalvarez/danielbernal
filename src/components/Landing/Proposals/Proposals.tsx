"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const visionData = [
    {
        id: 1,
        icon: "🎓",
        title: "Más educación y empleo para los jóvenes",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. "
    },
    {
        id: 2,
        icon: "🌾",
        title: "Un campo productivo y competitivo",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. "
    },
    {
        id: 3,
        icon: "🚗",
        title: "Movilidad eficiente y sostenible",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.  "
    },
    {
        id: 4,
        icon: "🤝",
        title: "Inclusión social con dignidad para todos",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat."
    }
];

export default function Proposals() {
    const router = useRouter();
    return (
        <section className="flex flex-col items-center bg-gray-100 py-16 px-4 w-full">
            <div className="max-w-6xl w-full">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Cundinamarca necesita futuro con oportunidades
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Mi visión se centra en cuatro ejes fundamentales que transformarán nuestra región y crearán un futuro próspero para todos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {visionData.map((item) => (
                        <div 
                            key={item.id}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-4xl md:text-5xl">
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button 
                        onClick={() => router.push('/proposals')} 
                        className="bg-blue-500 text-white px-8 py-4 rounded-xl hover:bg-blue-600 transition-all duration-300 text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        Conoce mi plan completo
                    </button>
                </div>
            </div>
        </section>
    );
}
