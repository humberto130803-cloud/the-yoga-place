import { siteConfig } from '../siteConfig'
import { FiPhone, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-[#080810] border-t border-[#C9A84C]/15 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-xl font-bold text-[#C9A84C] tracking-widest uppercase mb-4">
            The Yoga Place
          </h3>
          <p className="text-[#F5F0E8]/50 font-body text-sm leading-relaxed mb-6">
            Un espacio de transformación personal y bienestar en el corazón de Panamá.
          </p>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#C9A84C] text-sm">★</span>
            ))}
            <span className="text-[#F5F0E8]/40 text-xs font-body ml-2 mt-0.5">5.0 Google</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-sm font-semibold text-[#F5F0E8] uppercase tracking-widest mb-6">
            Contacto
          </h4>
          <div className="space-y-3">
            <a
              href={siteConfig.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#F5F0E8]/60 hover:text-[#C9A84C] transition-colors text-sm font-body"
            >
              <FiPhone className="text-[#C9A84C] flex-shrink-0" />
              {siteConfig.phone}
            </a>
            <div className="flex items-start gap-3 text-[#F5F0E8]/60 text-sm font-body">
              <FiMapPin className="text-[#C9A84C] flex-shrink-0 mt-0.5" />
              {siteConfig.address}
            </div>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading text-sm font-semibold text-[#F5F0E8] uppercase tracking-widest mb-6">
            Navegación
          </h4>
          <ul className="space-y-3">
            {['Inicio', 'Nosotros', 'Clases', 'Reseñas', 'Contacto'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace('ó', 'o')}`}
                  className="text-[#F5F0E8]/50 hover:text-[#C9A84C] transition-colors text-sm font-body"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-[#C9A84C]/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#F5F0E8]/30 text-xs font-body">
          © 2026 The Yoga Place · Panamá
        </p>
        <p className="text-[#F5F0E8]/30 text-xs font-body">
          Desarrollado por{' '}
          <a
            href="https://axiomsais.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A84C]/60 hover:text-[#C9A84C] transition-colors"
          >
            Axiom Software & AI Solutions
          </a>
        </p>
      </div>
    </footer>
  )
}
