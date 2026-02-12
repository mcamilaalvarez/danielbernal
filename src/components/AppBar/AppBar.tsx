"use client"

import { Disclosure, DisclosureButton, DisclosurePanel,} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'        
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { VotaALaCamara } from '@/components/Common/Icons/VotaALaCamara'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Quién soy', href: '/presentacion' },
  { name: 'Mis propuestas', href: '/propuestas' },
  { name: 'Equipo D', href: '/equipo' },
  { name: 'Noticias', href: '/noticias' },
  { name: 'Hechos', href: '/hechos' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function AppBar() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <Disclosure as="nav" className="absolute top-0 left-0 right-0 w-full z-50 shadow-none border-none">
      {({ open }) => (
        <>
          {/* Content - Fondo blanco solo cuando está abierto en mobile */}
          <div className={classNames(
            "relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pr-8 lg:pr-[10%] p-2 shadow-none transition-colors duration-200",
            open ? "bg-white sm:bg-transparent" : "bg-transparent"
          )} style={{ boxShadow: 'none' }}>
            <div className="relative flex h-16 sm:h-[10em] items-center justify-end w-full">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className={classNames(
                  "group relative inline-flex items-center justify-center rounded-md p-2 focus:outline-2 focus:-outline-offset-1",
                  open ? "text-[#114380] hover:bg-[#114380]/10 focus:outline-[#114380]" : "text-white hover:bg-white/10 focus:outline-white"
                )}>
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className={classNames(
                    "block size-6 group-data-open:hidden",
                    open ? "text-[#114380]" : "text-white"
                  )} />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block text-[#114380]" />
                </DisclosureButton>
              </div>
              
              {/* Logo VotaALaCamara - Centro */}
              {isHomePage && (
              <div className="hidden sm:flex items-center">
                <Link href="/" className="w-[300px]">
                  <VotaALaCamara />
                </Link>
              </div>
              )}
              {/* Navegación - Derecha del logo */}
              <div className="hidden sm:flex items-center ml-8">
                <div className="flex items-center">
                  {navigation
                    .filter((item) => !(isHomePage && item.href === '/'))
                    .map((item, index, filteredNav) => {
                    const active = isActive(item.href)
                    return (
                      <div key={item.name} className="flex items-center">
                        <Link
                          href={item.href}
                          aria-current={active ? 'page' : undefined}
                          className={classNames(
                            active ? 'text-[#f7ab13]' : 'text-white hover:text-[#f7ab13]',
                            'px-2 py-2 text-[20px] font-light transition-colors font-helvetica',
                          )}
                        >
                          {item.name}
                        </Link>
                        {/* Separador punto */}
                        {index < filteredNav.length - 1 && (
                          <span className="text-white text-[20px] mx-1">·</span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden relative z-10 bg-white">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation
                .filter((item) => !(isHomePage && item.href === '/'))
                .map((item) => {
                const active = isActive(item.href)
                return (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={classNames(
                      active ? 'text-[#f7ab13]' : 'text-[#114380] hover:text-[#f7ab13]',
                      'block rounded-md px-3 py-2 text-base font-medium transition-colors',
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                )
              })}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
