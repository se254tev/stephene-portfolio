import './Education.css'

const education = [
  {
    degree: 'Bachelor of Science in Information & Communication Technology',
    school: 'School of Informatics and Innovative Systems',
    institution: 'Jaramogi Oginga Odinga University of Science and Technology',
    period: 'Current / Ongoing'
  }
]

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-header">
        <p className="section-kicker">Education</p>
        <h2>Academic foundation in ICT and systems thinking.</h2>
      </div>

      <div className="education-list">
        {education.map((item) => (
          <article className="education-card" key={item.degree}>
            <p className="education-period">{item.period}</p>
            <h3>{item.degree}</h3>
            <p className="institution-name">{item.institution}</p>
            <p>{item.school}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education
