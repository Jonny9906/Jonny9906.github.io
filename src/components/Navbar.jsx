import { NavLink } from 'react-router-dom'
import './Navbar.css'

const resumeUrl = `${import.meta.env.BASE_URL}Jonathan_Nguyen_resume.pdf`

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Home
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Projects
        </NavLink>
        <a href={resumeUrl} className="nav-link" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </nav>
  )
}

export default Navbar
