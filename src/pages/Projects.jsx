import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Project Motion',
    description: 'A computer-vision biomechanics platform that extracts 17 body keypoints from video, reconstructs baseball swing kinematics, and turns motion into quantitative metrics and coach-facing feedback.',
    tags: ['Python', 'YOLOv8-L Pose', 'Computer Vision', 'Unity', 'C#'],
    link: 'https://github.com/Jonny9906/ProjectMotion',
    demo: null,
  },
  {
    id: 2,
    title: 'AIDJ',
    description: 'An end-to-end music information retrieval and DSP system that estimates beat grids and musical key, orders tracks by tempo and Camelot compatibility, and renders phrase-aligned, beatmatched mixes.',
    tags: ['Python', 'librosa', 'DSP', 'Music Information Retrieval'],
    link: null,
    demo: null,
  },
  {
    id: 3,
    title: 'Black-Hole GPU Ray Tracer',
    description: 'A GPU-accelerated ray tracer for Schwarzschild gravitational lensing that numerically integrates null geodesics in an OpenGL compute shader.',
    tags: ['C++', 'GLSL', 'OpenGL', 'GPU Computing'],
    link: null,
    demo: null,
  },
]

function Projects() {
  return (
    <section className="projects">
      <div className="projects-container">
        <header className="projects-header">
          <h1 className="projects-title">Projects</h1>
          <p className="projects-subtitle">Selected work across machine learning, graphics, and signal processing</p>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                {(project.link || project.demo) && (
                  <div className="project-links">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                          <path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"/>
                        </svg>
                        Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
