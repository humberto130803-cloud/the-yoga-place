import { motion } from 'framer-motion'
import { siteConfig } from '../siteConfig'
import { GiLotusFlower } from 'react-icons/gi'
import { FiSun, FiStar, FiHeart } from 'react-icons/fi'

const iconMap = {
  lotus: GiLotusFlower,
  seedling: FiSun,
  star: FiStar,
  heart: FiHeart,
}

const serviceImages = [
  'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=600&q=80',
  'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&q=80',
  'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80',
  'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=600&q=80',
]

export default function Services() {
  return (
    <section id="clases" className="py-24 md:py-36 bg-[#0D0D1A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#C9A84C] text-xs font-body uppercase tracking-[0.3em] mb-4">
            Lo Que Ofrecemos
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-4">
            Nuestras Clases
          </h2>
          <div className="w-12 h-px bg-[#C9A84C] mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon] || FiStar
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={serviceImages[i]}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D1A] via-[#0D0D1A]/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 border border-[#C9A84C]/50 flex items-center justify-center">
                      <Icon className="text-[#C9A84C] text-xl" />
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="bg-[#141428] border border-[#C9A84C]/10 group-hover:border-[#C9A84C]/30 transition-colors p-6">
                  <h3 className="font-heading text-lg font-semibold text-[#F5F0E8] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#F5F0E8]/60 font-body text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 w-8 h-px bg-[#C9A84C] group-hover:w-16 transition-all duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href={siteConfig.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-[#C9A84C] text-[#0D0D1A] font-body font-semibold text-sm uppercase tracking-widest hover:bg-[#E2C97E] transition-all duration-300"
          >
            Consultar Horarios
          </a>
        </motion.div>
      </div>
    </section>
  )
}
