import './About.css'

const timeline = [
  'ICT Foundation',
  'Computer & Network Support',
  'Software Development',
  'Data & Systems',
  'Cloud Technologies',
  'AI Integration'
]

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-header">
        <p className="section-kicker">About</p>
        <h2>Engineer with a practical systems mindset.</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I&apos;m an ICT professional with a strong interest in building, troubleshooting, and improving practical
            technology solutions. My background spans software development, network support, systems work, data
            handling, and emerging AI-driven automation. I don&apos;t just learn technology theoretically — I build,
            troubleshoot, deploy, and improve real systems.
          </p>
          <p>
            I enjoy understanding how systems work together: from users and interfaces to infrastructure, data flows,
            automation, and reliable service delivery. That mindset helps me approach problems from both a technical
            and operational perspective.
          </p>
        </div>

        <div className="timeline" aria-label="Technical progression timeline">
          {timeline.map((item, index) => (
            <div className="timeline-item" key={item}>
              <span className="timeline-dot" aria-hidden="true"></span>
              <span className="timeline-label">{item}</span>
              {index < timeline.length - 1 && <span className="timeline-arrow" aria-hidden="true">↓</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
