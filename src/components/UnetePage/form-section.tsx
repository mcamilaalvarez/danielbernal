"use client"

import { useState } from "react"
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa"

const initialFormData = {
  nombre: "",
  celular: "",
  correo: "",
  municipio: "",
}

export function FormSection() {
  const [formData, setFormData] = useState(initialFormData)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch("/api/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitted(true)
        setFormData(initialFormData)
      } else {
        const errorData = await response.json().catch(() => ({}))
        console.error("Error del servidor:", errorData)
      }
    } catch (err) {
      console.error("Error de red:", err)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section id="formulario" className="bg-gray-100 py-20 lg:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-12">
          <div className="flex flex-col items-center gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#E8A317]/20">
              <FaCheckCircle className="h-10 w-10 text-[#E8A317]" />
            </div>
            <h2 className="font-helvetica text-4xl text-[#1B3A5C] md:text-5xl">
              {"Bienvenido al equipo"}
            </h2>
            <p className="text-lg leading-relaxed text-[#1B3A5C]/70">
              Hemos recibido tu informacion. Muy pronto un miembro de nuestro
              equipo se pondra en contacto contigo. Juntos vamos a seguir
              construyendo una Cundinamarca mejor.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="formulario" className="bg-gray-200 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-16 lg:flex-row">
          <div className="lg:w-5/12">
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#E8A317]">
              Inscribete
            </p>
            <h2 className="font-helvetica text-4xl text-[#1B3A5C] md:text-5xl">
              <span className="text-balance">
                Da el primer{" "}
                <span className="text-[#E8A317]">paso</span>
              </span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#1B3A5C]/70">
              Llena el formulario y unete a la red de ciudadanos comprometidos
              con el futuro de Cundinamarca. Es rapido, sencillo y gratuito.
            </p>
            <div className="mt-10 flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8A317]/15 text-sm font-bold text-[#E8A317]">
                  1
                </div>
                <div>
                  <p className="font-bold text-[#1B3A5C]">Completa tus datos</p>
                  <p className="text-sm text-[#1B3A5C]/50">
                    Nombre, contacto y municipio
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8A317]/15 text-sm font-bold text-[#E8A317]">
                  2
                </div>
                <div>
                  <p className="font-bold text-[#1B3A5C]">Te contactamos</p>
                  <p className="text-sm text-[#1B3A5C]/50">
                    Un coordinador te dara la bienvenida
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-[#1B3A5C]/5 p-8 ring-1 ring-[#1B3A5C]/10 backdrop-blur-sm lg:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="nombre"
                    className="text-sm font-semibold text-[#1B3A5C]/80"
                  >
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    className="rounded-xl border border-[#1B3A5C]/10 bg-[#1B3A5C]/5 px-4 py-3 text-[#1B3A5C] placeholder-[#1B3A5C]/30 outline-none transition-colors focus:border-[#E8A317]/50 focus:ring-1 focus:ring-[#E8A317]/50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="celular"
                            className="text-sm font-semibold text-[#1B3A5C]/80"
                  >
                    Celular
                  </label>
                  <input
                    id="celular"
                    name="celular"
                    type="tel"
                    required
                    value={formData.celular}
                    onChange={handleInputChange}
                    placeholder="300 123 4567"
                    className="rounded-xl border border-[#1B3A5C]/10 bg-[#1B3A5C]/5 px-4 py-3 text-[#1B3A5C] placeholder-[#1B3A5C]/30 outline-none transition-colors focus:border-[#E8A317]/50 focus:ring-1 focus:ring-[#E8A317]/50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="correo"
                    className="text-sm font-semibold text-[#1B3A5C]/80"
                  >
                    Correo electronico
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    required
                    value={formData.correo}
                    onChange={handleInputChange}
                    placeholder="tu@correo.com"
                    className="rounded-xl border border-[#1B3A5C]/10 bg-[#1B3A5C]/5 px-4 py-3 text-[#1B3A5C] placeholder-[#1B3A5C]/30 outline-none transition-colors focus:border-[#E8A317]/50 focus:ring-1 focus:ring-[#E8A317]/50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="municipio"
                    className="text-sm font-semibold text-[#1B3A5C]/80"
                  >
                    Municipio
                  </label>
                  <input
                    id="municipio"
                    name="municipio"
                    type="text"
                    required
                    value={formData.municipio}
                    onChange={handleInputChange}
                    placeholder="Tu municipio"
                    className="rounded-xl border border-[#1B3A5C]/10 bg-[#1B3A5C]/5 px-4 py-3 text-[#1B3A5C] placeholder-[#1B3A5C]/30 outline-none transition-colors focus:border-[#E8A317]/50 focus:ring-1 focus:ring-[#E8A317]/50"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#E8A317] px-10 py-4 text-lg font-bold text-[#1B3A5C] transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Enviando..." : "Unirme al equipo"}
                <FaPaperPlane className="h-5 w-5" />
              </button>
            
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
