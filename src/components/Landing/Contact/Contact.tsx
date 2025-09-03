"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import IconRounded from "../../Common/IconRounded/IconRounded";
import Input from "@/components/Common/Input/Input";

export default function Contact() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // agregar la lógica para enviar el formulario
        console.log('Formulario de contacto enviado:', formData);
        //agrega para el mensaje de éxito
    };

    return (
        <section className="flex flex-col items-center bg-gray-50 py-16 px-4 w-full">
            <div className="max-w-6xl w-full">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Conectemos por el futuro de Cundinamarca
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Tu voz es importante. Estoy aquí para escucharte, responder tus preguntas y trabajar juntos por nuestra región.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Información de contacto
                            </h3>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <IconRounded iconName="email" useStroke={true} />
                                <div>
                                    <h4 className="font-semibold text-gray-800">Email</h4>
                                    <p className="text-gray-600">daniel@danielbernal.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <IconRounded iconName="phone" useStroke={true} />
                                <div>
                                    <h4 className="font-semibold text-gray-800">Teléfono</h4>
                                    <p className="text-gray-600">+57 300 123 4567</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <IconRounded iconName="location" useStroke={true} />
                                <div>
                                    <h4 className="font-semibold text-gray-800">Ubicación</h4>
                                    <p className="text-gray-600">Cundinamarca, Colombia</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="pt-6">
                            <h4 className="font-semibold text-gray-800 mb-4">Sígueme en redes sociales</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:bg-blue-600 transition-colors duration-200">
                                    <IconRounded 
                                        iconName="twitter" 
                                        className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition-colors duration-200"
                                        classNameSvg="w-5 h-5 text-white"
                                    />
                                </a>
                                <a href="#" className="hover:bg-blue-700 transition-colors duration-200">
                                    <IconRounded 
                                        iconName="facebook" 
                                        className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                                        classNameSvg="w-5 h-5 text-white"
                                    />
                                </a>
                                <a href="#" className="hover:bg-blue-900 transition-colors duration-200">
                                    <IconRounded 
                                        iconName="linkedin" 
                                        className="bg-blue-800 p-3 rounded-full hover:bg-blue-900 transition-colors duration-200"
                                        classNameSvg="w-5 h-5 text-white"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                            Envíame un mensaje
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Nombre */}
                                <Input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Tu nombre completo"
                                    label="Nombre"
                                    className="md:col-span-2"
                                />
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="tu@email.com"
                                    label="Email"
                                />
                                <Input
                                    type="text"
                                    id="asunto"
                                    name="asunto"
                                    value={formData.asunto}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="¿En qué puedo ayudarte?"
                                    label="Asunto"
                                />
                                <Input
                                    label="Mensaje"
                                    type="text"
                                    id="mensaje"
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Cuéntame tu propuesta, pregunta o comentario..."
                                    className="md:col-span-2"
                                    
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white px-8 py-4 rounded-xl hover:bg-blue-600 transition-all duration-300 text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    Enviar mensaje
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
