import './Experience.css'

const experience = [
  {
    title: 'ICT Attachment / ICT Support',
    company: 'Mawego National Polytechnic',
    period: 'Industrial Attachment',
    points: [
      'Provided computer laboratory support and guided users in a practical technical environment.',
      'Handled hardware troubleshooting, Windows installation, software installation and peripherals support.',
      'Managed user account configuration, system diagnostics and network connectivity checks.',
      'Supported practical examinations and assisted with day-to-day maintenance across workstations.'
    ]
  }
]

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-header">
        <p className="section-kicker">Experience</p>
        <h2>Technical support and systems-focused experience.</h2>
      </div>

      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-card" key={item.title}>
            <div className="experience-marker" aria-hidden="true"></div>
            <div className="experience-content">
              <p className="experience-period">{item.period}</p>
              <h3>{item.title}</h3>
              <p className="company-name">{item.company}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
