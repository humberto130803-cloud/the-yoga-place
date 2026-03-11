import { motion } from 'framer-motion'
import { siteConfig } from '../siteConfig'

export default function CTA() {
  return (
    <section
      className="relative py-28 overflow-hidden isolate"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      />
      <div className="absolute inset-0 z-10 bg-[#0D0D1A]/80" />
      {/* Gold gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#C9A84C]/10 via-transparent to-[#C9A84C]/10" />

      <div className="relative z-20 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#C9A84C] mx-auto mb-8" />
          <p className="text-[#C9A84C] text-xs font-body uppercase tracking-[0.3em] mb-6">
            Comienza Hoy
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-[#F5F0E8] leading-tight mb-6">
            Tu Viaje <br />
            <span className="text-[#C9A84C]">Comienza Aquí</span>
          </h2>
          <p className="text-[#F5F0E8]/70 font-body text-base md:text-lg font-light mb-10 leading-relaxed">
            No importa si nunca has practicado yoga antes. Te esperamos con los brazos abiertos y la guía que necesitas para comenzar.
          </p>
          <a
            href={siteConfig.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-14 py-5 bg-[#C9A84C] text-[#0D0D1A] font-body font-bold text-sm uppercase tracking-widest hover:bg-[#E2C97E] transition-all duration-300 shadow-xl shadow-[#C9A84C]/20"
          >
            Reserva Tu Primera Clase
          </a>
          <p className="mt-6 text-[#F5F0E8]/40 text-xs font-body">
            Escríbenos al {siteConfig.phone} por WhatsApp
          </p>
        </motion.div>
      </div>
    </section>
  )
}
