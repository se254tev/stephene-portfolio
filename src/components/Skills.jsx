import './Skills.css'

const skillGroups = [
  {
    title: 'Software Development',
    items: ['HTML', 'CSS', 'JavaScript', 'Flutter', 'Dart', 'Node.js', 'Express.js', 'REST APIs']
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'MongoDB Atlas', 'Database design', 'CRUD operations']
  },
  {
    title: 'Networking',
    items: ['TCP/IP', 'IPv4', 'Subnetting', 'DHCP', 'DNS', 'Network troubleshooting', 'Cisco networking fundamentals', 'LAN configuration']
  },
  {
    title: 'Systems & IT Support',
    items: ['Windows', 'Hardware troubleshooting', 'OS installation', 'Software installation', 'System maintenance', 'Computer laboratory support', 'User account management']
  },
  {
    title: 'Data & Analytics',
    items: ['Data analysis', 'Dashboards', 'Reporting', 'Data visualization', 'Monitoring', 'Microsoft Excel']
  },
  {
    title: 'AI & Emerging Technologies',
    items: ['AI integration', 'AI-assisted development', 'Automation', 'Speech/voice technologies', 'Machine learning concepts', 'AI APIs']
  }
]

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-header">
        <p className="section-kicker">Skills</p>
        <h2>Applied technology skills across systems, software and data.</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.items.map((item) => (
                <span className="skill-chip" key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
