import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'

const Achievements = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Papan Prestasi</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Halaman ini sedang dalam pengembangan. Akan menampilkan prestasi murid dan upload karya.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Achievements

