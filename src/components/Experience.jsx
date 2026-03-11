import { motion } from "framer-motion"
import { FaBriefcase, FaLaptopCode, FaTools } from "react-icons/fa"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

function Experience() {
  return (
    <section id="experience">

      <h2>Experience & Learning Journey</h2>

      <motion.div
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <motion.div className="experience-card card" variants={cardVariants}>

          <div className="exp-icon">
            <FaBriefcase size={28}/>
          </div>

          <div className="exp-header">
            <h3>Trainee Technical Support Engineer</h3>
            <span>Sep 2023 – Nov 2023</span>
          </div>

          <p className="company">
            Superwell Services Pvt. Ltd. (Deputed at Sony India)
          </p>

          <p>
            Worked on system log analysis, troubleshooting user issues,
            and assisting in improving system performance.
          </p>

        </motion.div>


        <motion.div className="experience-card card" variants={cardVariants}>

          <div className="exp-icon">
            <FaTools size={28}/>
          </div>

          <div className="exp-header">
            <h3>Website Troubleshooting Intern</h3>
            <span>Feb 2023 – May 2023</span>
          </div>

          <p className="company">
            SP Automation, Faridabad
          </p>

          <p>
            Diagnosed website issues, optimized performance and implemented
            feature updates.
          </p>

        </motion.div>


        <motion.div className="experience-card card" variants={cardVariants}>

          <div className="exp-icon">
            <FaLaptopCode size={28}/>
          </div>

          <div className="exp-header">
            <h3>DevOps & Cloud Learning Projects</h3>
            <span>2024 – Present</span>
          </div>

          <p>
            Building DevOps projects including CI/CD pipelines with Jenkins,
            Docker, Kubernetes and monitoring using Prometheus & Grafana.
          </p>

        </motion.div>

      </motion.div>

    </section>
  )
}

export default Experience