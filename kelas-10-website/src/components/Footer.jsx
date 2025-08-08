import { Heart, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="glass-card border-t border-slate-700/50 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info Kelas */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Kelas 10.10 TKJ</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Website resmi Kelas 10.10 Teknik Komputer dan Jaringan. 
              Tempat berkumpulnya 43 murid dan 17 guru dalam satu keluarga besar yang solid.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li><a href="/schedule" className="text-slate-300 hover:text-yellow-400 text-sm transition-colors">Jadwal Pelajaran</a></li>
              <li><a href="/announcements" className="text-slate-300 hover:text-yellow-400 text-sm transition-colors">Pengumuman</a></li>
              <li><a href="/gallery" className="text-slate-300 hover:text-yellow-400 text-sm transition-colors">Galeri Kegiatan</a></li>
              <li><a href="/achievements" className="text-slate-300 hover:text-yellow-400 text-sm transition-colors">Papan Prestasi</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Kontak</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-slate-300 text-sm">
                <Mail className="h-4 w-4" />
                <span>kelas1010tkj@sekolah.ac.id</span>
              </div>
              <a href="https://chat.whatsapp.com/YOUR_WHATSAPP_GROUP_LINK" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-300 text-sm hover:text-yellow-400 transition-colors">
                <Phone className="h-4 w-4" />
                <span>WhatsApp Grup Kelas</span>
              </a>
              <div className="flex items-center space-x-2 text-slate-300 text-sm">
                <MapPin className="h-4 w-4" />
                <span>SMK Negeri - Ruang 10.10</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 Kelas 10.10 TKJ. Dibuat dengan <Heart className="h-4 w-4 inline text-red-400" /> oleh murid-murid kelas.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-yellow-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-yellow-400 text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

