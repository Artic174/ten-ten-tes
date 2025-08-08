import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

const Contact = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Phone className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Kontak</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Halaman ini sedang dalam pengembangan. Akan menampilkan form kontak guru dan link WhatsApp grup.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact

