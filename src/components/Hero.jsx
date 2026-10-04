import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <img
          className="hero-profile-photo"
          src="/images/stephene-otieno.png"
          alt="Stephene Otieno — ICT professional"
        />
        <p className="eyebrow">Hello, I&apos;m Stephene Otieno Odhiambo.</p>
        <h1>Building Practical Technology Solutions That Solve Real Problems.</h1>
        <p className="lead">
          I&apos;m an Information &amp; Communication Technology professional focused on software development,
          networking, systems, data, and emerging AI technologies.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button primary">View My Work</a>
          <a href="#contact" className="button secondary">Contact Me</a>
        </div>

        <a href="/STEPHENE_OTIENO_ODHIAMBO_ATS_CV.pdf" className="text-link" download>
          Download CV
        </a>
      </div>

      <div className="hero-visual" aria-label="Technology system illustration">
        <div className="visual-shell">
          <div className="panel top-panel">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <div className="code-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="node-grid">
            <div className="node node-a">Client</div>
            <div className="node node-b">API</div>
            <div className="node node-c">System</div>
            <div className="node node-d">Data</div>
            <div className="node node-e">AI</div>
          </div>

          <div className="signal signal-1"></div>
          <div className="signal signal-2"></div>
          <div className="signal signal-3"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
