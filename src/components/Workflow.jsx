import './Workflow.css'

const steps = [
  { number: '01', title: 'Understand', description: 'Understand the requirement and identify the actual problem.' },
  { number: '02', title: 'Analyze', description: 'Investigate the system, data, architecture or infrastructure.' },
  { number: '03', title: 'Build', description: 'Implement a practical technical solution.' },
  { number: '04', title: 'Test', description: 'Test functionality, reliability and usability.' },
  { number: '05', title: 'Improve', description: 'Optimize the solution based on results.' }
]

function Workflow() {
  return (
    <section className="section workflow-section">
      <div className="section-header">
        <p className="section-kicker">Approach</p>
        <h2>How I approach technical problems.</h2>
      </div>

      <div className="workflow-grid">
        {steps.map((step) => (
          <article className="workflow-card" key={step.number}>
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Workflow
