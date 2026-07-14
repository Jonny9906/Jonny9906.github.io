import './Projects.css'

const researchEntries = [
  {
    id: 'fsu-research',
    period: 'Sep. 2025 - Present',
    title: 'Undergraduate Research Assistant',
    organization: 'Florida State University, Department of Mathematics',
    location: 'Tallahassee, FL',
    detail: 'Advisor: Dr. Astrit Tola',
    bullets: [
      'Researching neurological-disease classification from fMRI-derived functional-connectivity graphs using graph neural networks and topological data analysis.',
      'Helped improve ABIDE autism-classification accuracy from 58% to 71% by iterating on graph-based deep-learning architectures in PyTorch.',
      'Implemented SPD-manifold learning with Frechet mean estimation, tangent-space projection, and differentiable top-k graph sparsification via Gumbel-Softmax.',
      'Built directed line-graph and five-view GraphSAGE/Polynormer models that fuse topology, ESM2 sequence embeddings, and pLDDT confidence features.',
    ],
    methods: 'PyTorch, PyTorch Geometric, GraphSAGE, Polynormer, TDA, SPD manifolds',
  },
  {
    id: 'skyvault',
    period: 'Oct. 2025 - Present',
    title: 'AI Engineer Intern',
    organization: 'SkyVault AI',
    location: 'Palo Alto, CA',
    bullets: [
      'Engineered SkyvaultQuarterback, a Python and Claude platform for managing a multibillion-dollar data-center sales pipeline in PostgreSQL and Supabase.',
      'Built a schema-constrained LLM extraction pipeline that converts emails, Read.ai transcripts, and screenshots into validated deal facts with source provenance.',
      'Implemented authenticated CLI workflows, row-level security, audited writes, append-only history, and reversible updates.',
    ],
    methods: 'Python, Claude API, Pydantic, PostgreSQL, Supabase',
  },
  {
    id: 'project-motion',
    period: '2024 - Present',
    title: 'Founder and Lead Developer',
    organization: 'Project Motion',
    location: 'Palo Alto, CA',
    link: 'https://github.com/Jonny9906/ProjectMotion',
    bullets: [
      'Built a computer-vision biomechanics platform using YOLOv8-L Pose to extract 17 body keypoints per frame and reconstruct baseball swing kinematics.',
      'Integrated pose estimates with a Unity/C# skeletal renderer and joint-kinematics pipeline to produce quantitative metrics and coach-facing feedback.',
      'The platform has been adopted by athletes at Stanford, Cal Poly, Brown, and Holy Cross.',
    ],
    methods: 'Python, YOLOv8-L Pose, computer vision, Unity, C#',
  },
]

const projectEntries = [
  {
    id: 'aidj',
    title: 'AIDJ',
    methods: 'Python, librosa, digital signal processing',
    description: 'An end-to-end music-information-retrieval system that estimates beat grids and musical key, orders tracks by tempo and Camelot compatibility, and renders phrase-aligned, beatmatched mixes.',
  },
  {
    id: 'ray-tracer',
    title: 'Black-Hole GPU Ray Tracer',
    methods: 'C++, GLSL, OpenGL',
    description: 'A GPU-accelerated ray tracer for Schwarzschild gravitational lensing that numerically integrates null geodesics in an OpenGL compute shader.',
  },
]

const skillGroups = [
  ['Languages', 'Python, C++, SQL, C#, Java, GLSL'],
  ['ML and Data', 'PyTorch, PyTorch Geometric, scikit-learn, Ultralytics YOLO, OpenCV, NumPy, pandas, librosa'],
  ['Methods', 'Graph neural networks, transformers, attention, computer vision, pose estimation, topological data analysis, SPD-manifold learning'],
  ['Systems', 'Claude API, Pydantic, PostgreSQL, Supabase, Docker, Kubernetes, Git, Unity, OpenGL'],
]

function ResearchEntry({ entry }) {
  return (
    <li className="research-entry">
      <p className="entry-period">{entry.period}</p>
      <article className="entry-body">
        <div className="entry-heading">
          <h3 className="entry-title">{entry.title}</h3>
          <span className="entry-location">{entry.location}</span>
        </div>
        <p className="entry-organization">
          {entry.link ? (
            <a href={entry.link} target="_blank" rel="noopener noreferrer">
              {entry.organization}
            </a>
          ) : entry.organization}
          {entry.detail && <span> | {entry.detail}</span>}
        </p>
        <ul className="entry-bullets">
          {entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
        <p className="entry-methods"><strong>Methods:</strong> {entry.methods}</p>
      </article>
    </li>
  )
}

function Research() {
  return (
    <section className="research-page">
      <header className="research-header">
        <p className="page-kicker">Curriculum Vitae</p>
        <h1 className="research-title">Research &amp; Projects</h1>
        <p className="research-subtitle">
          Work across graph machine learning, scientific computing, computer vision,
          and production AI systems.
        </p>
      </header>

      <section className="research-group" aria-labelledby="experience-title">
        <h2 id="experience-title" className="group-title">Research &amp; Experience</h2>
        <ol className="research-list">
          {researchEntries.map((entry) => <ResearchEntry key={entry.id} entry={entry} />)}
        </ol>
      </section>

      <section className="research-group" aria-labelledby="projects-title">
        <h2 id="projects-title" className="group-title">Selected Projects</h2>
        <ol className="selected-projects">
          {projectEntries.map((project) => (
            <li key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="project-methods">{project.methods}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="research-group" aria-labelledby="skills-title">
        <h2 id="skills-title" className="group-title">Technical Profile</h2>
        <dl className="skills-list">
          {skillGroups.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </section>
  )
}

export default Research
