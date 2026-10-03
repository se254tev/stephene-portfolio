import { useState } from 'react'
import './Projects.css'

const projects = [
  {
  title: 'BOLT Market: Digital Multi-Vendor Marketplace',
  category: 'Academic',
  filters: ['Academic'],
  description: 'A digital multi-vendor marketplace designed to connect buyers, sellers, property providers, and delivery services through a unified platform aligned with Kenya Vision 2030.',
  problem: 'Fragmented online commerce, limited access to digital markets, inefficient delivery coordination, and trust challenges between buyers and sellers.',
  technologies: ['Flutter', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'AI', 'Blockchain'],
  features: ['Multi-vendor marketplace', 'User authentication', 'Product and property listings', 'Order management', 'Delivery tracking', 'Admin dashboards', 'AI-powered features', 'Secure transactions'],
  github: null,
  demo: null,
  accent: 'capstone'
  },
  {
    title: 'AI Radio Presenter',
    category: 'AI',
    filters: ['AI', 'Audio', 'Backend'],
    status: 'Active Development',
    description:
      'An autonomous AI-driven radio presenter system for planning, generating and streaming spoken content (repository: AI-radio-presenter).',
    problem: 'Experimenting with AI-driven show planning, natural language generation and high-quality TTS for continuous broadcast.',
    technologies: ['FastAPI', 'Uvicorn', 'OpenAI', 'ElevenLabs', 'Redis', 'Postgres (SQLAlchemy, asyncpg)', 'MongoDB (motor/pymongo)', 'APScheduler'],
    features: ['Autonomous broadcast loop', 'Show planner', 'LLM-driven script generation', 'Text-to-speech integration', 'Scheduling and streaming'],
    github: 'https://github.com/se254tev/AI-radio-presenter',
    demo: null,
    accent: 'voice'
  },
  {
    title: 'Sikizwa Voice 360',
    category: 'AI',
    filters: ['AI', 'Mobile', 'Backend'],
    description:
      'A digital social-support and distress-response platform focused on real-time communication, AI-assisted interaction, and voice-enabled user support.',
    problem: 'To create a responsive support experience that combines communication, backend services, and intelligent assistance in one platform.',
    technologies: ['Flutter', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Socket.IO', 'FastAPI', 'AI services'],
    features: ['Real-time communication', 'AI-assisted interaction', 'Voice-related capabilities', 'Backend services', 'Administrative functionality'],
    github: 'https://github.com/se254tev/Sikizwa-Voice-360-',
    demo: null,
    accent: 'voice'
  },
  {
    title: 'Bingo Meal',
    category: 'Web',
    filters: ['Web', 'Backend'],
    description:
      'A food ordering and meal management platform covering customer ordering and administrative operations.',
    problem: 'To provide a clear food ordering workflow for customers while giving administrators oversight over menu and operation management.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Web frontend', 'Admin dashboard'],
    features: ['Customer ordering flow', 'Admin dashboard', 'Meal management', 'Platform integration'],
    github: null,
    demo: 'https://bingorestourant.netlify.app/',
    admin: 'https://bingoadmindarshboard.netlify.app/',
    accent: 'meal'
  }
]

const filters = ['All', 'Academic', 'Web', 'Mobile', 'Backend', 'AI', 'Audio', 'Networking', 'Data']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.filters.includes(activeFilter))

  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <p className="section-kicker">Projects</p>
        <h2>Selected work combining software, systems and practical problem solving.</h2>
      </div>

      <div className="filter-bar" aria-label="Project filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article className={`project-card ${project.accent}`} key={project.title}>
            <div className="project-visual" aria-hidden="true">
              <div className="visual-badge">{project.category}</div>
            </div>

            <div className="project-body">
              <div className="project-meta">
                <span>{project.category}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-problem">
                <strong>Problem solved</strong>
                <p>{project.problem}</p>
              </div>

              <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <ul className="feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
                )}
                {project.admin && (
                  <a href={project.admin} target="_blank" rel="noreferrer">Admin Panel</a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
