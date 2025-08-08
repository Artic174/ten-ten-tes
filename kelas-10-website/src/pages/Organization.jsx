import { motion } from 'framer-motion'
import { Crown, FileText, DollarSign, Shield, Trash2, Heart, Wrench, Users } from 'lucide-react'
import muridPlaceholder from '../assets/murid_placeholder.png'

const Organization = () => {
  const organizationStructure = [
    {
      position: 'Ketua Kelas',
      name: 'Ahmad Rizki',
      icon: Crown,
      color: 'from-yellow-500 to-yellow-600',
      responsibilities: [
        'Memimpin dan mengkoordinasikan kegiatan kelas',
        'Menjadi penghubung antara siswa dan guru',
        'Mengorganisir rapat kelas dan kegiatan bersama',
        'Bertanggung jawab atas kedisiplinan kelas'
      ]
    },
    {
      position: 'Sekretaris',
      name: 'Siti Aminah',
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      responsibilities: [
        'Mencatat dan mendokumentasikan kegiatan kelas',
        'Mengelola administrasi kelas',
        'Membuat laporan kegiatan kelas',
        'Menyimpan arsip dokumen penting kelas'
      ]
    },
    {
      position: 'Bendahara',
      name: 'Budi Santoso',
      icon: DollarSign,
      color: 'from-green-500 to-green-600',
      responsibilities: [
        'Mengelola keuangan kelas',
        'Mencatat pemasukan dan pengeluaran',
        'Membuat laporan keuangan berkala',
        'Mengkoordinasikan iuran kelas'
      ]
    },
    {
      position: 'Koordinator Keamanan',
      name: 'Dewi Lestari',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      responsibilities: [
        'Menjaga keamanan dan ketertiban kelas',
        'Mengawasi barang-barang berharga',
        'Melaporkan kejadian yang mencurigakan',
        'Mengkoordinasikan piket keamanan'
      ]
    },
    {
      position: 'Koordinator Kebersihan',
      name: 'Eko Prasetyo',
      icon: Trash2,
      color: 'from-teal-500 to-teal-600',
      responsibilities: [
        'Mengatur jadwal piket kebersihan',
        'Mengawasi kebersihan ruang kelas',
        'Mengingatkan tugas piket harian',
        'Mengkoordinasikan kerja bakti kelas'
      ]
    },
    {
      position: 'Koordinator Keagamaan',
      name: 'Fitri Handayani',
      icon: Heart,
      color: 'from-purple-500 to-purple-600',
      responsibilities: [
        'Mengkoordinasikan kegiatan keagamaan',
        'Mengingatkan waktu sholat',
        'Mengorganisir kajian dan doa bersama',
        'Memfasilitasi kegiatan rohani kelas'
      ]
    },
    {
      position: 'Koordinator Peralatan',
      name: 'Gani Wijaya',
      icon: Wrench,
      color: 'from-orange-500 to-orange-600',
      responsibilities: [
        'Mengelola inventaris peralatan kelas',
        'Mengawasi penggunaan fasilitas kelas',
        'Melaporkan kerusakan peralatan',
        'Mengkoordinasikan pemeliharaan fasilitas'
      ]
    }
  ]

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Struktur Organisasi Kelas</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Struktur kepemimpinan Kelas 10.10 TKJ yang solid dan terorganisir untuk menciptakan lingkungan belajar yang kondusif
          </p>
        </motion.div>

        {/* Organization Chart */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Bagan Organisasi</h2>
            
            {/* Ketua Kelas - Top Level */}
            <div className="flex justify-center mb-8">
              <div className="glass-card p-6 max-w-xs">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-4 flex items-center justify-center">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-1">Ketua Kelas</h3>
                <p className="text-white font-medium">Ahmad Rizki</p>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="w-px h-8 bg-slate-600 mx-auto mb-8"></div>

            {/* Other Positions - Second Level */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {organizationStructure.slice(1).map((member, index) => {
                const Icon = member.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="glass-card p-6 text-center"
                  >
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${member.color} mx-auto mb-4 flex items-center justify-center`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-yellow-400 mb-1">{member.position}</h3>
                    <p className="text-white font-medium text-sm">{member.name}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Detailed Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-yellow-400 text-center mb-8">Tugas dan Tanggung Jawab</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {organizationStructure.map((member, index) => {
              const Icon = member.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={muridPlaceholder}
                      alt={member.name}
                      className="w-12 h-12 rounded-full border-2 border-yellow-400/50"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-400">{member.position}</h3>
                      <p className="text-white">{member.name}</p>
                    </div>
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${member.color} flex items-center justify-center ml-auto`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-slate-300 mb-3">Tugas dan Tanggung Jawab:</h4>
                    <ul className="space-y-2">
                      {member.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-slate-300 text-sm flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Class Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass-card p-6 text-center">
            <Users className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-2">7</h3>
            <p className="text-slate-300">Posisi Kepemimpinan</p>
          </div>
          <div className="glass-card p-6 text-center">
            <Crown className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-2">1</h3>
            <p className="text-slate-300">Ketua Kelas</p>
          </div>
          <div className="glass-card p-6 text-center">
            <Heart className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
            <p className="text-slate-300">Komitmen Pengurus</p>
          </div>
        </motion.div>

        {/* Vision Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 glass-card p-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 text-center mb-8">Visi Organisasi Kelas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Visi Pengurus</h3>
              <p className="text-slate-300 leading-relaxed">
                Menciptakan lingkungan kelas yang kondusif, harmonis, dan produktif untuk mendukung 
                prestasi akademik dan non-akademik seluruh anggota kelas 10.10 TKJ.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Misi Pengurus</h3>
              <ul className="space-y-2">
                <li className="text-slate-300 text-sm flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Memfasilitasi komunikasi yang baik antar siswa dan guru</span>
                </li>
                <li className="text-slate-300 text-sm flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Mengelola kegiatan kelas secara terorganisir dan efektif</span>
                </li>
                <li className="text-slate-300 text-sm flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Mendorong partisipasi aktif seluruh anggota kelas</span>
                </li>
                <li className="text-slate-300 text-sm flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Menjaga kebersamaan dan solidaritas kelas</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Organization

