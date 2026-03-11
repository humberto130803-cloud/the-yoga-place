import { motion } from 'framer-motion'
import { siteConfig } from '../siteConfig'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center overflow-hidden isolate"
      style={{ minHeight: '100dvh', WebkitTransform: 'translateZ(0)' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Deep overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0D0D1A]/70 via-[#0D0D1A]/50 to-[#0D0D1A]" />

      {/* Decorative gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-[#C9A84C] z-20" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[#C9A84C] text-xs md:text-sm font-body uppercase tracking-[0.3em] mb-8"
        >
          Centro de Yoga · Panamá
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-wide text-[#F5F0E8] mb-6"
        >
          Encuentra
          <br />
          <span className="text-[#C9A84C]">Tu Equilibrio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-[#F5F0E8]/70 font-body text-base md:text-lg font-light tracking-wide max-w-lg mx-auto mb-12"
        >
          Un espacio íntimo de transformación personal. Clases para todos los niveles con atención personalizada.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={siteConfig.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#C9A84C] text-[#0D0D1A] font-body font-semibold text-sm uppercase tracking-widest hover:bg-[#E2C97E] transition-all duration-300 shadow-lg shadow-[#C9A84C]/20"
          >
            Reserva Tu Clase
          </a>
          <a
            href="#clases"
            className="px-10 py-4 border border-[#F5F0E8]/30 text-[#F5F0E8]/80 font-body text-sm uppercase tracking-widest hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
          >
            Ver Clases
          </a>
        </motion.div>

        {/* Stars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 flex items-center justify-center gap-2"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#C9A84C] text-lg">★</span>
            ))}
          </div>
          <span className="text-[#F5F0E8]/60 text-sm font-body ml-2">5.0 en Google</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[#F5F0E8]/40 text-xs font-body uppercase tracking-widest">Descubre más</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10 bg-gradient-to-b from-[#C9A84C]/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
