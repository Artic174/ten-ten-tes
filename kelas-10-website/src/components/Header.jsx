import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, Users, GraduationCap, Briefcase, Calendar, Megaphone, Camera, Phone, Trophy, Heart } from 'lucide-react'
import logoKelas from '../assets/logo_kelas.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Beranda', icon: Home },
    { path: '/students', label: 'Murid', icon: Users },
    { path: '/teachers', label: 'Guru', icon: GraduationCap },
    { path: '/organization', label: 'Organisasi', icon: Briefcase },
    { path: '/schedule', label: 'Jadwal', icon: Calendar },
    { path: '/announcements', label: 'Pengumuman', icon: Megaphone },
    { path: '/gallery', label: 'Galeri', icon: Camera },
    { path: '/contact', label: 'Kontak', icon: Phone },
    { path: '/achievements', label: 'Prestasi', icon: Trophy },
    { path: '/interactive', label: 'Interaktif', icon: Heart }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-slate-700/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logoKelas} alt="Logo Kelas 10.10" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold text-yellow-400">Kelas 10.10</h1>
              <p className="text-xs text-slate-300">TKJ - SMK</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-yellow-400 text-slate-900 font-medium'
                      : 'text-slate-300 hover:text-yellow-400 hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-yellow-400 hover:bg-slate-700/50 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-700/50">
            <nav className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-yellow-400 text-slate-900 font-medium'
                        : 'text-slate-300 hover:text-yellow-400 hover:bg-slate-700/50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

