"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Presentation() {
    const router = useRouter();
    return (
        <section className="flex flex-col items-center bg-white py-8">
            <div className="flex flex-col gap-6 w-1/2 items-center text-center">
            <h2 className="text-4xl font-bold text-gray-800">Quién es Daniel</h2>

                <p className="text-2xl text-gray-600 ">Abogado de la Universidad Nacional, magíster en Planeación Urbana y Regional, especialista en
                    Gobierno, Gestión Pública y Opinión Política. He trabajado desde el servicio público y la academia
                    para resolver problemas y abrir caminos de desarrollo en Cundinamarca.</p>

                <button onClick={() => router.push('/presentation')} className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-xl">Ver más sobre Daniel</button>

            </div>
        </section>
    );
}
