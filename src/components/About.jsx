import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative py-24 md:py-36 overflow-hidden isolate"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1562088287-bde35a1ea917?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-10 bg-[#0D0D1A]/85" />

      <div className="relative z-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: decorative block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80"
              alt="Clase de yoga"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A]/60 to-transparent" />
          </div>
          {/* Gold accent box */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#C9A84C]/40 hidden md:block" />
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#C9A84C]/10 hidden md:block" />
        </motion.div>

        {/* Right: text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-[#C9A84C] text-xs font-body uppercase tracking-[0.3em]">
            Nuestro Espacio
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#F5F0E8] leading-tight">
            Un Santuario de <br />
            <span className="text-[#C9A84C]">Transformación</span>
          </h2>
          <div className="w-12 h-px bg-[#C9A84C]" />
          <p className="text-[#F5F0E8]/70 font-body text-base leading-relaxed">
            En The Yoga Place, creemos que el yoga es para todos. Nuestro estudio boutique en Panamá ofrece un ambiente íntimo donde cada estudiante recibe atención personalizada, sin importar su nivel de experiencia.
          </p>
          <p className="text-[#F5F0E8]/70 font-body text-base leading-relaxed">
            Desde principiantes que dan sus primeros pasos, hasta practicantes avanzados en busca de profundizar su práctica — aquí encontrarás tu camino. La energía de nuestro espacio te envuelve desde el primer momento.
          </p>

          <div className="flex gap-8 pt-4">
            <div>
              <span className="block font-heading text-3xl font-bold text-[#C9A84C]">5★</span>
              <span className="text-xs font-body uppercase tracking-widest text-[#F5F0E8]/50">Calificación</span>
            </div>
            <div className="w-px bg-[#C9A84C]/20" />
            <div>
              <span className="block font-heading text-3xl font-bold text-[#8DAA91]">100%</span>
              <span className="text-xs font-body uppercase tracking-widest text-[#F5F0E8]/50">Recomendado</span>
            </div>
            <div className="w-px bg-[#C9A84C]/20" />
            <div>
              <span className="block font-heading text-3xl font-bold text-[#F5F0E8]">∞</span>
              <span className="text-xs font-body uppercase tracking-widest text-[#F5F0E8]/50">Niveles</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
