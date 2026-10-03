import './Services.css'

const services = [
  {
    title: 'IT Support',
    description: 'Computer troubleshooting, software installation, maintenance and configuration.'
  },
  {
    title: 'Network Support',
    description: 'Basic LAN configuration, connectivity troubleshooting and network diagnostics.'
  },
  {
    title: 'Software Development',
    description: 'Web applications, backend systems and API development.'
  },
  {
    title: 'Mobile Development',
    description: 'Flutter-based application development.'
  },
  {
    title: 'Data & Reporting',
    description: 'Dashboards, data organization, reporting and visualization.'
  },
  {
    title: 'AI Integration',
    description: 'Integrating AI capabilities into software applications and workflows.'
  }
]

function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="section-header">
        <p className="section-kicker">Services</p>
        <h2>What I can help with.</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon" aria-hidden="true">0{services.indexOf(service) + 1}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
