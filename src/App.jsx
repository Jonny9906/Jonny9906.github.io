import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ParticleNetwork from './components/ParticleNetwork'
import Home from './pages/Home'
import Projects from './pages/Projects'
import './App.css'

function App() {
  return (
    <div className="app">
      <ParticleNetwork />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
