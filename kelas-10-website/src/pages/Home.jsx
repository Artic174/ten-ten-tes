import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Users, GraduationCap, Calendar, Trophy, Camera, Megaphone, 
  Heart, Briefcase, ArrowRight, Star, Target, Eye, Lightbulb 
} from 'lucide-react'
import guruPlaceholder from '../assets/guru_placeholder.png'

const Home = ({ quotes, currentQuote, setCurrentQuote }) => {
  // Auto-rotate quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [quotes.length, setCurrentQuote])

  const quickAccessItems = [
    { icon: Calendar, label: 'Jadwal', path: '/schedule', color: 'from-blue-500 to-blue-600' },
    { icon: Users, label: 'Murid', path: '/students', color: 'from-green-500 to-green-600' },
    { icon: Camera, label: 'Galeri', path: '/gallery', color: 'from-purple-500 to-purple-600' },
    { icon: Trophy, label: 'Prestasi', path: '/achievements', color: 'from-yellow-500 to-yellow-600' },
    { icon: GraduationCap, label: 'Guru', path: '/teachers', color: 'from-red-500 to-red-600' },
    { icon: Briefcase, label: 'Organisasi', path: '/organization', color: 'from-indigo-500 to-indigo-600' },
    { icon: Megaphone, label: 'Pengumuman', path: '/announcements', color: 'from-pink-500 to-pink-600' },
    { icon: Heart, label: 'Interaktif', path: '/interactive', color: 'from-rose-500 to-rose-600' }
  ]

  const teachers = [
    { name: 'Pak Ahmad', subject: 'Matematika', image: guruPlaceholder },
    { name: 'Bu Sari', subject: 'Bahasa Indonesia', image: guruPlaceholder },
    { name: 'Pak Budi', subject: 'Jaringan Komputer', image: guruPlaceholder },
    { name: 'Bu Dewi', subject: 'Pemrograman', image: guruPlaceholder },
    { name: 'Pak Eko', subject: 'Sistem Operasi', image: guruPlaceholder },
    { name: 'Bu Fitri', subject: 'Database', image: guruPlaceholder },
    { name: 'Pak Gani', subject: 'Hardware', image: guruPlaceholder },
    { name: 'Bu Hani', subject: 'Web Design', image: guruPlaceholder },
    { name: 'Pak Indra', subject: 'Keamanan Jaringan', image: guruPlaceholder },
    { name: 'Bu Joko', subject: 'Bahasa Inggris', image: guruPlaceholder },
    { name: 'Pak Kris', subject: 'Fisika', image: guruPlaceholder },
    { name: 'Bu Lina', subject: 'Kimia', image: guruPlaceholder },
    { name: 'Pak Manto', subject: 'Sejarah', image: guruPlaceholder },
    { name: 'Bu Nina', subject: 'PKN', image: guruPlaceholder },
    { name: 'Pak Oki', subject: 'Agama', image: guruPlaceholder },
    { name: 'Bu Putri', subject: 'Olahraga', image: guruPlaceholder },
    { name: 'Pak Qori', subject: 'Seni Budaya', image: guruPlaceholder }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Selamat Datang di
              <span className="text-yellow-400 block">Kelas 10.10 TKJ</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Teknik Komputer dan Jaringan - Keluarga besar 43 murid dan 17 guru yang solid
            </p>
          </motion.div>

          {/* Visi Misi Motto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
          >
            <div className="glass-card p-6">
              <Eye className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">VISI</h3>
              <p className="text-slate-300 text-sm">
                Menjadi kelas yang unggul dalam teknologi, berkarakter, dan berprestasi
              </p>
            </div>
            <div className="glass-card p-6">
              <Target className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">MISI</h3>
              <p className="text-slate-300 text-sm">
                Mengembangkan potensi siswa dalam bidang TKJ dengan pembelajaran berkualitas
              </p>
            </div>
            <div className="glass-card p-6">
              <Lightbulb className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">MOTTO</h3>
              <p className="text-slate-300 text-sm">
                "Bersama Membangun Masa Depan Digital"
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/students"
              className="inline-flex items-center space-x-2 bg-yellow-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              <span>Lihat Profil Kelas</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Wali Kelas */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Wali Kelas</h2>
            <div className="glass-card p-8 max-w-md mx-auto">
              <img
                src={guruPlaceholder}
                alt="Wali Kelas"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-yellow-400"
              />
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">Pak Wahyu Santoso</h3>
              <p className="text-slate-300 mb-2">Wali Kelas 10.10 TKJ</p>
              <p className="text-slate-400 text-sm mb-4">Mata Pelajaran: Jaringan Komputer</p>
              <div className="flex justify-center space-x-4 text-sm">
                <span className="text-slate-300">📧 wahyu.santoso@sekolah.ac.id</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Daftar Guru */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Daftar Guru & Mata Pelajaran</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              17 guru berpengalaman yang siap membimbing perjalanan belajar kami
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {teachers.map((teacher, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-4 text-center hover:bg-slate-700/50 transition-colors"
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-yellow-400/50"
                />
                <h4 className="text-sm font-semibold text-yellow-400 mb-1">{teacher.name}</h4>
                <p className="text-xs text-slate-300">{teacher.subject}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Akses Cepat</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Navigasi mudah ke semua fitur website kelas
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickAccessItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="block glass-card p-6 text-center hover:bg-slate-700/50 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold group-hover:text-yellow-400 transition-colors">
                      {item.label}
                    </h3>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quotes Motivasi */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Inspirasi Hari Ini</h2>
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-xl text-slate-200 mb-4 italic">
                  "{quotes[currentQuote].text}"
                </blockquote>
                <cite className="text-yellow-400 font-semibold">
                  - {quotes[currentQuote].author}
                </cite>
              </motion.div>
              <div className="flex justify-center space-x-2 mt-6">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuote(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentQuote ? 'bg-yellow-400' : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

