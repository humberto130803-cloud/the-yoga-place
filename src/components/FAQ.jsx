import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '../siteConfig'
import { FiPlus, FiMinus } from 'react-icons/fi'

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border border-[#C9A84C]/15 hover:border-[#C9A84C]/30 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-heading text-sm md:text-base font-semibold text-[#F5F0E8] pr-4">{q}</span>
        <span className="text-[#C9A84C] flex-shrink-0">
          {open ? <FiMinus /> : <FiPlus />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[#F5F0E8]/65 font-body text-sm leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section className="py-24 md:py-36 bg-[#0D0D1A]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-xs font-body uppercase tracking-[0.3em] mb-4">
            Preguntas Frecuentes
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#F5F0E8]">
            ¿Tienes Dudas?
          </h2>
          <div className="w-12 h-px bg-[#C9A84C] mx-auto mt-4" />
        </motion.div>

        <div className="space-y-3">
          {siteConfig.faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
