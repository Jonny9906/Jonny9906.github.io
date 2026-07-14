import { Link } from 'react-router-dom'
import './Home.css'

const portraitUrl = `${import.meta.env.BASE_URL}PFP.jpg`
const resumeUrl = `${import.meta.env.BASE_URL}Jonathan_Nguyen_resume.pdf`

function Home() {
  return (
    <section className="home">
      <header className="bio">
        <div className="bio-portrait">
          <img
            src={portraitUrl}
            alt="Jonathan Nguyen"
            className="portrait-img"
            width="320"
            height="320"
          />
        </div>
        <div className="bio-text">
          <p className="bio-kicker">Applied Mathematics and Machine Learning</p>
          <h1 className="bio-name">Jonathan Nguyen</h1>
          <p className="bio-affiliation">University of California, Berkeley</p>
          <p className="bio-degree">B.A. Applied Mathematics | Expected May 2028</p>
          <div className="bio-contact" aria-label="Contact links">
            <a href="mailto:jonathan.b.nguyen@berkeley.edu">Email</a>
            <span aria-hidden="true">|</span>
            <a href="https://github.com/Jonny9906" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span aria-hidden="true">|</span>
            <a href="https://www.linkedin.com/in/jonathan-nguyen-b0279529a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span aria-hidden="true">|</span>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">CV</a>
          </div>
        </div>
      </header>

      <section className="section prose" aria-labelledby="about-title">
        <h2 id="about-title" className="section-title">About</h2>
        <p>
          I am an applied mathematics student at UC Berkeley interested in machine
          learning for structured scientific data. My work spans graph neural
          networks, topological data analysis, computer vision, optimization, and
          production AI systems.
        </p>
        <p>
          At Florida State University, I study functional-connectivity graphs for
          neurological-disease classification and protein–protein interaction (PPI)
          networks. My recent work includes SPD-manifold representations,
          differentiable graph sparsification, line-graph models, and learned fusion
          across multiple biological data views.
        </p>
        <p>
          I also build applied systems at SkyVault AI and lead Project Motion, a
          computer-vision biomechanics platform used by collegiate baseball athletes.
        </p>
      </section>

      <section className="section" aria-labelledby="interests-title">
        <h2 id="interests-title" className="section-title">Research Interests</h2>
        <ul className="interest-list">
          <li>
            <strong>Graph representation learning</strong>
            <span>GNN architectures, multi-view fusion, and learning on functional-connectivity and PPI networks.</span>
          </li>
          <li>
            <strong>Geometric and topological machine learning</strong>
            <span>SPD manifolds, persistent structure, and topology-aware representations.</span>
          </li>
          <li>
            <strong>Scientific vision and intelligent systems</strong>
            <span>Pose estimation, biomechanics, optimization, and reliable LLM extraction.</span>
          </li>
        </ul>
      </section>

      <section className="section" aria-labelledby="roles-title">
        <h2 id="roles-title" className="section-title">Current Roles</h2>
        <ul className="timeline-list">
          <li>
            <span className="timeline-date">Sep. 2025 - Present</span>
            <span>Undergraduate Research Assistant, Florida State University Mathematics</span>
          </li>
          <li>
            <span className="timeline-date">Oct. 2025 - Present</span>
            <span>AI Engineer Intern, SkyVault AI</span>
          </li>
          <li>
            <span className="timeline-date">2024 - Present</span>
            <span>Founder and Lead Developer, Project Motion</span>
          </li>
        </ul>
        <p className="section-link">
          <Link to="/research">View research and selected projects</Link>
        </p>
      </section>
    </section>
  )
}

export default Home
