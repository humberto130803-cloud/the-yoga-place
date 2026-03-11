import { motion } from 'framer-motion'
import { FiStar, FiHeart, FiUsers, FiAward } from 'react-icons/fi'

const stats = [
  { icon: FiStar, value: '5.0', label: 'Calificación Google' },
  { icon: FiHeart, value: '100%', label: 'Recomendado' },
  { icon: FiUsers, label: 'Grupos Pequeños', value: 'Íntimo' },
  { icon: FiAward, label: 'Todos los niveles', value: 'Expertos' },
]

export default function TrustBar() {
  return (
    <section className="bg-[#141428] border-y border-[#C9A84C]/20 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center gap-2"
          >
            <s.icon className="text-[#C9A84C] text-2xl mb-1" />
            <span className="font-heading text-2xl font-bold text-[#F5F0E8]">{s.value}</span>
            <span className="text-xs font-body uppercase tracking-widest text-[#F5F0E8]/50">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
