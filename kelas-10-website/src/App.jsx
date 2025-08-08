import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Students from './pages/Students'
import Teachers from './pages/Teachers'
import Organization from './pages/Organization'
import Schedule from './pages/Schedule'
import Announcements from './pages/Announcements'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Achievements from './pages/Achievements'
import Interactive from './pages/Interactive'

function App() {
  const [currentQuote, setCurrentQuote] = useState(0)
  
  const quotes = [
    {
      text: "Pendidikan adalah senjata paling ampuh yang bisa kamu gunakan untuk mengubah dunia.",
      author: "Nelson Mandela"
    },
    {
      text: "Investasi terbaik adalah investasi pada pengetahuan.",
      author: "Benjamin Franklin"
    },
    {
      text: "Kegagalan adalah kesempatan untuk memulai lagi dengan lebih cerdas.",
      author: "Henry Ford"
    },
    {
      text: "Masa depan milik mereka yang percaya pada keindahan mimpi mereka.",
      author: "Eleanor Roosevelt"
    }
  ]

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home quotes={quotes} currentQuote={currentQuote} setCurrentQuote={setCurrentQuote} />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/interactive" element={<Interactive />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

