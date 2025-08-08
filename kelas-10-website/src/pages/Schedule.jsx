import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Calendar, BookOpen, User, Download, Upload, FileText } from 'lucide-react'

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('schedule')

  const schedule = {
    'Senin': [
      { time: '06:30-07:30', subject: 'Matematika', teacher: 'Pak Ahmad', room: '10.10' },
      { time: '07:30-08:30', subject: 'Bahasa Indonesia', teacher: 'Bu Sari', room: '10.10' },
      { time: '08:30-09:30', subject: 'Jaringan Komputer', teacher: 'Pak Budi', room: 'Lab TKJ' },
      { time: '09:30-10:00', subject: 'ISTIRAHAT', teacher: '-', room: '-' },
      { time: '10:00-11:00', subject: 'Pemrograman', teacher: 'Bu Dewi', room: 'Lab Komputer' },
      { time: '11:00-12:00', subject: 'Sistem Operasi', teacher: 'Pak Eko', room: 'Lab TKJ' },
      { time: '12:00-13:00', subject: 'ISHOMA', teacher: '-', room: '-' },
      { time: '13:00-14:00', subject: 'Database', teacher: 'Bu Fitri', room: 'Lab Komputer' },
      { time: '14:00-15:00', subject: 'Hardware', teacher: 'Pak Gani', room: 'Lab TKJ' }
    ],
    'Selasa': [
      { time: '06:30-07:30', subject: 'Bahasa Inggris', teacher: 'Bu Joko', room: '10.10' },
      { time: '07:30-08:30', subject: 'Fisika', teacher: 'Pak Kris', room: '10.10' },
      { time: '08:30-09:30', subject: 'Web Design', teacher: 'Bu Hani', room: 'Lab Komputer' },
      { time: '09:30-10:00', subject: 'ISTIRAHAT', teacher: '-', room: '-' },
      { time: '10:00-11:00', subject: 'Keamanan Jaringan', teacher: 'Pak Indra', room: 'Lab TKJ' },
      { time: '11:00-12:00', subject: 'Matematika', teacher: 'Pak Ahmad', room: '10.10' },
      { time: '12:00-13:00', subject: 'ISHOMA', teacher: '-', room: '-' },
      { time: '13:00-14:00', subject: 'Pemrograman', teacher: 'Bu Dewi', room: 'Lab Komputer' },
      { time: '14:00-15:00', subject: 'Praktikum TKJ', teacher: 'Pak Budi', room: 'Lab TKJ' }
    ],
    'Rabu': [
      { time: '06:30-07:30', subject: 'Kimia', teacher: 'Bu Lina', room: '10.10' },
      { time: '07:30-08:30', subject: 'Sejarah', teacher: 'Pak Manto', room: '10.10' },
      { time: '08:30-09:30', subject: 'Database', teacher: 'Bu Fitri', room: 'Lab Komputer' },
      { time: '09:30-10:00', subject: 'ISTIRAHAT', teacher: '-', room: '-' },
      { time: '10:00-11:00', subject: 'Hardware', teacher: 'Pak Gani', room: 'Lab TKJ' },
      { time: '11:00-12:00', subject: 'Jaringan Komputer', teacher: 'Pak Budi', room: 'Lab TKJ' },
      { time: '12:00-13:00', subject: 'ISHOMA', teacher: '-', room: '-' },
      { time: '13:00-14:00', subject: 'Web Design', teacher: 'Bu Hani', room: 'Lab Komputer' },
      { time: '14:00-15:00', subject: 'PKN', teacher: 'Bu Nina', room: '10.10' }
    ],
    'Kamis': [
      { time: '06:30-07:30', subject: 'Agama', teacher: 'Pak Oki', room: '10.10' },
      { time: '07:30-08:30', subject: 'Olahraga', teacher: 'Bu Putri', room: 'Lapangan' },
      { time: '08:30-09:30', subject: 'Sistem Operasi', teacher: 'Pak Eko', room: 'Lab TKJ' },
      { time: '09:30-10:00', subject: 'ISTIRAHAT', teacher: '-', room: '-' },
      { time: '10:00-11:00', subject: 'Keamanan Jaringan', teacher: 'Pak Indra', room: 'Lab TKJ' },
      { time: '11:00-12:00', subject: 'Bahasa Indonesia', teacher: 'Bu Sari', room: '10.10' },
      { time: '12:00-13:00', subject: 'ISHOMA', teacher: '-', room: '-' },
      { time: '13:00-14:00', subject: 'Praktikum TKJ', teacher: 'Pak Budi', room: 'Lab TKJ' },
      { time: '14:00-15:00', subject: 'Seni Budaya', teacher: 'Pak Qori', room: '10.10' }
    ],
    'Jumat': [
      { time: '06:30-07:30', subject: 'Matematika', teacher: 'Pak Ahmad', room: '10.10' },
      { time: '07:30-08:30', subject: 'Bahasa Inggris', teacher: 'Bu Joko', room: '10.10' },
      { time: '08:30-09:30', subject: 'Pemrograman', teacher: 'Bu Dewi', room: 'Lab Komputer' },
      { time: '09:30-10:00', subject: 'ISTIRAHAT', teacher: '-', room: '-' },
      { time: '10:00-11:00', subject: 'Database', teacher: 'Bu Fitri', room: 'Lab Komputer' },
      { time: '11:00-11:30', subject: 'JUMAT', teacher: '-', room: '-' },
      { time: '13:00-14:00', subject: 'Hardware', teacher: 'Pak Gani', room: 'Lab TKJ' },
      { time: '14:00-15:00', subject: 'Web Design', teacher: 'Bu Hani', room: 'Lab Komputer' }
    ]
  }

  const assignments = [
    {
      id: 1,
      subject: 'Jaringan Komputer',
      title: 'Konfigurasi Router Cisco',
      teacher: 'Pak Budi',
      dueDate: '2025-02-05',
      status: 'pending',
      description: 'Membuat konfigurasi dasar router Cisco dengan protokol OSPF'
    },
    {
      id: 2,
      subject: 'Pemrograman',
      title: 'Aplikasi CRUD PHP',
      teacher: 'Bu Dewi',
      dueDate: '2025-02-08',
      status: 'submitted',
      description: 'Membuat aplikasi CRUD sederhana menggunakan PHP dan MySQL'
    },
    {
      id: 3,
      subject: 'Web Design',
      title: 'Landing Page Responsive',
      teacher: 'Bu Hani',
      dueDate: '2025-02-10',
      status: 'pending',
      description: 'Desain dan implementasi landing page yang responsive'
    },
    {
      id: 4,
      subject: 'Database',
      title: 'ERD Sistem Perpustakaan',
      teacher: 'Bu Fitri',
      dueDate: '2025-02-12',
      status: 'pending',
      description: 'Membuat Entity Relationship Diagram untuk sistem perpustakaan'
    }
  ]

  const materials = [
    {
      id: 1,
      subject: 'Jaringan Komputer',
      title: 'Materi OSI Layer',
      teacher: 'Pak Budi',
      type: 'PDF',
      size: '2.5 MB',
      uploadDate: '2025-01-28'
    },
    {
      id: 2,
      subject: 'Pemrograman',
      title: 'Tutorial PHP Dasar',
      teacher: 'Bu Dewi',
      type: 'Video',
      size: '45 MB',
      uploadDate: '2025-01-27'
    },
    {
      id: 3,
      subject: 'Web Design',
      title: 'CSS Grid Layout',
      teacher: 'Bu Hani',
      type: 'PDF',
      size: '1.8 MB',
      uploadDate: '2025-01-26'
    },
    {
      id: 4,
      subject: 'Database',
      title: 'Normalisasi Database',
      teacher: 'Bu Fitri',
      type: 'PDF',
      size: '3.2 MB',
      uploadDate: '2025-01-25'
    }
  ]

  const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Jadwal & Akademik</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Jadwal pelajaran, tugas, dan materi pembelajaran Kelas 10.10 TKJ
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="glass-card p-1 flex space-x-1">
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-6 py-2 rounded-lg transition-all duration-200 ${
                activeTab === 'schedule'
                  ? 'bg-yellow-400 text-slate-900 font-medium'
                  : 'text-slate-300 hover:text-yellow-400'
              }`}
            >
              <Calendar className="h-4 w-4 inline mr-2" />
              Jadwal
            </button>
            <button
              onClick={() => setActiveTab('assignments')}
              className={`px-6 py-2 rounded-lg transition-all duration-200 ${
                activeTab === 'assignments'
                  ? 'bg-yellow-400 text-slate-900 font-medium'
                  : 'text-slate-300 hover:text-yellow-400'
              }`}
            >
              <BookOpen className="h-4 w-4 inline mr-2" />
              Tugas
            </button>
            <button
              onClick={() => setActiveTab('materials')}
              className={`px-6 py-2 rounded-lg transition-all duration-200 ${
                activeTab === 'materials'
                  ? 'bg-yellow-400 text-slate-900 font-medium'
                  : 'text-slate-300 hover:text-yellow-400'
              }`}
            >
              <FileText className="h-4 w-4 inline mr-2" />
              Materi
            </button>
          </div>
        </motion.div>

        {/* Schedule Tab */}
        {activeTab === 'schedule' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {days.map((day, dayIndex) => (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
                  className="glass-card p-4"
                >
                  <h3 className="text-lg font-semibold text-yellow-400 mb-4 text-center">
                    {day}
                  </h3>
                  <div className="space-y-3">
                    {schedule[day].map((item, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg ${
                          item.subject === 'ISTIRAHAT' || item.subject === 'ISHOMA' || item.subject === 'JUMAT'
                            ? 'bg-slate-700/30 border border-slate-600/50'
                            : 'bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-colors'
                        }`}
                      >
                        <div className="flex items-center space-x-2 mb-1">
                          <Clock className="h-3 w-3 text-yellow-400" />
                          <span className="text-xs text-slate-300">{item.time}</span>
                        </div>
                        <h4 className={`text-sm font-medium mb-1 ${
                          item.subject === 'ISTIRAHAT' || item.subject === 'ISHOMA' || item.subject === 'JUMAT'
                            ? 'text-slate-400'
                            : 'text-white'
                        }`}>
                          {item.subject}
                        </h4>
                        {item.teacher !== '-' && (
                          <>
                            <div className="flex items-center space-x-2 text-xs text-slate-400">
                              <User className="h-3 w-3" />
                              <span>{item.teacher}</span>
                            </div>
                            <div className="text-xs text-slate-400 mt-1">
                              📍 {item.room}
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Assignments Tab */}
        {activeTab === 'assignments' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-yellow-400">Daftar Tugas</h2>
              <button className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors flex items-center space-x-2">
                <Upload className="h-4 w-4" />
                <span>Upload Tugas</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {assignments.map((assignment, index) => (
                <motion.div
                  key={assignment.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-400 mb-1">
                        {assignment.title}
                      </h3>
                      <p className="text-slate-300 text-sm">{assignment.subject}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      assignment.status === 'submitted'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-orange-500/20 text-orange-400'
                    }`}>
                      {assignment.status === 'submitted' ? 'Sudah Dikumpul' : 'Belum Dikumpul'}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm mb-4">{assignment.description}</p>

                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-2 text-slate-400">
                      <User className="h-4 w-4" />
                      <span>{assignment.teacher}</span>
                    </div>
                    <div className="text-slate-400">
                      Deadline: {new Date(assignment.dueDate).toLocaleDateString('id-ID')}
                    </div>
                  </div>

                  {assignment.status === 'pending' && (
                    <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                      <Upload className="h-4 w-4" />
                      <span>Upload Tugas</span>
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Materials Tab */}
        {activeTab === 'materials' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-yellow-400">Materi Pembelajaran</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((material, index) => (
                <motion.div
                  key={material.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        material.type === 'PDF' ? 'bg-red-500/20' : 'bg-blue-500/20'
                      }`}>
                        <FileText className={`h-5 w-5 ${
                          material.type === 'PDF' ? 'text-red-400' : 'text-blue-400'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm">{material.title}</h3>
                        <p className="text-slate-400 text-xs">{material.subject}</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400">{material.type}</span>
                  </div>

                  <div className="flex justify-between items-center text-xs text-slate-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-3 w-3" />
                      <span>{material.teacher}</span>
                    </div>
                    <span>{material.size}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">
                      {new Date(material.uploadDate).toLocaleDateString('id-ID')}
                    </span>
                    <button className="bg-yellow-400 text-slate-900 px-3 py-1 rounded text-xs font-medium hover:bg-yellow-300 transition-colors flex items-center space-x-1">
                      <Download className="h-3 w-3" />
                      <span>Download</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Schedule

