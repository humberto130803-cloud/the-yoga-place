import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '../siteConfig'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Clases', href: '#clases' },
    { label: 'Reseñas', href: '#reseñas' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0D0D1A]/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <span className="text-[#C9A84C] font-heading text-xl font-bold tracking-[0.15em] uppercase group-hover:text-[#E2C97E] transition-colors">
            The Yoga Place
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-body font-medium tracking-widest uppercase text-[#F5F0E8]/70 hover:text-[#C9A84C] transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={siteConfig.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-[#C9A84C] text-[#C9A84C] text-xs font-body font-semibold uppercase tracking-widest hover:bg-[#C9A84C] hover:text-[#0D0D1A] transition-all duration-300"
            >
              Reservar
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D0D1A]/98 border-t border-[#C9A84C]/20 px-6 pb-6"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-body uppercase tracking-widest text-[#F5F0E8]/70 hover:text-[#C9A84C] transition-colors border-b border-[#C9A84C]/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-center px-5 py-3 border border-[#C9A84C] text-[#C9A84C] text-xs uppercase tracking-widest hover:bg-[#C9A84C] hover:text-[#0D0D1A] transition-all"
            >
              Reservar Clase
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
