import { motion } from 'framer-motion'
import { siteConfig } from '../siteConfig'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={siteConfig.whatsappMessage}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-white text-2xl" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </motion.a>
  )
}
