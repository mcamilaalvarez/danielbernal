"use client"
import { useState } from "react";
import Image from "next/image";
import InputDegrade from "@/components/Common/Input/InputDegrade";
export default function JoinTeam() {
    const [formData, setFormData] = useState({
        nombre: '',
        celular: '',
        correo: '',
        municipio: ''
    });
    const [loading, setLoading] = useState(false);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            const response = await fetch('/api/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // INDISPENSABLE
                },
                body: JSON.stringify(formData), // Convierte el objeto a texto JSON
            });
    
            if (response.ok) {
                alert('✅ ¡Registro exitoso!');
                setFormData({ nombre: '', celular: '', correo: '', municipio: '' });
            } else {
                const errorData = await response.json();
                console.error("Error del servidor:", errorData);
            }
        } catch (err) {
            console.error("Error de red:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:h-[800px] bg-[#c5dde0] overflow-hidden">
            {/* Imagen de fondo - ocupa todo el ancho */}
            <Image
                src="/images/UneteAlEquipo.png"
                alt="Únete al equipo"
                fill
                sizes="100vw"
                className="object-cover object-left md:object-top"
                priority
                
            />

            {/* Contenido superpuesto */}
            <div className="absolute inset-0 flex items-center px-4 justify-center md:justify-end">
                <div className="w-full md:w-[70%] lg:w-[55%] bg-[#c5dde0]/80 md:bg-transparent p-4 md:p-0 rounded-xl">
                    <div className="text-center mb-4 md:mb-12">

                        <span className="text-[#007a80] text-[32px] sm:text-[50px] md:text-[60px] lg:text-[80px] font-helvetica font-bold tracking-[-0.06em] leading-tight block">
                            Súmate al Equipo D
                        </span>


                        <p className="text-[#4a586c] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[30px] font-helvetica font-light leading-[1.1]">
                            Un proyecto colectivo necesita del compromiso de miles de manos.
                        </p>
                        <p className="text-[#324355] text-[14px] sm:text-[18px] md:text-[24px] lg:text-[30px] font-helvetica font-bold">
                            Súmate al Equipo D y hagamos historia juntos.
                        </p>
                    </div>


                    <form onSubmit={handleSubmit} className="space-y-2 md:space-y-4 flex flex-col items-center justify-center">
                        <InputDegrade
                            id="nombre"
                            label="Nombre"
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            required
                            placeholder="Nombre"
                        />
                        <InputDegrade
                            id="celular"
                            label="Celular"
                            type="tel"
                            name="celular"
                            value={formData.celular}
                            onChange={handleInputChange}
                            required
                            placeholder="Celular"
                        />
                        <InputDegrade
                            id="correo"
                            label="Correo"
                            type="email"
                            name="correo"
                            value={formData.correo}
                            onChange={handleInputChange}
                            required
                            placeholder="Correo"
                        />
                        <InputDegrade
                            id="municipio"
                            label="Municipio"
                            type="text"
                            name="municipio"
                            value={formData.municipio}
                            onChange={handleInputChange}
                            required
                            placeholder="Municipio"
                        />
                        <div className="text-center pt-2 w-[90%] md:w-[70%]">
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-transparent text-[#0a5480] border-2 border-[#0a5480] px-4 md:px-8 py-1 rounded-full font-helvetica tracking-[-0.06em] transition-all duration-300 text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-bold shadow-lg hover:shadow-xl w-full"
                            >
                                {loading ? 'Enviando...' : 'Quiero sumarme'}
                            </button>
                        </div>
                        <div className="text-center pt-2 w-[90%] md:w-[70%]">
                            <button
                                type="button"
                                className="bg-[#0a5480] text-white border-2 border-[#0a5480] px-4 md:px-10 py-1 rounded-full font-helvetica tracking-[-0.06em] transition-all duration-300 text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] font-bold shadow-lg hover:shadow-xl w-full"
                            >
                                Descarga nuestro <span className="font-helvetica font-bold text-[#b9cfd3]">material gráfico</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
}
