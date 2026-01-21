import Image from "next/image"
    import { LinkIcon } from "@heroicons/react/24/outline"

interface TeamCardProps {
  name: string
  role: string
  description: string
  image: string
  linkedin: string
}

export function TeamCard({ name, role, description, image, linkedin }: TeamCardProps) {
  return (
    <div className="group relative">
      {/* Card */}
      <div className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 pt-16 text-center hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1">
        {/* Avatar */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-amber-500 overflow-hidden bg-slate-800 shadow-lg shadow-amber-500/20">
              <Image
                src={image || "/placeholder.svg"}
                alt={name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900" />
          </div>
        </div>

        {/* Content */}
        <div className="mt-4">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-amber-500 font-medium text-sm mb-4">{role}</p>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-700">
            <a
              href="#"
              className="text-amber-500 text-sm font-medium hover:text-amber-400 transition-colors flex items-center gap-1"
            >
              Ver perfil completo
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href={linkedin}
              className="text-[#003366] bg-white/90 p-2 rounded-lg hover:bg-white transition-colors"
              aria-label={`LinkedIn de ${name}`}
            >
              <LinkIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
