import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, User, Star, Trophy, Heart, X } from 'lucide-react'
import muridPlaceholder from '../assets/murid_placeholder.png'

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStudent, setSelectedStudent] = useState(null)

  // Data 43 murid (contoh data)
  const students = [
    { id: 1, name: 'Ahmad Rizki', nickname: 'Rizki', funFact: 'Jago main game MOBA', achievements: ['Juara 1 Lomba Programming', 'Best Student 2024'], hobby: 'Gaming, Coding' },
    { id: 2, name: 'Siti Aminah', nickname: 'Ami', funFact: 'Suka bikin kue', achievements: ['Juara 2 Lomba Web Design'], hobby: 'Baking, Design' },
    { id: 3, name: 'Budi Santoso', nickname: 'Budi', funFact: 'Koleksi action figure', achievements: ['Juara 3 Lomba Jaringan'], hobby: 'Collecting, Reading' },
    { id: 4, name: 'Dewi Lestari', nickname: 'Dewi', funFact: 'Bisa main 5 alat musik', achievements: ['Best Musician'], hobby: 'Music, Art' },
    { id: 5, name: 'Eko Prasetyo', nickname: 'Eko', funFact: 'Pernah ketemu artis terkenal', achievements: ['Social Media Expert'], hobby: 'Photography' },
    { id: 6, name: 'Fitri Handayani', nickname: 'Fitri', funFact: 'Jago masak rendang', achievements: ['Cooking Champion'], hobby: 'Cooking, Travel' },
    { id: 7, name: 'Gani Wijaya', nickname: 'Gani', funFact: 'Punya 10 kucing', achievements: ['Animal Lover Award'], hobby: 'Pet Care' },
    { id: 8, name: 'Hani Putri', nickname: 'Hani', funFact: 'Bisa dance K-Pop', achievements: ['Dance Competition Winner'], hobby: 'Dancing, K-Pop' },
    { id: 9, name: 'Indra Gunawan', nickname: 'Indra', funFact: 'Jago main catur', achievements: ['Chess Master'], hobby: 'Chess, Strategy Games' },
    { id: 10, name: 'Joko Susilo', nickname: 'Joko', funFact: 'Suka traveling', achievements: ['Travel Blogger'], hobby: 'Travel, Writing' },
    { id: 11, name: 'Krisna Bayu', nickname: 'Kris', funFact: 'Bisa juggling', achievements: ['Talent Show Winner'], hobby: 'Juggling, Magic' },
    { id: 12, name: 'Lina Marlina', nickname: 'Lina', funFact: 'Koleksi buku 500+', achievements: ['Reading Champion'], hobby: 'Reading, Writing' },
    { id: 13, name: 'Manto Suryadi', nickname: 'Manto', funFact: 'Jago main basket', achievements: ['Basketball MVP'], hobby: 'Basketball, Sports' },
    { id: 14, name: 'Nina Sari', nickname: 'Nina', funFact: 'Bisa 4 bahasa', achievements: ['Language Expert'], hobby: 'Languages, Culture' },
    { id: 15, name: 'Oki Pratama', nickname: 'Oki', funFact: 'Punya band sendiri', achievements: ['Band Leader'], hobby: 'Music, Performance' },
    { id: 16, name: 'Putri Ayu', nickname: 'Putri', funFact: 'Jago makeup', achievements: ['Beauty Expert'], hobby: 'Makeup, Fashion' },
    { id: 17, name: 'Qori Rahman', nickname: 'Qori', funFact: 'Hafal Al-Quran', achievements: ['Quran Recitation Winner'], hobby: 'Religion, Teaching' },
    { id: 18, name: 'Rina Wati', nickname: 'Rina', funFact: 'Suka nanam tanaman', achievements: ['Green Thumb Award'], hobby: 'Gardening, Nature' },
    { id: 19, name: 'Sandi Kurnia', nickname: 'Sandi', funFact: 'Jago edit video', achievements: ['Video Editor Pro'], hobby: 'Video Editing, Content' },
    { id: 20, name: 'Tina Rahayu', nickname: 'Tina', funFact: 'Bisa melukis realistis', achievements: ['Art Competition Winner'], hobby: 'Painting, Art' },
    { id: 21, name: 'Udin Setiawan', nickname: 'Udin', funFact: 'Koleksi sepatu 50 pasang', achievements: ['Fashion Icon'], hobby: 'Fashion, Sneakers' },
    { id: 22, name: 'Vina Anggraini', nickname: 'Vina', funFact: 'Jago main piano', achievements: ['Piano Virtuoso'], hobby: 'Piano, Classical Music' },
    { id: 23, name: 'Wawan Hidayat', nickname: 'Wawan', funFact: 'Bisa repair HP', achievements: ['Tech Repair Expert'], hobby: 'Electronics, Repair' },
    { id: 24, name: 'Xena Pratiwi', nickname: 'Xena', funFact: 'Suka cosplay', achievements: ['Cosplay Champion'], hobby: 'Cosplay, Anime' },
    { id: 25, name: 'Yudi Hermawan', nickname: 'Yudi', funFact: 'Jago main gitar', achievements: ['Guitar Hero'], hobby: 'Guitar, Rock Music' },
    { id: 26, name: 'Zara Amelia', nickname: 'Zara', funFact: 'Bisa balet', achievements: ['Ballet Dancer'], hobby: 'Ballet, Dance' },
    { id: 27, name: 'Andi Wijaya', nickname: 'Andi', funFact: 'Suka otomotif', achievements: ['Mechanic Expert'], hobby: 'Cars, Motorcycles' },
    { id: 28, name: 'Bella Safitri', nickname: 'Bella', funFact: 'Jago public speaking', achievements: ['Debate Champion'], hobby: 'Public Speaking, Debate' },
    { id: 29, name: 'Citra Dewi', nickname: 'Citra', funFact: 'Bisa jahit', achievements: ['Fashion Designer'], hobby: 'Sewing, Fashion Design' },
    { id: 30, name: 'Dani Pratama', nickname: 'Dani', funFact: 'Jago main drum', achievements: ['Drummer of the Year'], hobby: 'Drums, Music' },
    { id: 31, name: 'Evi Susanti', nickname: 'Evi', funFact: 'Suka fotografi', achievements: ['Photography Contest Winner'], hobby: 'Photography, Art' },
    { id: 32, name: 'Fajar Ramadhan', nickname: 'Fajar', funFact: 'Bisa parkour', achievements: ['Parkour Expert'], hobby: 'Parkour, Extreme Sports' },
    { id: 33, name: 'Gita Permata', nickname: 'Gita', funFact: 'Jago menyanyi', achievements: ['Singing Competition Winner'], hobby: 'Singing, Music' },
    { id: 34, name: 'Hendra Saputra', nickname: 'Hendra', funFact: 'Suka main skateboard', achievements: ['Skateboard Pro'], hobby: 'Skateboarding, Sports' },
    { id: 35, name: 'Ika Rahmawati', nickname: 'Ika', funFact: 'Bisa memasak 100 resep', achievements: ['Master Chef Junior'], hobby: 'Cooking, Culinary' },
    { id: 36, name: 'Jihan Aulia', nickname: 'Jihan', funFact: 'Jago main badminton', achievements: ['Badminton Champion'], hobby: 'Badminton, Sports' },
    { id: 37, name: 'Kevin Ananda', nickname: 'Kevin', funFact: 'Bisa coding 10 bahasa', achievements: ['Programming Genius'], hobby: 'Programming, Tech' },
    { id: 38, name: 'Laras Sati', nickname: 'Laras', funFact: 'Suka menulis puisi', achievements: ['Poet of the Year'], hobby: 'Poetry, Literature' },
    { id: 39, name: 'Maya Sari', nickname: 'Maya', funFact: 'Jago main voli', achievements: ['Volleyball MVP'], hobby: 'Volleyball, Team Sports' },
    { id: 40, name: 'Nanda Pratama', nickname: 'Nanda', funFact: 'Bisa beatbox', achievements: ['Beatbox Champion'], hobby: 'Beatbox, Music' },
    { id: 41, name: 'Oscar Ramadhan', nickname: 'Oscar', funFact: 'Suka main rubik', achievements: ['Rubik Cube Master'], hobby: 'Puzzle, Logic Games' },
    { id: 42, name: 'Prita Maharani', nickname: 'Prita', funFact: 'Jago desain grafis', achievements: ['Graphic Design Winner'], hobby: 'Design, Digital Art' },
    { id: 43, name: 'Rizal Fauzi', nickname: 'Rizal', funFact: 'Bisa main 3 olahraga', achievements: ['Multi-Sport Athlete'], hobby: 'Sports, Fitness' }
  ]

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.nickname.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
          <h1 className="text-4xl font-bold text-white mb-4">Daftar Murid</h1>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            43 murid hebat Kelas 10.10 TKJ dengan berbagai bakat dan prestasi yang membanggakan
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Cari nama murid..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>
        </motion.div>

        {/* Students Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {filteredStudents.map((student, index) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card p-4 text-center hover:bg-slate-700/50 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedStudent(student)}
            >
              <div className="relative">
                <img
                  src={muridPlaceholder}
                  alt={student.name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 border-2 border-yellow-400/50 group-hover:border-yellow-400 transition-colors"
                />
                {student.achievements.length > 0 && (
                  <div className="absolute -top-1 -right-1 bg-yellow-400 text-slate-900 rounded-full p-1">
                    <Trophy className="h-3 w-3" />
                  </div>
                )}
              </div>
              <h3 className="text-sm font-semibold text-yellow-400 mb-1 group-hover:text-yellow-300 transition-colors">
                {student.name}
              </h3>
              <p className="text-xs text-slate-300 mb-2">"{student.nickname}"</p>
              <p className="text-xs text-slate-400 line-clamp-2">{student.funFact}</p>
            </motion.div>
          ))}
        </div>

        {/* Student Detail Modal */}
        {selectedStudent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStudent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-yellow-400">Profil Murid</h2>
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="text-center mb-6">
                <img
                  src={muridPlaceholder}
                  alt={selectedStudent.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-yellow-400"
                />
                <h3 className="text-lg font-semibold text-white mb-1">{selectedStudent.name}</h3>
                <p className="text-slate-300 mb-2">Panggilan: "{selectedStudent.nickname}"</p>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <h4 className="text-sm font-semibold text-yellow-400">Fun Fact</h4>
                  </div>
                  <p className="text-slate-300 text-sm">{selectedStudent.funFact}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Heart className="h-4 w-4 text-yellow-400" />
                    <h4 className="text-sm font-semibold text-yellow-400">Hobi</h4>
                  </div>
                  <p className="text-slate-300 text-sm">{selectedStudent.hobby}</p>
                </div>

                {selectedStudent.achievements.length > 0 && (
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Trophy className="h-4 w-4 text-yellow-400" />
                      <h4 className="text-sm font-semibold text-yellow-400">Prestasi</h4>
                    </div>
                    <ul className="space-y-1">
                      {selectedStudent.achievements.map((achievement, index) => (
                        <li key={index} className="text-slate-300 text-sm flex items-center space-x-2">
                          <span className="w-1 h-1 bg-yellow-400 rounded-full"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass-card p-6 text-center">
            <User className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-2">43</h3>
            <p className="text-slate-300">Total Murid</p>
          </div>
          <div className="glass-card p-6 text-center">
            <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-2">25+</h3>
            <p className="text-slate-300">Prestasi Diraih</p>
          </div>
          <div className="glass-card p-6 text-center">
            <Star className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
            <p className="text-slate-300">Siswa Berprestasi</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Students

