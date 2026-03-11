import { motion } from 'framer-motion'
import { siteConfig } from '../siteConfig'

export default function Reviews() {
  return (
    <section
      id="reseñas"
      className="relative py-24 md:py-36 overflow-hidden isolate"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-10 bg-[#0D0D1A]/90" />

      <div className="relative z-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-xs font-body uppercase tracking-[0.3em] mb-4">
            Lo Que Dicen
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-4">
            Voces de Nuestra <br />
            <span className="text-[#C9A84C]">Comunidad</span>
          </h2>
          <div className="w-12 h-px bg-[#C9A84C] mx-auto mb-4" />
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#C9A84C] text-xl">★</span>
            ))}
            <span className="text-[#F5F0E8]/60 font-body text-sm ml-2">5.0 en Google · 100% recomendado</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#141428] border border-[#C9A84C]/15 p-8 relative"
            >
              {/* Giant quote */}
              <div className="absolute top-4 right-6 font-heading text-7xl text-[#C9A84C]/10 leading-none select-none">
                "
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <span key={j} className="text-[#C9A84C] text-sm">★</span>
                ))}
              </div>
              <p className="text-[#F5F0E8]/75 font-body text-sm leading-relaxed italic mb-6">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center">
                  <span className="text-[#C9A84C] font-heading text-sm font-bold">
                    {review.name[0]}
                  </span>
                </div>
                <span className="text-[#F5F0E8] font-body text-sm font-semibold">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
