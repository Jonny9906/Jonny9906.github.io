import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Research from './pages/Projects'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Navigate to="/research" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <span>Jonathan Nguyen</span>
          <span aria-hidden="true">|</span>
          <a href="mailto:jonathan.b.nguyen@berkeley.edu">
            jonathan.b.nguyen@berkeley.edu
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
