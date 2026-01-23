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
        <section className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
            {/* Imagen de fondo */}
            <Image
                src="/images/fondoequipo.png"
                alt="Fondo equipo"
                fill
                sizes="100vw"
                className="object-cover"
                priority
            />

            {/* Contenido principal - Row en desktop, Column-reverse en mobile (formulario arriba, imagen abajo) */}
            <div className="relative z-10 w-full h-full flex flex-col-reverse lg:flex-row items-center justify-center px-4 py-0 gap-4 lg:gap-16 xl:gap-24">
                {/* Imagen de la mujer - Izquierda en desktop */}
                    <div className="bg-transparent relative w-[320px] h-[380px] sm:w-[380px] sm:h-[480px] md:w-[450px] md:h-[550px] lg:w-[500px] lg:h-[800px] xl:w-[600px] xl:h-[800px]">
                        {/* Cruces decorativas */}
                        <span className="absolute top-[53%] left-[-2%] text-[#d9e7e9] text-3xl md:text-4xl lg:text-xl font-bold select-none">+</span>
                        <span className="absolute top-[58%] left-[-10%] text-[#d9e7e9] text-4xl md:text-5xl lg:text-[100px] font-bold select-none">+</span>
                        <span className="absolute top-[45%] right-[-5%] text-[#d9e7e9] text-3xl md:text-4xl lg:text-[100px] font-bold select-none">+</span>
                        <span className="absolute top-[45%] left-[-10%] text-[#d9e7e9] text-4xl md:text-5xl lg:text-[50px] font-bold select-none">+</span>
                        <span className="absolute top-[50%] right-[-8%] text-[#d9e7e9] text-3xl md:text-4xl lg:text-[300px] font-bold select-none font-helvetica">+</span>
                        <span className="absolute top-[70%] right-[-18%] text-[#d9e7e9] text-4xl md:text-5xl lg:text-6xl font-light select-none">+</span>
                        
                        <Image
                            src="/images/mujerquipo2.png"
                            alt="Únete al equipo"
                            fill
                            className="object-contain object-bottom"
                            priority
                        />
                    </div>
                

                {/* Formulario - Derecha en desktop */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center">
                    <div className="w-full p-4 md:p-8">
                        <div className="text-center mb-6 md:mb-10">
                            <span className="text-[#007a80] text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] xl:text-[80px] font-helvetica font-bold tracking-[-0.06em] leading-tight block">
                                Súmate al Equipo D
                            </span>

                            <p className="text-[#4a586c] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[28px] font-helvetica font-light leading-[1.1] mt-3">
                                Un proyecto colectivo necesita del compromiso de miles de manos.
                            </p>
                            <p className="text-[#324355] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[28px] font-helvetica font-bold">
                                Súmate al Equipo D y hagamos historia juntos.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 flex flex-col items-center justify-center">
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
                                    className="bg-transparent text-[#0a5480] border-2 border-[#0a5480] px-4 md:px-8 py-2 rounded-full font-helvetica tracking-[-0.06em] transition-all duration-200 text-[18px] sm:text-[24px] md:text-[32px] lg:text-[38px] 
                                     font-bold shadow-lg hover:shadow-xl active:scale-95 active:bg-[#0a5480]/10 transform cursor-pointer w-full"
                                >
                                    {loading ? 'Enviando...' : 'Quiero sumarme'}
                                </button>
                            </div>
                            <div className="text-center pt-2 w-[90%] md:w-[70%]">
                                <button
                                    type="button"
                                    className="bg-[#0a5480] text-white border-2 border-[#0a5480] px-4 md:px-10 py-2 rounded-full 
                                    font-helvetica tracking-[-0.06em] transition-all duration-200 text-[20px] sm:text-[30px] 
                                    md:text-[26px] lg:text-[30px] xl:text-[34px] font-bold shadow-lg hover:shadow-xl active:scale-95 active:bg-[#083d5e] transform cursor-pointer w-full"
                                >
                                    Descarga nuestro <span className="font-helvetica font-bold text-[#b9cfd3]">material gráfico</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
