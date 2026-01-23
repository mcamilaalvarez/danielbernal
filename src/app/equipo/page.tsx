"use client";

import { TeamCard } from "@/components/Common/Team/TeamCard";
import Image from "next/image";

// Icono de LinkedIn
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Datos del equipo (ejemplo - puedes conectar a una API después)
const teamMembers = [
  {
    nombre: "Martina Homes",
    cargo: "Directora Creativa",
    descripcion: "Comunicación estratégica y gestión de campañas políticas con más de 10 años de experiencia.",
    imagen: "/images/achievements.jpg",
    linkedin: "https://linkedin.com/in/martinahomes",
  },
  {
    nombre: "Joanny Rogas",
    cargo: "Desarrollador Senior",
    descripcion: "Desarrollo de plataformas digitales y herramientas de participación ciudadana.",
    imagen: "/images/achievements2.jpg",
    linkedin: "https://linkedin.com/in/joannyrogas",
  },
  {
    nombre: "Marigo Gudigo",
    cargo: "Desarrollador Senior",
    descripcion: "Especialista en tecnología y modernización de procesos gubernamentales.",
    imagen: "/images/CampoProductivo.jpg",
    linkedin: "https://linkedin.com/in/marigogudigo",
  },
  {
    nombre: "Matlea Ferre",
    cargo: "Desarrollador Senior",
    descripcion: "Análisis de datos y estadísticas para la toma de decisiones informadas.",
    imagen: "/images/EducacionSuperior.png",
    linkedin: "https://linkedin.com/in/matleaferre",
  },
  {
    nombre: "Danina Digno",
    cargo: "Desarrollador Senior",
    descripcion: "Gestión de proyectos sociales y programas de inclusión comunitaria.",
    imagen: "/images/DignidadParaTodos.png",
    linkedin: "https://linkedin.com/in/daninadigno",
  },
  {
    nombre: "Amando Alison",
    cargo: "Desarrollador Senior",
    descripcion: "Coordinación de equipos y logística de eventos políticos.",
    imagen: "/images/MovilidadEficiente.jpg",
    linkedin: "https://linkedin.com/in/amandoalison",
  },
];

export default function JoinTeamPage() {
  return (
    <section className="py-16 px-4 pt-32 bg-[#114380] min-h-screen">
    <div className="container mx-auto max-w-6xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">NUESTRO EQUIPO</h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-6" />
        <p className="text-slate-400 text-lg italic max-w-xl mx-auto">Líderes y expertos detrás de nuestro éxito</p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} name={member.nombre} role={member.cargo} description={member.descripcion} image={member.imagen} linkedin={member.linkedin} />
        ))}
      </div>
    </div>
  </section>
  );
}
