import { FaDocker, FaGitAlt, FaLinux, FaPython, FaJava, FaDatabase, FaUbuntu  } from "react-icons/fa"
import { SiKubernetes, SiPrometheus, SiGrafana, SiJavascript, SiMysql, SiCplusplus} from "react-icons/si"
import { VscGithub } from "react-icons/vsc"
import { VscTerminalBash } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";
import { MdTroubleshoot } from "react-icons/md";
import { FaInfinity } from "react-icons/fa6";


function Skills() {
  return (
    <section id="skills">

      <h2>Technical Skills</h2>

      <div className="skills-container">

        <div className="skill-category card">
          <h3>DevOps & CI/CD</h3>
          <p>Jenkins | Git | GitHub | Docker | Docker Compose</p>
        </div>

        <div className="skill-category card">
          <h3>Monitoring & Observability </h3>
          <p>Prometheus Alertmanager | Grafana </p>
        </div>

        <div className="skill-category card">
          <h3>Version Control</h3>
          <p>Git | GitHub</p>
        </div>

        <div className="skill-category card">
          <h3>Linux & Systems</h3>
          <p>RHEL | Ubuntu | Bash | Networking | Troubleshooting</p>
        </div>

        <div className="skill-category card">
          <h3>Programming</h3>
          <p>Python | Java | C++ | JavaScript</p>
        </div>

        <div className="skill-category card">
          <h3>Databases & Analytics</h3>
          <p>MySQL | SQL Server | Power BI</p>
        </div>


      </div>

    </section>
  )
}


export default Skills