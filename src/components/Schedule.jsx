import { motion } from 'framer-motion'
import { siteConfig } from '../siteConfig'
import { FiClock, FiMapPin, FiPhone } from 'react-icons/fi'

export default function Schedule() {
  return (
    <section id="contacto" className="py-24 md:py-36 bg-[#141428]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-xs font-body uppercase tracking-[0.3em] mb-4">
            Dónde Encontrarnos
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#F5F0E8]">
            Horario <span className="text-[#C9A84C]">&</span> Contacto
          </h2>
          <div className="w-12 h-px bg-[#C9A84C] mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FiClock className="text-[#C9A84C] text-xl" />
              <h3 className="font-heading text-xl font-semibold text-[#F5F0E8]">Horario de Clases</h3>
            </div>

            <div className="space-y-3">
              {siteConfig.schedule.map((item, i) => (
                <motion.div
                  key={item.day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex justify-between items-center py-4 px-6 border border-[#C9A84C]/15 hover:border-[#C9A84C]/40 transition-colors"
                >
                  <span className="font-heading text-sm font-semibold text-[#F5F0E8]">{item.day}</span>
                  <span className="text-[#C9A84C] font-body text-sm">{item.hours}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-[#C9A84C]/10 border border-[#C9A84C]/20">
              <p className="text-[#F5F0E8]/70 text-xs font-body leading-relaxed">
                <span className="text-[#C9A84C] font-semibold">Nota:</span> Para confirmar el horario completo de la semana, contáctanos directamente por WhatsApp.
              </p>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4 p-6 border border-[#C9A84C]/15">
              <FiMapPin className="text-[#C9A84C] text-xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-heading text-sm font-semibold text-[#F5F0E8] mb-1">Ubicación</h4>
                <p className="text-[#F5F0E8]/60 font-body text-sm">{siteConfig.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 border border-[#C9A84C]/15">
              <FiPhone className="text-[#C9A84C] text-xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-heading text-sm font-semibold text-[#F5F0E8] mb-1">Teléfono / WhatsApp</h4>
                <p className="text-[#F5F0E8]/60 font-body text-sm">{siteConfig.phone}</p>
              </div>
            </div>

            {/* Map embed */}
            <div className="w-full h-48 overflow-hidden border border-[#C9A84C]/15">
              <iframe
                title="Mapa The Yoga Place"
                src="https://maps.google.com/maps?q=Paseo+Drive+Panama+City+Panama&output=embed"
                className="w-full h-full grayscale opacity-80"
                loading="lazy"
              />
            </div>

            <a
              href={siteConfig.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 bg-[#25D366] text-white font-body font-semibold text-sm uppercase tracking-widest hover:bg-[#1ebe5d] transition-colors"
            >
              Escríbenos por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
