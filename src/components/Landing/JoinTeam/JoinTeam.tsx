"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/Common/Input/Input";
export default function JoinTeam() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        nombre: '',
        celular: '',
        correo: '',
        municipio: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        console.log('Formulario enviado:', formData);
        // Opcional: redirigir o mostrar mensaje de éxito
    };

    return (
        <section className="flex flex-col items-center bg-white py-16 px-4 w-full">
            <div className="max-w-4xl w-full">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Un proyecto colectivo necesita del compromiso de miles de manos
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Súmate al <span className="text-blue-600 font-bold">Equipo D</span> y hagamos historia juntos.
                    </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <Input label="Nombre completo *" type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} required placeholder="Tu nombre completo" />
                            <Input label="Celular *" type="tel" id="celular" name="celular" value={formData.celular} onChange={handleInputChange} required placeholder="300 123 4567" />
                            <Input label="Correo electrónico *" type="email" id="correo" name="correo" value={formData.correo} onChange={handleInputChange} required placeholder="tu@email.com" />
                            <Input label="Municipio *" type="text" id="municipio" name="municipio" value={formData.municipio} onChange={handleInputChange} required placeholder="Tu municipio" />
                        </div>
                        <div className="text-center pt-4">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-12 py-4 rounded-xl hover:bg-blue-600 transition-all duration-300 text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 w-full md:w-auto"
                            >
                                ¡Quiero sumarme!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
