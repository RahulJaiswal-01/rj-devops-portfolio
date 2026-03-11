import Tilt from "react-parallax-tilt"
import notes from "../assets/projects/notes-app.png"
import monitoring from "../assets/projects/monitoring-dashboard.png"
import analytics from "../assets/projects/credit-card-dashboard.png"

function Projects() {
  return (
    <section id="projects" className="projects" data-aos="zoom-in">

      <h2>Projects</h2>

      <div className="project-grid">

        {/* Project 1 */}
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.2}
          scale={1.05}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          transitionSpeed={250}
        >
          <div className="project-card card" data-aos="flip-up" data-aos-delay="100">

            <img src={notes} alt="Notes App" />

            <h3>CI/CD Deployment Pipeline</h3>

            <p>
              End-to-end CI/CD pipeline using Jenkins, Docker and Kubernetes (K3s)
              for a Flask notes application.
            </p>

            <div className="tech">
              Jenkins • Docker • Kubernetes • Git
            </div>

            <a href="https://github.com/RahulJaiswal-01/notes-app">
              View GitHub
            </a>

          </div>
        </Tilt>


        {/* Project 2 */}
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.2}
          scale={1.05}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          transitionSpeed={250}
        >
          <div className="project-card card" data-aos="flip-up" data-aos-delay="200">

            <img src={monitoring} alt="Monitoring System" />

            <h3>Monitoring & Alerting System</h3>

            <p>
              System monitoring using Prometheus and Grafana with Alertmanager
              notifications.
            </p>

            <div className="tech">
              Prometheus • Grafana • Docker Compose
            </div>

            <a href="https://github.com/RahulJaiswal-01/monitoring-dashboard-prometheus-grafana">
              View GitHub
            </a>

          </div>
        </Tilt>


        {/* Project 3 */}
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.2}
          scale={1.05}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          transitionSpeed={250}
        >
          <div className="project-card card" data-aos="flip-up" data-aos-delay="300">

            <img src={analytics} alt="Analytics Dashboard" />

            <h3>Credit Card Analytics Dashboard</h3>

            <p>
              Power BI dashboard analyzing 667K+ credit card transactions
              using SQL Server datasets.
            </p>

            <div className="tech">
              Power BI • SQL Server • Data Analytics
            </div>

            <a href="https://github.com/RahulJaiswal-01/credit_card_dashboard">
              View GitHub
            </a>

          </div>
        </Tilt>

      </div>

    </section>
  )
}

export default Projects