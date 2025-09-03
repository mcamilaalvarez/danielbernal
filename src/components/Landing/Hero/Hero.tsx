"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="flex flex-col justify-center mx-8">
    <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold text-black w-3/4  mb-8 md:mb-2 mt-4" > Por Cundinamarca: TODO</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-end justify-items-center ">
      <div className="flex flex-col gap-6">
        <p className="text-2xl text-gray-600 ">Este proyecto lo hacemos juntos. Creo en
          la educación, en la inclusión, en la capacidad de transformar nuestro departamento con resultados
          reales y oportunidades para todos</p>

        <div className="flex flex-row gap-4">
          <button onClick={() => router.push('/join-team')} className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-xl">Súmate al equipo D</button>
          <button onClick={() => router.push('/presentation')} className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-xl">Conoce a Daniel</button>
        </div>
      </div>
      
      
      <div> 
      <Image src="/images/Daniel_Bernal_Montealegre.jpg" alt="Daniel Bernal Montealegre" width={600} height={600} className="rounded-xl" />

      </div>
     
    </div>
 

  </section>
  );
}
