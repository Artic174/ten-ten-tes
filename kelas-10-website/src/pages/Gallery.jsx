import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Camera, Upload, Play, User, Calendar, Heart, MessageCircle, Share2, X, ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [uploadData, setUploadData] = useState({
    title: '',
    description: '',
    file: null,
    uploaderName: ''
  })
  const [filter, setFilter] = useState('all') // all, photos, videos
  const [loading, setLoading] = useState(true)

  // Fetch gallery items from API
  useEffect(() => {
    fetchGalleryItems()
  }, [])

  const fetchGalleryItems = async () => {
    try {
      const response = await fetch('/api/gallery')
      if (response.ok) {
        const data = await response.json()
        // Format the data to match frontend expectations
        const formattedData = data.map(item => ({
          id: item.id,
          title: item.title,
          description: item.description,
          url: item.file_path,
          type: item.file_type,
          uploaderName: item.uploaded_by,
          uploadDate: item.created_at
        }))
        setGalleryItems(formattedData)
      }
    } catch (error) {
      console.error('Error fetching gallery items:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setUploadData(prev => ({ ...prev, file }))
    }
  }

  const handleUploadSubmit = async (event) => {
    event.preventDefault()
    
    if (!uploadData.file || !uploadData.title || !uploadData.uploaderName) {
      alert('Harap isi semua field yang diperlukan')
      return
    }

    const formData = new FormData()
    formData.append('file', uploadData.file)
    formData.append('title', uploadData.title)
    formData.append('description', uploadData.description)
    formData.append('uploaderName', uploadData.uploaderName)

    try {
      const response = await fetch('/api/gallery/upload', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        const newItem = await response.json()
        // Format the response to match frontend expectations
        const formattedItem = {
          id: newItem.id,
          title: newItem.title,
          description: newItem.description,
          url: newItem.url,
          type: newItem.type,
          uploaderName: newItem.uploaderName,
          uploadDate: newItem.uploadDate
        }
        setGalleryItems(prev => [formattedItem, ...prev])
        setShowUploadModal(false)
        setUploadData({ title: '', description: '', file: null, uploaderName: '' })
        alert('File berhasil diunggah!')
      } else {
        alert('Gagal mengunggah file')
      }
    } catch (error) {
      console.error('Error uploading file:', error)
      alert('Terjadi kesalahan saat mengunggah file')
    }
  }

  const filteredItems = galleryItems.filter(item => {
    if (filter === 'all') return true
    if (filter === 'photos') return item.type === 'image'
    if (filter === 'videos') return item.type === 'video'
    return true
  })

  const openLightbox = (item) => {
    setSelectedItem(item)
  }

  const closeLightbox = () => {
    setSelectedItem(null)
  }

  const navigateLightbox = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id)
    let newIndex
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length
    } else {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1
    }
    
    setSelectedItem(filteredItems[newIndex])
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen py-8 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <p className="text-slate-300">Memuat galeri...</p>
        </div>
      </div>
    )
  }

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
          <Camera className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Galeri Kelas</h1>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Dokumentasi kegiatan dan momen berharga Kelas 10.10 TKJ
          </p>
          
          {/* Upload Button */}
          <button
            onClick={() => setShowUploadModal(true)}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <Upload className="h-5 w-5" />
            <span>Upload Foto/Video</span>
          </button>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="glass-card p-1 rounded-lg">
            <div className="flex space-x-1">
              {[
                { key: 'all', label: 'Semua' },
                { key: 'photos', label: 'Foto' },
                { key: 'videos', label: 'Video' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    filter === tab.key
                      ? 'bg-yellow-400 text-slate-900'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Camera className="h-24 w-24 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-400 mb-2">Belum ada konten</h3>
            <p className="text-slate-500">Jadilah yang pertama mengunggah foto atau video!</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <div className="relative aspect-square">
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center relative">
                      <video
                        src={item.url}
                        className="w-full h-full object-cover"
                        muted
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <h3 className="text-white font-semibold text-sm truncate">{item.title}</h3>
                    <div className="flex items-center space-x-2 text-xs text-slate-300 mt-1">
                      <User className="h-3 w-3" />
                      <span>{item.uploaderName}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-lg p-6 w-full max-w-md"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Upload Foto/Video</h2>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleUploadSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    File *
                  </label>
                  <input
                    type="file"
                    accept="image/*,video/*"
                    onChange={handleFileUpload}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Judul *
                  </label>
                  <input
                    type="text"
                    value={uploadData.title}
                    onChange={(e) => setUploadData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                    placeholder="Masukkan judul..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Deskripsi
                  </label>
                  <textarea
                    value={uploadData.description}
                    onChange={(e) => setUploadData(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 resize-none"
                    rows="3"
                    placeholder="Deskripsi opsional..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Nama Pengunggah *
                  </label>
                  <input
                    type="text"
                    value={uploadData.uploaderName}
                    onChange={(e) => setUploadData(prev => ({ ...prev, uploaderName: e.target.value }))}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                    placeholder="Nama Anda..."
                    required
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowUploadModal(false)}
                    className="flex-1 px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
                  >
                    Upload
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-yellow-400 z-10"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Navigation Buttons */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={() => navigateLightbox('prev')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 z-10"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </button>
                  <button
                    onClick={() => navigateLightbox('next')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 z-10"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </button>
                </>
              )}

              {/* Media Content */}
              <div className="max-w-4xl max-h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center mb-4">
                  {selectedItem.type === 'image' ? (
                    <img
                      src={selectedItem.url}
                      alt={selectedItem.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <video
                      src={selectedItem.url}
                      controls
                      className="max-w-full max-h-full object-contain"
                    />
                  )}
                </div>

                {/* Media Info */}
                <div className="glass-card rounded-lg p-4 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{selectedItem.title}</h3>
                  {selectedItem.description && (
                    <p className="text-slate-300 mb-3">{selectedItem.description}</p>
                  )}
                  <div className="flex items-center justify-center space-x-4 text-sm text-slate-400">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{selectedItem.uploaderName}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(selectedItem.uploadDate)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery

