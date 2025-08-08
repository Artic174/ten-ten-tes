import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Interactive = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Heart className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Fitur Interaktif</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Halaman ini sedang dalam pengembangan. Akan menampilkan polling hiburan dan ruang aspirasi/curhat.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Interactive

