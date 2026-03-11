function About() {
  return (
    <section id="about">

      <h2>About Me</h2>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2023</h3>
            <p>Started BTech in Computer Science.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2024</h3>
            <p>Learned React, MySQL and built web projects.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2025</h3>
            <p>Exploring DevOps tools like Docker, Kubernetes and monitoring systems.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>2026</h3>
            <p>Building portfolio projects and learning cloud infrastructure.</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About