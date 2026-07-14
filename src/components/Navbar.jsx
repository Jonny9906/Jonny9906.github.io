import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const resumeUrl = `${import.meta.env.BASE_URL}Jonathan_Nguyen_resume.pdf`

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="nav-brand">Jonathan Nguyen</Link>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About
          </NavLink>
          <NavLink to="/research" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Research
          </NavLink>
          <a href={resumeUrl} className="nav-link" target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
